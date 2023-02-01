export interface Organization {
    /** @description The ID of the organization */
    id?: number;
    /** @description The ID of the company related to the organization */
    company_id?: number;
    /** owner */
    owner_id?: {
        /** @description The ID of the user */
        id?: number;
        /** @description The name of the user */
        name?: string;
        /** @description The email of the user */
        email?: string;
        /** @description Whether the user has picture or not. 0 = No picture, 1 = Has picture. */
        has_pic?: number;
        /** @description The user picture hash */
        pic_hash?: string | null;
        /** @description Whether the user is active or not */
        active_flag?: boolean;
        /** @description The ID of the owner */
        value?: number;
    };
    /** @description The name of the organization */
    name?: string;
    /** @description Whether the organization is active or not */
    active_flag?: boolean;
    picture_id?: {
        /** @description The ID of the picture associated with the item */
        value?: number;
        /** @description The type of item the picture is related to */
        item_type?: string;
        /** @description The ID of related item */
        item_id?: number;
        /** @description Whether the associated picture is active or not */
        active_flag?: boolean;
        /** @description The add time of the picture */
        add_time?: string;
        /** @description The update time of the picture */
        update_time?: string;
        /** @description The ID of the user who added the picture */
        added_by_user_id?: number;
        pictures?: {
            /** @description The URL of the 128*128 picture */
            128?: string;
            /** @description The URL of the 512*512 picture */
            512?: string;
        };
    };
    /** @description The country code of the organization */
    country_code?: string;
    /** @description The first character of the organization name */
    first_char?: string;
    /** @description The creation date and time of the organization */
    add_time?: string;
    /** @description The last updated date and time of the organization */
    update_time?: string;
    /** @description The visibility group ID of who can see the organization */
    visible_to?: string;
    /** @description The ID of the label */
    label?: number;
    /** @description The name of the organization owner */
    owner_name?: string;
    /** @description The BCC email of the organization */
    cc_email?: string;
    /** @description The count of email messages related to the organization */
    email_messages_count?: number;
    /** @description The count of persons related to the organization */
    people_count?: number;
    /** @description The count of activities related to the organization */
    activities_count?: number;
    /** @description The count of done activities related to the organization */
    done_activities_count?: number;
    /** @description The count of undone activities related to the organization */
    undone_activities_count?: number;
    /** @description The count of files related to the organization */
    files_count?: number;
    /** @description The count of notes related to the organization */
    notes_count?: number;
    /** @description The count of followers related to the organization */
    followers_count?: number;
    /** @description The full address of the organization */
    address?: string;
    /** @description The sub-premise of the organization location */
    address_subpremise?: string;
    /** @description The street number of the organization location */
    address_street_number?: string;
    /** @description The route of the organization location */
    address_route?: string;
    /** @description The sub-locality of the organization location */
    address_sublocality?: string;
    /** @description The locality of the organization location */
    address_locality?: string;
    /** @description The level 1 admin area of the organization location */
    address_admin_area_level_1?: string;
    /** @description The level 2 admin area of the organization location */
    address_admin_area_level_2?: string;
    /** @description The country of the organization location */
    address_country?: string;
    /** @description The postal code of the organization location */
    address_postal_code?: string;
    /** @description The formatted organization location */
    address_formatted_address?: string;
    /** @description The count of open deals related with the item */
    open_deals_count?: number;
    /** @description The count of related open deals related with the item */
    related_open_deals_count?: number;
    /** @description The count of closed deals related with the item */
    closed_deals_count?: number;
    /** @description The count of related closed deals related with the item */
    related_closed_deals_count?: number;
    /** @description The count of won deals related with the item */
    won_deals_count?: number;
    /** @description The count of related won deals related with the item */
    related_won_deals_count?: number;
    /** @description The count of lost deals related with the item */
    lost_deals_count?: number;
    /** @description The count of related lost deals related with the item */
    related_lost_deals_count?: number;
    /** @description The date of the next activity associated with the deal */
    next_activity_date?: string;
    /** @description The time of the next activity associated with the deal */
    next_activity_time?: string;
    /** @description The ID of the next activity associated with the deal */
    next_activity_id?: number | null;
    /** @description The ID of the last activity associated with the deal */
    last_activity_id?: number | null;
    /** @description The date of the last activity associated with the deal */
    last_activity_date?: string | null;
}
