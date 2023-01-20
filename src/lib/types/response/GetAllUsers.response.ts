import { App } from "../enum/App.enum";

export interface GetAllUsersResponse {
    /** @description If the response is successful or not */
    success?: boolean;
    data?: {
        /** @description The user ID */
        id?: number;
        /** @description The user name */
        name?: string;
        /** @description The user default currency */
        default_currency?: string;
        /** @description The user locale */
        locale?: string;
        /** @description The user language ID */
        lang?: number;
        /** @description The user email */
        email?: string;
        /** @description The user phone */
        phone?: string | null;
        /** @description Boolean that indicates whether the user is activated */
        activated?: boolean;
        /** @description The last login date and time of the user. Format: YYYY-MM-DD HH:MM:SS */
        last_login?: string;
        /** @description The creation date and time of the user. Format: YYYY-MM-DD HH:MM:SS */
        created?: string;
        /** @description The last modification date and time of the user. Format: YYYY-MM-DD HH:MM:SS */
        modified?: string | null;
        /** @description Boolean that indicates whether the user has created a company */
        has_created_company?: boolean;
        access?: {
            /** @enum {string} */
            app?: App;
            admin?: boolean;
            permission_set_id?: string;
        }[];
        /** @description Boolean that indicates whether the user is activated */
        active_flag?: boolean;
        /** @description The user timezone name */
        timezone_name?: string;
        /** @description The user timezone offset */
        timezone_offset?: string;
        /** @description The ID of the user role */
        role_id?: number;
        /** @description The user icon URL */
        icon_url?: string | null;
        /** @description Boolean that indicates if the requested user is the same which is logged in (in this case, always true) */
        is_you?: boolean;
    }[];
}
