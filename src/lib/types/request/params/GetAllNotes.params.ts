export interface GetAllNotesParams {
    user_id?: number;
    lead_id?: string;
    deal_id?: number;
    person_id?: number;
    org_id?: number;
    start?: number;
    limit?: number;
    sort?: string;
    start_date?: string;
    end_date?: string;
    pinned_to_lead_flag?: 0 | 1;
    pinned_to_deal_flag?: 0 | 1;
    pinned_to_organization_flag?: 0 | 1;
    pinned_to_person_flag?: 0 | 1;
}
