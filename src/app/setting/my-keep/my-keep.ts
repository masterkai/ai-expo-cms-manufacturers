import { Component, inject, OnInit, signal } from '@angular/core';
import { SettingService } from '../setting.service';
import { Favorite } from '../interface';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SkeletonModule } from 'primeng/skeleton';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { MyConfirm } from '../../shared/module/my-confirm/my-confirm.service';

@Component({
	selector: 'app-my-keep',
	imports: [RouterLink, MatButtonModule, SkeletonModule, InfiniteScrollDirective],
	templateUrl: './my-keep.html',
	styleUrl: './my-keep.scss'
})
export class MyKeep implements OnInit {

	private settingService = inject(SettingService);
	private myConfirm = inject(MyConfirm);

	protected datas = signal<Favorite[]>([]);
	protected loading = signal<boolean>(false);

	private index = 0;
	private total = 0;

	ngOnInit() {
		this.getList(this.index, 20);
	}

	onScroll() {
		if(!this.loading())
		{
			if (this.index >= this.total) {
				return;
			}
			this.getList(this.index,5);
		}
	}

	getList(index: number,length: number) {
		this.loading.set(true);
		this.settingService.getMyFavorites(index,length).subscribe({
			next: (response) => {
				if (response.success) {
					this.datas.update(prev => [...prev, ...response.data.favorite_articles_list]);
					this.loading.set(false);
					this.total = response.data.paging.total_count;
					this.index += response.data.favorite_articles_list.length;
				}
			},
			error: () => {
				this.loading.set(false);
			}
		});
	}

	remove(id: number) {
		this.myConfirm.confirm({
			title: '確定要移除最愛嗎?',
			icon: 'alert'
		}).then(
			result=>{
				this.settingService.removeFavorite(id).subscribe({
					next: (response) => {
						if (response.success) {
							this.datas.update(prev => prev.filter(item => item.news_key !== id));
							this.total -= 1;
							this.index -= 1;
						}
					}
				});
			},
			cancel=>{
				return false;
			}
		);
	}
}