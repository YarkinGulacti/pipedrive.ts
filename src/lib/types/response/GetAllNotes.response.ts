import { Note } from "../interface/Note.interface";

export interface GetAllNotesResponse {
    /** @description If the request was successful or not */
    success?: boolean;
    /** @description The array of notes */
    data?: Note[];
    additional_data?: {
        /** @description The pagination details of the list */
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
