import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBar } from "primeng/progressbar";
import { Button } from "primeng/button";
import { RouterOutlet } from "@angular/router";
import { SidebarMenu } from "./sidebar-menu/sidebar-menu";
import { DeadLinePanel } from "../shared/dead-line-panel/dead-line-panel";

@Component({
	selector: 'app-home',
	imports: [MatSelectModule, FormsModule, SkeletonModule, ProgressBar, Button, RouterOutlet, SidebarMenu, DeadLinePanel],
	templateUrl: './home.html',
	styleUrl: './home.scss'
})
export class Home {}
