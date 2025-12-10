import { AfterViewInit, Component, ElementRef, inject, signal, viewChild, ViewChild } from '@angular/core';
import Konva from "konva";
import { FaceDetection } from "../../services/face-detection";
import { HttpClient } from "@angular/common/http";
import { CommonDialog } from "../common-dialog/common-dialog";
import { Slider } from "primeng/slider";
import { DecimalPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Button } from "primeng/button";
import { Tag } from "primeng/tag";

@Component({
	selector: 'app-face-auto-cropper',
	standalone: true,
	imports: [
		CommonDialog,
		Slider,
		DecimalPipe,
		FormsModule,
		Button,
		Tag
	],
	templateUrl: './face-auto-cropper.html',
	styleUrl: './face-auto-cropper.scss'
})
export class FaceAutoCropper implements AfterViewInit {
	dialog = viewChild(CommonDialog)
	@ViewChild('stageContainer') stageContainer!: ElementRef<HTMLDivElement>;
	http = inject(HttpClient)
	fd = inject(FaceDetection)
	stage!: Konva.Stage;
	layer!: Konva.Layer;
	konvaImg!: Konva.Image;
	rotation = signal(0)


	stageW = 480;
	stageH = 480; // 固定為 1:1


	image!: HTMLImageElement;
	imageLoaded = signal(false);


// transform
	imgX = 0;
	imgY = 0;
	imgScale = 1;


	faceCenterX: number | null = null;
	faceCenterY: number | null = null;

	oOpenDialog() {
		this.dialog()?.onOpen();
	}

	ngAfterViewInit() {
		this.initKonva();
	}

	rotate(deg: number) {
		this.rotation.update(prev => (prev + deg) % 360);
		this.konvaImg.rotation(this.rotation() + deg);
		this.layer.draw();
	}

	initKonva() {
		this.stage = new Konva.Stage({
			container: this.stageContainer.nativeElement,
			width: this.stageW,
			height: this.stageH,
		});
		this.layer = new Konva.Layer();
		this.stage.add(this.layer);


		// crop frame (visual only)
		const rect = new Konva.Rect({
			x: 0,
			y: 0,
			width: this.stageW,
			height: this.stageH,
			stroke: '#fff',
			strokeWidth: 2,
		});
		this.layer.add(rect);


		this.layer.draw();
	}

	onFileChange(event: any) {
		const file = event.target.files[0];
		if (!file) return;


		const url = URL.createObjectURL(file);
		this.loadImage(url);
	}

	loadImage(url: string) {
		this.imageLoaded.set(false);


		const img = new Image();
		img.crossOrigin = 'anonymous';


		img.onload = () => {
			this.image = img;
			this.detectFace().then(() => {
				this.placeImage();
				this.imageLoaded.set(true);
			});
		};


		img.src = url;
	}

	async detectFace() {
		const canvas = document.createElement('canvas');
		canvas.width = this.image.naturalWidth;
		canvas.height = this.image.naturalHeight;
		canvas.getContext('2d')!.drawImage(this.image, 0, 0);


		const result = await this.fd.detect(canvas);


		if (result?.detections?.[0]) {
			const box = result.detections[0].boundingBox;
			this.faceCenterX = box.originX + box.width / 2;
			this.faceCenterY = box.originY + box.height / 2;
		} else {
			this.faceCenterX = this.image.naturalWidth / 2;
			this.faceCenterY = this.image.naturalHeight / 2;
		}
	}

	placeImage() {
		if (this.konvaImg) this.konvaImg.destroy();


		this.konvaImg = new Konva.Image({
			image: this.image,
			draggable: true,
		});

		// 設定 offset 為圖片中心
		this.konvaImg.offset({
			x: this.image.naturalWidth / 2,
			y: this.image.naturalHeight / 2,
		});


		this.layer.add(this.konvaImg);
		this.layer.draw();


		this.autoCenterToFace();


		this.konvaImg.on('dragend', () => {
			this.imgX = this.konvaImg.x();
			this.imgY = this.konvaImg.y();
		});
	}

	autoCenterToFace() {
		const iw = this.image.naturalWidth;
		const ih = this.image.naturalHeight;


		const scale = Math.max(this.stageW / iw, this.stageH / ih);
		this.imgScale = scale;


		const cx = this.faceCenterX!;
		const cy = this.faceCenterY!;


		this.imgX = this.stageW / 2 - cx * scale;
		this.imgY = this.stageH / 2 - cy * scale;


		this.applyTransform();
	}


	applyTransform() {
		this.konvaImg.scale({ x: this.imgScale, y: this.imgScale });
		// 設定 position 為畫布中心
		this.konvaImg.position({ x: this.stageW / 2, y: this.stageH / 2 });
		this.layer.draw();
	}


	zoom(factor: number) {
		this.imgScale *= factor;
		this.applyTransform();
	}


	resetToFaceCenter() {
		this.autoCenterToFace();
	}


	exportCropped() {
		const dataUrl = this.stage.toCanvas().toDataURL('image/png');
		const win = window.open();
		win!.document.write(`<img src="${dataUrl}"  alt="img"/>`);
	}

	async exportToBlob(): Promise<Blob> {
		const canvas = this.stage.toCanvas();
		return await new Promise((resolve) => canvas.toBlob((blob) => resolve(blob!), 'image/png'));
	}


	async exportToFile(): Promise<File> {
		const blob = await this.exportToBlob();
		return new File([blob], 'cropped.png', { type: 'image/png' });
	}

	async onUpload() {
		const file = await this.exportToFile();
		const form = new FormData();
		form.append('file', file);


		// HTTP upload
		this.http.post('/api/upload', form).subscribe();
	}

	protected onRotationChange(value: number | undefined) {
		if (value === undefined) return;
		this.rotation.set(value);
		this.konvaImg.rotation(value);
		this.layer.draw();
	}

	protected onScaleChange(value: number | undefined) {
		if (value === undefined) return;
		this.imgScale = value;
		this.applyTransform();
	}
}
