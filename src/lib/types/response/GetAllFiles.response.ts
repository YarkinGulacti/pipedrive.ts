import { File } from "../interface/File.interface";

export interface GetAllFilesResponse {
    /** @description If the request was successful or not */
    success?: boolean;
    /** @description The array of all uploaded files */
    data?: File[];
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
