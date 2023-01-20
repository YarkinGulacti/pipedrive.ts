import { PipedriveService } from "../lib/PipedriveService";
import { GetAllDealsParams } from "../lib/types/request/params/GetAllDeals.params";
import { GetAllDealFieldsParams } from "../lib/types/request/params/GetAllDealFields.params";
import { GetAllOrganizationsParams } from "../lib/types/request/params/GetAllOrganizations.params";
import { GetAllStagesParams } from "../lib/types/request/params/GetAllStages.params";
import { GetAllOrganizationFieldsParams } from "../lib/types/request/params/GetAllOrganizationFields.params";

export class PipedriveClient {
    private baseUrl: string = "https://api.pipedrive.com/v1";
    private PipedriveService: PipedriveService;

    constructor(private apiToken: string) {
        this.PipedriveService = new PipedriveService(this.baseUrl);
    }

    public async GetAllDeals(params?: GetAllDealsParams) {
        try {
            const paramsObj = Object.assign({}, params);
            paramsObj.api_token = this.apiToken;

            return await this.PipedriveService.GetAllDeals(paramsObj);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllDealFields(params?: GetAllDealFieldsParams) {
        try {
            const paramsObj = Object.assign({}, params);
            paramsObj.api_token = this.apiToken;

            return await this.PipedriveService.GetAllDealFields(paramsObj);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizations(params?: GetAllOrganizationsParams) {
        try {
            const paramsObj = Object.assign({}, params);
            paramsObj.api_token = this.apiToken;

            return await this.PipedriveService.GetAllOrganizations(paramsObj);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllStages(params?: GetAllStagesParams) {
        try {
            const paramsObj = Object.assign({}, params);
            paramsObj.api_token = this.apiToken;

            return await this.PipedriveService.GetAllStages(paramsObj);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizationFields(
        params?: GetAllOrganizationFieldsParams
    ) {
        try {
            const paramsObj = Object.assign({}, params);
            paramsObj.api_token = this.apiToken;

            return await this.PipedriveService.GetAllOrganizationFields(
                paramsObj
            );
        } catch (error) {
            throw error;
        }
    }
}
