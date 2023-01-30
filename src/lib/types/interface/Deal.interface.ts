export interface Deal {
    /** @description The ID of the deal */
    id?: number;
    /** @description The creator of the deal */
    creator_user_id?: {
        /** @description The ID of the deal creator */
        id?: number;
        /** @description The name of the deal creator */
        name?: string;
        /** @description The email of the deal creator */
        email?: string;
        /** @description If the creator has a picture or not */
        has_pic?: boolean;
        /** @description The creator picture hash */
        pic_hash?: string | null;
        /** @description Whether the creator is active or not */
        active_flag?: boolean;
        /** @description The ID of the deal creator */
        value?: number;
    };
    user_id?: {
        /** @description The ID of the user */
        id?: number;
        /** @description The name of the user */
        name?: string;
        /** @description The email of the user */
        email?: string;
        /** @description If the user has a picture or not */
        has_pic?: boolean;
        /** @description The user picture hash */
        pic_hash?: string | null;
        /** @description Whether the user is active or not */
        active_flag?: boolean;
    } & {
        /** @description The ID of the user */
        value?: number;
    };
    person_id?: {
        /** @description Whether the associated person is active or not */
        active_flag?: boolean;
        /** @description The name of the person associated with the deal */
        name?: string;
        /** @description The emails of the person associated with the deal */
        email?: {
            /** @description The type of the email */
            label?: string;
            /** @description The email of the associated person */
            value?: string;
            /** @description If this is the primary email or not */
            primary?: boolean;
        }[];
        /** @description The phone numbers of the person associated with the deal */
        phone?: {
            /** @description The type of the phone number */
            label?: string;
            /** @description The phone number of the person associated with the deal */
            value?: string;
            /** @description If this is the primary phone number or not */
            primary?: boolean;
        }[];
        /** @description The ID of the owner of the person that is associated with the deal */
        owner_id?: number;
    } & {
        /** @description The ID of the person associated with the deal */
        value?: number;
    };
    org_id?: {
        /** @description The name of the organization associated with the deal */
        name?: string;
        /** @description The number of people connected with the organization that is associated with the deal */
        people_count?: number;
        /** @description The ID of the owner of the organization that is associated with the deal */
        owner_id?: number;
        /** @description The address of the organization that is associated with the deal */
        address?: string;
        /** @description Whether the associated organization is active or not */
        active_flag?: boolean;
        /** @description The BCC email of the organization associated with the deal */
        cc_email?: string;
    } & {
        /** @description The ID of the organization associated with the deal */
        value?: number;
    } & {
        /** @description The ID of the deal stage */
        stage_id?: number;
        /** @description The title of the deal */
        title?: string;
        /** @description The value of the deal */
        value?: number;
        /** @description The currency associated with the deal */
        currency?: string;
        /** @description The creation date and time of the deal */
        add_time?: string;
        /** @description The last updated date and time of the deal */
        update_time?: string;
        /** @description The last updated date and time of the deal stage */
        stage_change_time?: string;
        /** @description Whether the deal is active or not */
        active?: boolean;
        /** @description Whether the deal is deleted or not */
        deleted?: boolean;
        /** @description The status of the deal */
        status?: string;
        /** @description The success probability percentage of the deal */
        probability?: number | null;
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
        /** @description The reason for losing the deal */
        lost_reason?: string | null;
        /** @description The visibility of the deal */
        visible_to?: string;
        /** @description The date and time of closing the deal */
        close_time?: string | null;
        /** @description The ID of pipeline associated with the deal */
        pipeline_id?: number;
        /** @description The date and time of changing the deal status as won */
        won_time?: string;
        /** @description The date and time of the first time changing the deal status as won */
        first_won_time?: string;
        /** @description The date and time of changing the deal status as lost */
        lost_time?: string;
        /** @description The number of products associated with the deal */
        products_count?: number;
        /** @description The number of files associated with the deal */
        files_count?: number;
        /** @description The number of notes associated with the deal */
        notes_count?: number;
        /** @description The number of followers associated with the deal */
        followers_count?: number;
        /** @description The number of emails associated with the deal */
        email_messages_count?: number;
        /** @description The number of activities associated with the deal */
        activities_count?: number;
        /** @description The number of completed activities associated with the deal */
        done_activities_count?: number;
        /** @description The number of incomplete activities associated with the deal */
        undone_activities_count?: number;
        /** @description The number of participants associated with the deal */
        participants_count?: number;
        /**
         * Format: date
         * @description The expected close date of the deal
         */
        expected_close_date?: string;
        /** @description The date and time of the last incoming email associated with the deal */
        last_incoming_mail_time?: string;
        /** @description The date and time of the last outgoing email associated with the deal */
        last_outgoing_mail_time?: string;
        /** @description The label assigned to the deal */
        label?: number;
        /** @description The order number of the deal stage associated with the deal */
        stage_order_nr?: number;
        /** @description The name of the person associated with the deal */
        person_name?: string;
        /** @description The name of the organization associated with the deal */
        org_name?: string;
        /** @description The subject of the next activity associated with the deal */
        next_activity_subject?: string;
        /** @description The type of the next activity associated with the deal */
        next_activity_type?: string;
        /** @description The duration of the next activity associated with the deal */
        next_activity_duration?: string;
        /** @description The note of the next activity associated with the deal */
        next_activity_note?: string;
        /** @description The deal value formatted with selected currency. E.g. US$500 */
        formatted_value?: string;
        /** @description Probability times deal value. Probability can either be deal probability or if not set, then stage probability. */
        weighted_value?: number;
        /** @description The weighted_value formatted with selected currency. E.g. US$500 */
        formatted_weighted_value?: string;
        /** @description The currency associated with the deal */
        weighted_value_currency?: string;
        /** @description The date and time of changing the deal status as rotten */
        rotten_time?: string | null;
        /** @description The name of the deal owner */
        owner_name?: string;
        /** @description The BCC email of the deal */
        cc_email?: string;
        /** @description If the organization that is associated with the deal is hidden or not */
        org_hidden?: boolean;
        /** @description If the person that is associated with the deal is hidden or not */
        person_hidden?: boolean;
        renewal_type?: string;
        group_id?: number;
        group_name?: string;
    };
}
