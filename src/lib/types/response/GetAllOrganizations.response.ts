import { Organization } from "../interface/Organization.interface";

export interface GetAllOrganizationsResponse {
    /** @description If the response is successful or not */
    success?: boolean;
    /** @description The array of organizations */
    data?: Organization[];
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
                | {
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
                  }
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
