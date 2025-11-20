import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../app.interface';
import { environment } from '../../environments/environment';
import { ArticleData } from './article.interface';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    private http = inject(HttpClient);

    getArticle(news_key:number){ 
        return this.http.get<ApiResponse<ArticleData>>(`${environment.apiUrl}/articles/${news_key}`);
    }

    like(news_key:number){
        return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/favorite-articles`,{news_key:Number(news_key)});
    }

    unlike(news_key:number){
        return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/delete-favorite-articles`,{_method: "DELETE",news_key:Number(news_key)});
    }

    saveNote(news_key:number, content:string){
        return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/news-notes`,{news_key:Number(news_key), note_content:content});
    }


}
