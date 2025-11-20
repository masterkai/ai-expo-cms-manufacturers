export interface MemberInfoInterface {
    member_information: MemberInformation;
    contact_information: ContactInformation;
    verification_method: number;
}

export interface MemberInformation {
    name: string;
    gender: string;
    email: string;
    telephone: {
        nation_code: string;
        area_code: string;
        telephone_number: string;
        extension_number: string;
    };
    mobile_phone: {
        nation_code: string;
        mobile_number: string;
    };
}

export interface ContactInformation {
    name: string;
    gender: string;
    email: string;
    telephone: {
        nation_code: string;
        area_code: string;
        telephone_number: string;
        extension_number: string;
    };
    mobile_phone: {
        nation_code: string;
        mobile_number: string;
    };
}


export interface FavoriteArticlesList {
    favorite_articles_list: Favorite[];
    paging: {
        total_count: number;
        start: number;
        per_page: number;
    };
}

export interface Favorite {
    news_key: number;
    title: string;
    pub_date: string;
    category: string;
    image_url: string;
    order: number;
}

