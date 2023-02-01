import { OrganizationField } from "../interface/OrganizationField.interface";

export interface GetAllOrganizationFieldsResponse {
    /** @description If the response is successful or not */
    success?: boolean;
    data?: OrganizationField[];
    /** @description The additional data of the list */
    additional_data?: {
        pagination?: {
            /** @description Pagination start */
            start?: number;
            /** @description Items shown per page */
            limit?: number;
            /** @description If there are more list items in the collection than displayed or not */
            more_items_in_collection?: boolean;
        };
    };
}
