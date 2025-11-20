import { Component,inject,signal } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from './header/header';
import { MatSelectModule } from '@angular/material/select';
import { HomeService } from './home.service';
import { NewsList } from './home.interface';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
    selector: 'app-home',
    imports: [RouterLink, Header, MatSelectModule, SlicePipe, FormsModule, SkeletonModule],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home {

    private homeService = inject(HomeService);

    protected dates = signal<string[]>([]);
    protected data = signal<NewsList|undefined>(undefined);

    protected date ='';

    ngOnInit() {
        this.getDates();
        this.getNewsList();
    }

    getDates() {

        return this.homeService.getDates().subscribe({
            next: success => {
                this.dates.set(success.data.pub_date_list);
                this.date = this.dates()[0];
            },
            error: err => {
                console.error('Error fetching publication dates:', err);
            }
        });
    }

    getNewsList(date:string='') {

        this.data.set(undefined);

        date = date.replaceAll('/', '');

        return this.homeService.getList(date).subscribe({
             next: success => {
                this.data.set(success.data);
            },
            error: err => {
                console.error('Error fetching news list:', err);
            }
        });
    }

}
