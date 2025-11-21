import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatIconButton } from "@angular/material/button";

@Component({
  selector: 'app-sign-in',
	imports: [
		Button,
		FormsModule,
		MatCheckbox,
		MatIconButton
	],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss'
})
export class SignIn {

}
