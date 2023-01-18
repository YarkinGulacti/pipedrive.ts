import { Deal } from "../interface/Deal.interface";

export interface GetAllDealsResponse {
    success?: boolean;
    data?: Array<Deal>;
    additional_data?: {
        /** @description Pagination start */
        start?: number;
        /** @description Items shown per page */
        limit?: number;
        /** @description If there are more list items in the collection than displayed or not */
        more_items_in_collection?: boolean;
    };
    related_objects?: {
        /** @description The user who is associated with the deal */
        user?: {
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
        };
        /** @description The organization which is associated with the deal */
        organization?: {
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
        };
        /** @description The person who is associated with the deal */
        person?: {
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
        };
    };
}
