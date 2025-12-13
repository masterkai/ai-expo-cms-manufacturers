import { Component, inject, signal, viewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressBar } from "primeng/progressbar";
import { Button } from "primeng/button";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { SidebarMenu } from "./sidebar-menu/sidebar-menu";
import { DeadLinePanel } from "../shared/dead-line-panel/dead-line-panel";
import { CommonDialog } from "../shared/common-dialog/common-dialog";
import { ModifyReviewProcessRecord } from "./modify-review-process-record/modify-review-process-record";
import { Drawer } from "primeng/drawer";
import { HomeStore } from "../store/home.store";
import { Steps_Chinese, Steps_URL } from "../store/home.slice";
import { filter } from "rxjs";

@Component({
	selector: 'app-home',
	imports: [ MatSelectModule, FormsModule, SkeletonModule, ProgressBar, Button, RouterOutlet, SidebarMenu, DeadLinePanel, CommonDialog, ModifyReviewProcessRecord, Drawer ],
	templateUrl: './home.html',
	styleUrl: './home.scss'
})
export class Home {
	_currentRoute = inject(Router)
	steps = Steps_URL
	steps_chinese = Steps_Chinese
	readonly homeStore = inject(HomeStore)
	dialog = viewChild(CommonDialog)
	protected visible = signal(false)

	constructor(private router: Router) {
		this._currentRoute.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe(event => {
				// console.log('路由變更：', (event as NavigationEnd).urlAfterRedirects);
				switch ((event as NavigationEnd).urlAfterRedirects) {
					case '/basic-info':
						this.homeStore.setNextStep(this.steps_chinese.CONTACT_PERSON);
						this.homeStore.setNextStepURL(this.steps.CONTACT_PERSON)
						break;
					case '/contact-person':
						this.homeStore.setNextStep(this.steps_chinese.EXHIBITOR_RIGHTS_CONFIRMATION);
						this.homeStore.setNextStepURL(this.steps.EXHIBITOR_RIGHTS_CONFIRMATION)
						break;
					case '/exhibitor-rights-confirmation':
						this.homeStore.setNextStep(this.steps_chinese.EXHIBITOR_INFORMATION_UPDATE);
						this.homeStore.setNextStepURL(this.steps.EXHIBITOR_INFORMATION_UPDATE)
						break;
					case '/exhibitor-information-update':
						this.homeStore.setNextStep(this.steps_chinese.SPEAKER_INFO);
						this.homeStore.setNextStepURL(this.steps.SPEAKER_INFO)
						break;
					case '/speaker-info':
						this.homeStore.setNextStep(this.steps_chinese.REVIEW_AND_CHECK_PREVIEW_LIST);
						this.homeStore.setNextStepURL(this.steps.REVIEW_AND_CHECK_PREVIEW_LIST);
						break;
					case '/review-and-check-preview-list':
						this.homeStore.setNextStep('');
						this.homeStore.setNextStepURL('');
						break;
					default :
						break;
				}
			});
	}

	protected goNext() {
		console.log('下一步', this.homeStore.getNextStepURL());
		if (this.homeStore.getNextStepURL()=='') {
			console.log('提交審核')
		}
		this.router.navigate([this.homeStore.getNextStepURL()]);
	}

	protected toggleModifyReviewProcessRecordDialog() {
		this.visible.update(prev => !prev);
	}
}
