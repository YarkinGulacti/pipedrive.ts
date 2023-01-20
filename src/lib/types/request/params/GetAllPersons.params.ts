export interface GetAllPersonsParams {
    user_id?: number;
    filter_id?: number;
    first_char?: string;
    start?: number;
    limit?: number;
    sort?: string;
    api_token: string;
}
