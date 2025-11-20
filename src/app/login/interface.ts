export interface LoginResponse {
    one_time_pass: string;
    login_data: string;
}

export interface AuthResponse {
    token: string;
}