import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../app.interface';
import { environment } from '../../environments/environment';
import { FavoriteArticlesList, MemberInfoInterface } from './interface';

@Injectable({
    providedIn: 'root'
})

export class SettingService {

    private http = inject(HttpClient);

    getMemberInfo() {
        return this.http.get<ApiResponse<MemberInfoInterface>>(`${environment.apiUrl}/member-profile`);
    }

    updateMemberInfo(data: MemberInfoInterface) {
        return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/member-profile`, data);
    }

    getMyFavorites(start=0,length=5) {

		return this.http.get<ApiResponse<FavoriteArticlesList>>(`${environment.apiUrl}/favorite-articles`, { params: { start: start, per_page: length } });
	}

	removeFavorite(news_key: number) {
		const data = {
			"_method": "DELETE",
			news_key: news_key
		}
		return this.http.post<ApiResponse<null>>(`${environment.apiUrl}/delete-favorite-articles`, data);
	}


}
