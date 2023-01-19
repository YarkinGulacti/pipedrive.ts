export interface GetAllStagesResponse {
    /** @description If the request was successful or not */
    success?: boolean;
    /** @description The array of stages */
    data?: ({
        /** @description The ID of the stage */
        id?: number;
        /** @description Defines the order of the stage */
        order_nr?: number;
        /** @description The name of the stage */
        name?: string;
        /** @description Whether the stage is active or deleted */
        active_flag?: boolean;
        /** @description The success probability percentage of the deal. Used/shown when the deal weighted values are used. */
        deal_probability?: number;
        /** @description The ID of the pipeline to add the stage to */
        pipeline_id?: number;
        /**
         * @description Whether deals in this stage can become rotten
         * @enum {boolean}
         */
        rotten_flag?: true | false;
        /** @description The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set. */
        rotten_days?: number;
        /** @description The stage creation time. Format: YYYY-MM-DD HH:MM:SS. */
        add_time?: string;
        /** @description The stage update time. Format: YYYY-MM-DD HH:MM:SS. */
        update_time?: string;
    } & {
        /** @description The name of the pipeline */
        pipeline_name?: string;
        /** @description The pipeline deal probability. When `true`, overrides the stage probability. */
        pipeline_deal_probability?: boolean;
    })[];
}
