export interface ApiResponse<T> {
    success: boolean;
    data: T;
}

export interface ErrorResponse {
    error:{
        error: {
            code: number;
            message: string;
            logs: string[];
        }
    }
}

export interface User {
    company: string;
    name: string;
    mem_id: string;
    userid: string;
    yuid: string;
    home:string;
    dataid:string; //data bank id
    switch:{
        title:string;
        link:string;
    }[],
    service:{
        log_records:boolean;
    }
}
    