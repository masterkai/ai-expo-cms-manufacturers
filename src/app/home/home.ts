import { Component, signal, viewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBar } from "primeng/progressbar";
import { Button } from "primeng/button";
import { RouterOutlet } from "@angular/router";
import { SidebarMenu } from "./sidebar-menu/sidebar-menu";
import { DeadLinePanel } from "../shared/dead-line-panel/dead-line-panel";
import { CommonDialog } from "../shared/common-dialog/common-dialog";
import { ModifyReviewProcessRecord } from "./modify-review-process-record/modify-review-process-record";
import { Drawer } from "primeng/drawer";

@Component({
	selector: 'app-home',
	imports: [MatSelectModule, FormsModule, SkeletonModule, ProgressBar, Button, RouterOutlet, SidebarMenu, DeadLinePanel, CommonDialog, ModifyReviewProcessRecord, Drawer],
	templateUrl: './home.html',
	styleUrl: './home.scss'
})
export class Home {
	dialog = viewChild(CommonDialog)
	protected visible = signal(false)

	protected toggleModifyReviewProcessRecordDialog() {
		this.visible.update(prev => !prev);
	}
}
