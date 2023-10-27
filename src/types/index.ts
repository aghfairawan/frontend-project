export interface GetCategoryResponse {
    data: category[];
    // total: number;
    // skip: number;
    // limit: number;
}

export interface category {
    _id?: string;
    title:string;
    priority: string;
    createdAt: string;
    owner: string;
    isDone: string;
    // is_active?: boolean;
}

export type categoryForm = Omit<category,'id'>


export interface LoginForm {
    username: string;
    password: string;
}

export interface RegisterForm {
    username: string;
    password: string;
    role: string;
}

export interface LoginResponse {
    username: string;
    password: string;
    token: string;
}

export interface RegisterResponse {
    email: string;
    pasword: string;
    name: string;
    token: string;
}