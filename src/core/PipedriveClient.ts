import { PipedriveService } from "../lib/PipedriveService";
import { GetAllDealsParams } from "../lib/types/request/params/GetAllDeals.params";
import { GetAllDealFieldsParams } from "../lib/types/request/params/GetAllDealFields.params";

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
            console.log(error);
        }
    }

    public async GetAllDealFields(params?: GetAllDealFieldsParams) {
        try {
            const paramsObj = Object.assign({}, params);
            paramsObj.api_token = this.apiToken;

            return await this.PipedriveService.GetAllDealFields(paramsObj);
        } catch (error) {
            console.log(error);
        }
    }
}
