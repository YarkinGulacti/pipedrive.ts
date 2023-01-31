import { FieldType } from "../enum/FieldType.enum";

export interface DealField {
    /**
     @description The ID of the field. Value is `null` in case of subfields.
    */
    id?: number;
    /**
      @description The key of the field. For custom fields this is generated upon creation.
     */
    key?: string;
    /**
      @description The name of the field
     */
    name?: string;
    /**
      @description The order number of the field
     */
    order_nr?: number;
    field_type?: FieldType;
    /**
     * Format: datetime
     * @description The creation time of the field
     */
    add_time?: string;
    /**
     * Format: datetime
     * @description The update time of the field
     */
    update_time?: string;
    /**
      @description The ID of the user who created or most recently updated the field, only applicable for custom fields
     */
    last_updated_by_user_id?: number;
    /**
      @description The active flag of the field
     */
    active_flag?: boolean;
    /**
      @description The edit flag of the field
     */
    edit_flag?: boolean;
    /**
      @description Not used
     */
    index_visible_flag?: boolean;
    /**
      @description Not used
     */
    details_visible_flag?: boolean;
    /**
      @description Not used
     */
    add_visible_flag?: boolean;
    /**
      @description Not used
     */
    important_flag?: boolean;
    /**
      @description Whether or not the field of an item can be edited in bulk
     */
    bulk_edit_allowed?: boolean;
    /**
      @description Whether or not items can be searched by this field
     */
    searchable_flag?: boolean;
    /**
      @description Whether or not items can be filtered by this field
     */
    filtering_allowed?: boolean;
    /**
      @description Whether or not items can be sorted by this field
     */
    sortable_flag?: boolean;
    /**
      @description Whether or not the field is mandatory
     */
    mandatory_flag?: boolean | Record<string, never>;
    /**
      @description The options of the field. When there are no options, `null` is returned.
     */
    options?: Record<string, never>[] | null;
    /**
      @description The deleted options of the field. Only present when there is at least 1 deleted option.
     */
    options_deleted?: Record<string, never>[];
    /**
      @description Whether or not the field is a subfield of another field. Only present if field is subfield.
     */
    is_subfield?: boolean;
    /**
      @description The subfields of the field. Only present when the field has subfields.
     */
    subfields?: Record<string, never>[];
    /**
      @description The additional data of the list
     */

    projects_detail_visible_flag?: boolean;
}
