import { Component, inject, signal, viewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBar } from "primeng/progressbar";
import { Button } from "primeng/button";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { SidebarMenu } from "./sidebar-menu/sidebar-menu";
import { DeadLinePanel } from "../shared/dead-line-panel/dead-line-panel";
import { CommonDialog } from "../shared/common-dialog/common-dialog";
import { ModifyReviewProcessRecord } from "./modify-review-process-record/modify-review-process-record";
import { Drawer } from "primeng/drawer";
import { HomeStore } from "../store/home.store";
import { Steps_Chinese } from "../store/home.slice";
import { filter } from "rxjs";

@Component({
	selector: 'app-home',
	imports: [MatSelectModule, FormsModule, SkeletonModule, ProgressBar, Button, RouterOutlet, SidebarMenu, DeadLinePanel, CommonDialog, ModifyReviewProcessRecord, Drawer, RouterLink],
	templateUrl: './home.html',
	styleUrl: './home.scss'
})
export class Home {
	_currentRoute = inject(Router)
	steps_chinese = Steps_Chinese
	readonly homeStore = inject(HomeStore)
	dialog = viewChild(CommonDialog)
	protected visible = signal(false)

	constructor() {
		this._currentRoute.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => {
				console.log('路由變更：', (event as NavigationEnd).urlAfterRedirects);
			});
	}

	protected toggleModifyReviewProcessRecordDialog() {
		this.visible.update(prev => !prev);
	}
}
