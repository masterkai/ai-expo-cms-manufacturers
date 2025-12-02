import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  imports: [],
  templateUrl: './image-upload.html',
  styleUrl: './image-upload.scss'
})
export class ImageUpload {
	btnName = input.required<string>()
	imageSrc = signal<string | null>(null);

	onFileSelected(event: Event) {
		const input = event.target as HTMLInputElement;
		if (!input.files || input.files.length === 0) return;

		const file = input.files[0];
		const reader = new FileReader();

		reader.onload = () => {
			this.imageSrc.set(reader.result as string);
		};

		reader.readAsDataURL(file);
	}
}
