export interface Note {
    /** @description The ID of the note */
    id?: number;
    /** @description Whether the note is active or deleted */
    active_flag?: boolean;
    /** @description The creation date and time of the note */
    add_time?: string;
    /** @description The content of the note in HTML format. Subject to sanitization on the back-end. */
    content?: string;
    /** @description The deal this note is attached to */
    deal?: {
        /** @description The title of the deal this note is attached to */
        title?: string;
    };
    /**
     * Format: uuid
     * @description The ID of the lead the note is attached to
     */
    lead_id?: string;
    /** @description The ID of the deal the note is attached to */
    deal_id?: number;
    /** @description The ID of the user who last updated the note */
    last_update_user_id?: number;
    /** @description The ID of the organization the note is attached to */
    org_id?: number;
    /** @description The organization the note is attached to */
    organization?: {
        /** @description The name of the organization the note is attached to */
        name?: string;
    };
    /** @description The person the note is attached to */
    person?: {
        /** @description The name of the person the note is attached to */
        name?: string;
    };
    /** @description The ID of the person the note is attached to */
    person_id?: number;
    /** @description If true, the results are filtered by note to deal pinning state */
    pinned_to_deal_flag?: boolean;
    /** @description If true, the results are filtered by note to organization pinning state */
    pinned_to_organization_flag?: boolean;
    /** @description If true, the results are filtered by note to person pinning state */
    pinned_to_person_flag?: boolean;
    /** @description The last updated date and time of the note */
    update_time?: string;
    /** @description The user who created the note */
    user?: {
        /** @description The email of the note creator */
        email?: string;
        /** @description The URL of the note creator avatar picture */
        icon_url?: string;
        /** @description Whether the note is created by you or not */
        is_you?: boolean;
        /** @description The name of the note creator */
        name?: string;
    };
    /** @description The ID of the note creator */
    user_id?: number;
}
