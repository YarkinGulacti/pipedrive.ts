export interface GetAllStagesParams {
    /** @description The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched. */
    query?: {
        pipeline_id?: number;
    };

    api_token: string;
}
