export interface DateData  {
    pub_date_list: string[];
}

export interface NewsList {
    pub_date: string;
    news_list: {
        category: string;
        order: number;
        news: {
            news_key: number;
            created_at: string;
            title: string;
            image_url: string;
            author_name: string;
            is_read: boolean;
            seq: number;
        }[];
    }[];
}