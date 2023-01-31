import { DealField } from "../interface/DealField.interface";

export interface GetAllDealFieldsResponse {
    /**
     @description If the response is successful or not
    */
    success?: boolean;
    data?: Array<DealField>;
    additional_data?: {
        pagination: {
            /** @description Pagination start */
            start?: number;
            /** @description Items shown per page */
            limit?: number;
            /** @description If there are more list items in the collection than displayed or not */
            more_items_in_collection?: boolean;
        };
    };
}
