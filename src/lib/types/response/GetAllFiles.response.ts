export interface GetAllFilesResponse {
    /** @description If the request was successful or not */
    success?: boolean;
    /** @description The array of all uploaded files */
    data?: {
        /** @description The ID of the file */
        id?: number;
        /** @description The ID of the user to associate the file with */
        user_id?: number;
        /** @description The ID of the deal to associate the file with */
        deal_id?: number;
        /** @description The ID of the person to associate the file with */
        person_id?: number;
        /** @description The ID of the organization to associate the file with */
        org_id?: number;
        /** @description The ID of the product to associate the file with */
        product_id?: number;
        /** @description The ID of the activity to associate the file with */
        activity_id?: number;
        /**
         * Format: uuid
         * @description The ID of the lead to associate the file with
         */
        lead_id?: string;
        /** @description The date and time when the file was added/created. Format: YYYY-MM-DD HH:MM:SS */
        add_time?: string;
        /** @description The last updated date and time of the file. Format: YYYY-MM-DD HH:MM:SS */
        update_time?: string;
        /** @description The original name of the file */
        file_name?: string;
        /** @description The size of the file */
        file_size?: number;
        /** @description Whether the user is active or not. false = Not activated, true = Activated */
        active_flag?: boolean;
        /** @description Whether the file was uploaded as inline or not */
        inline_flag?: boolean;
        /** @description The location type to send the file to. Only googledrive is supported at the moment. */
        remote_location?: string;
        /** @description The ID of the remote item */
        remote_id?: string;
        /** @description The ID of the inline attachment */
        cid?: string;
        /** @description The location of the cloud storage */
        s3_bucket?: string;
        /** @description The ID of the mail message to associate the file with */
        mail_message_id?: string;
        /** @description The ID of the mail template to associate the file with */
        mail_template_id?: string;
        /** @description The name of the deal associated with the file */
        deal_name?: string;
        /** @description The name of the person associated with the file */
        person_name?: string;
        /** @description The name of the organization associated with the file */
        org_name?: string;
        /** @description The name of the product associated with the file */
        product_name?: string;
        /** @description The name of the lead associated with the file */
        lead_name?: string;
        /** @description The URL of the download file */
        url?: string;
        /** @description The visible name of the file */
        name?: string;
        /** @description The description of the file */
        description?: string;
    }[];
    additional_data?: {
        /**
         * paginationDetails
         * @description Pagination details of the list
         */
        pagination?: {
            /** @description Pagination start */
            start?: number;
            /** @description Items shown per page */
            limit?: number;
            /** @description If there are more list items in the collection than displayed or not */
            more_items_in_collection?: boolean;
        } & {
            /** @description Next pagination start */
            next_start?: number;
        };
    };
}
