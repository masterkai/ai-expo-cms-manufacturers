export interface ArticleData {
    current_article: ArticleInerface;
    previous_article: ArticleNavigation;
    next_article?: ArticleNavigation;
}

export interface ArticleInerface {
    news_key: number;
    pub_date?: string;
    created_at: string;
    author_name: string;
    resource_of_news: string;
    category: string;
    title: string;
    images: {
        order: number;
        url: string;
        title: string;
    }[];
    content: string;
    is_favorite: boolean;
    notes: string;
}

export interface ArticleNavigation  {
    news_key: number;
    image_url: string;
    created_at: string;
    author_name: string;
    resource_of_news: string;
    category: string;
    title: string;
}