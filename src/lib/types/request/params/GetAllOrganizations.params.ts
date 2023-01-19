//TODO: field descriptions will be added.
export interface GetAllOrganizationsParams {
    user_id?: number;
    filter_id?: number;
    first_char?: string;
    start?: number;
    limit?: number;
    sort?: string;
    api_token: string;
}
