export interface GetAllPersonsResponse {
    /** @description If the response is successful or not */
    success?: boolean;
    /** @description The array of persons */
    data?: ({
        /** @description The ID of the person */
        id?: number;
        /** @description The ID of the company related to the person */
        company_id?: number;
        /** @description Whether the person is active or not */
        active_flag?: boolean;
        /** @description A phone number supplied as a string or an array of phone objects related to the person. The structure of the array is as follows: `[{ "value": "12345", "primary": "true", "label": "mobile" }]`. Please note that only `value` is required. */
        phone?: {
            /** @description The phone number */
            value?: string;
            /** @description Boolean that indicates if phone number is primary for the person or not */
            primary?: boolean;
            /** @description The label that indicates the type of the phone number. (Possible values - work, home, mobile or other) */
            label?: string;
        }[];
        /** @description An email address as a string or an array of email objects related to the person. The structure of the array is as follows: `[{ "value": "mail@example.com", "primary": "true", "label": "main" } ]`. Please note that only `value` is required. */
        email?: {
            /** @description Email */
            value?: string;
            /** @description Boolean that indicates if email is primary for the person or not */
            primary?: boolean;
            /** @description The label that indicates the type of the email. (Possible values - work, home or other) */
            label?: string;
        }[];
        /** @description The first letter of the name of the person */
        first_char?: string;
        /** @description The date and time when the person was added/created. Format: YYYY-MM-DD HH:MM:SS */
        add_time?: string;
        /** @description The last updated date and time of the person. Format: YYYY-MM-DD HH:MM:SS */
        update_time?: string;
        /** @description The visibility group ID of who can see the person */
        visible_to?: string;
        picture_id?: {
            /** @description The ID of the picture associated with the item */
            id?: number;
        } & {
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
        /** @description The label assigned to the person */
        label?: number;
        /** @description The name of the organization associated with the person */
        org_name?: string;
        /** @description The name of the owner associated with the person */
        owner_name?: string;
        /** @description The BCC email associated with the person */
        cc_email?: string;
    } & (({
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
        } & {
            /** @description The ID of the owner */
            value?: number;
        };
        /** relationshipOrganizationInfoItemWithActiveFlag */
        org_id?: ({
            /** @description The name of the organization associated with the item */
            name?: string;
            /** @description The number of people connected with the organization that is associated with the item */
            people_count?: number;
            /** @description The ID of the owner of the organization that is associated with the item */
            owner_id?: number;
            /** @description The address of the organization */
            address?: string;
            /** @description The BCC email of the organization associated with the item */
            cc_email?: string;
        } & {
            /** @description The ID of the organization */
            value?: number;
        }) & {
            /** @description Whether the associated organization is active or not */
            active_flag?: boolean;
        };
    } & {
        /** @description The name of the person */
        name?: string;
        /** @description The first name of the person */
        first_name?: string;
        /** @description The last name of the person */
        last_name?: string;
    }) &
        (({
            /** @description The count of email messages related to the person */
            email_messages_count?: number;
            /** @description The count of activities related to the person */
            activities_count?: number;
            /** @description The count of done activities related to the person */
            done_activities_count?: number;
            /** @description The count of undone activities related to the person */
            undone_activities_count?: number;
            /** @description The count of files related to the person */
            files_count?: number;
            /** @description The count of notes related to the person */
            notes_count?: number;
            /** @description The count of followers related to the person */
            followers_count?: number;
        } & {
            /** @description The date and time of the last incoming email associated with the person */
            last_incoming_mail_time?: string;
            /** @description The date and time of the last outgoing email associated with the person */
            last_outgoing_mail_time?: string;
        }) &
            ({
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
            } & {
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
            }))))[];
    additional_data?: {
        /** @description Pagination details of the list */
        pagination?: {
            /** @description Pagination start */
            start?: number;
            /** @description Items shown per page */
            limit?: number;
            /** @description Whether there are more list items in the collection than displayed */
            more_items_in_collection?: boolean;
            /** @description Next pagination start */
            next_start?: number;
        };
    };
    related_objects?: {
        organization?: {
            /** @description The ID of the organization associated with the item */
            [key: string]:
                | {
                      /** @description The ID of the organization associated with the item */
                      id?: number;
                      /** @description The name of the organization associated with the item */
                      name?: string;
                      /** @description The number of people connected with the organization that is associated with the item */
                      people_count?: number;
                      /** @description The ID of the owner of the organization that is associated with the item */
                      owner_id?: number;
                      /** @description The address of the organization */
                      address?: string;
                      /** @description The BCC email of the organization associated with the item */
                      cc_email?: string;
                  }
                | undefined;
        };
        user?: {
            /** userDataWithId */
            [key: string]:
                | ({
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
                  } & Record<string, never>)
                | undefined;
        };
        /** @description The picture that is associated with the item */
        picture?: {
            /** @description The ID of the picture */
            [key: string]:
                | {
                      /** @description The ID of the picture associated with the item */
                      id?: number;
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
                  }
                | undefined;
        };
    };
}
