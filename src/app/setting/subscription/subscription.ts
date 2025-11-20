import { Component, signal } from '@angular/core';
import { Checkbox } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";
import { Divider } from "primeng/divider";
import { Image } from "primeng/image";

@Component({
	selector: 'app-subscription',
	imports: [
		Checkbox,
		FormsModule,
		Divider,
		Image
	],
	templateUrl: './subscription.html',
	styleUrl: './subscription.scss'
})
export class Subscription {
	subscriptionPlan = signal('OOO')
	subscriptionStatus = signal('1')
	expirationDate = signal('2024-12-31 ~ 2025-12-30')
	pizza = signal<boolean[]>([]);
	adSource = signal<string>("/images/ad_kv_bg.jpg");
}
