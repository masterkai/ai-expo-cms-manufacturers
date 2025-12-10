import { Injectable } from '@angular/core';
import { FaceDetector, FilesetResolver } from "@mediapipe/tasks-vision";

@Injectable({
	providedIn: 'root'
})
export class FaceDetection {
	private detector: FaceDetector | null = null;

	async init() {
		if (this.detector) return;


		const vision = await FilesetResolver.forVisionTasks(
			'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
		);


		this.detector = await FaceDetector.createFromOptions(vision, {
			baseOptions: {
				modelAssetPath:
					'https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite',
				delegate: "GPU"
			},
			runningMode: 'IMAGE',
		});
	}


	async detect(image: HTMLCanvasElement): Promise<any> {
		if (!this.detector) await this.init();
		if (!this.detector) return null;
		return this.detector.detect(image as any);
	}
}
