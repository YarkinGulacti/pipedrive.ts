import { DealStatus } from "../../enum/DealStatus.enum";

export interface GetAllDealsParams {
    user_id?: number;
    filter_id?: number;
    stage_id?: number;
    status?: DealStatus;
    start?: number;
    limit?: number;
    sort?: string;
    owned_by_you?: 0 | 1;
    api_token: string;
}
