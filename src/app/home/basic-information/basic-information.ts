import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { InputGroup } from "primeng/inputgroup";
import { InputText } from "primeng/inputtext";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { FloatLabel } from "primeng/floatlabel";

@Component({
	selector: 'app-basic-information',
	imports: [
		Button,
		InputGroup,
		InputText,
		InputGroupAddon,
		FloatLabel
	],
	templateUrl: './basic-information.html',
	styleUrl: './basic-information.scss'
})
export class BasicInformation {

}
