import { Component, input } from '@angular/core';

@Component({
	selector: 'app-name-card',
	imports: [],
	templateUrl: './name-card.html',
	styleUrl: './name-card.scss'
})
export class NameCard {
	contact_person = input.required<{
		name: string;
		email: string;
		phone: string;
		position: string;
		office_phone: string;
	}>()
}
