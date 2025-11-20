import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../app.interface';
import { DateData, NewsList } from './home.interface';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private http = inject(HttpClient);

    getDates() {
        return this.http.get<ApiResponse<DateData>>(`${environment.apiUrl}/pub-date-list`);
    }

    getList(date:string){
        return this.http.get<ApiResponse<NewsList>>(`${environment.apiUrl}/news-list`,{params:{pub_date:date}});
    }

}