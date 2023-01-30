import { PipedriveService } from "../lib/PipedriveService";
import { GetAllDealsParams } from "../lib/types/request/params/GetAllDeals.params";
import { GetAllDealFieldsParams } from "../lib/types/request/params/GetAllDealFields.params";
import { GetAllOrganizationsParams } from "../lib/types/request/params/GetAllOrganizations.params";
import { GetAllStagesParams } from "../lib/types/request/params/GetAllStages.params";
import { GetAllOrganizationFieldsParams } from "../lib/types/request/params/GetAllOrganizationFields.params";
import { GetAllNotesParams } from "../lib/types/request/params/GetAllNotes.params";
import { GetAllFilesParams } from "../lib/types/request/params/GetAllFiles.params";
import { GetAllPersonsParams } from "../lib/types/request/params/GetAllPersons.params";

export class PipedriveClient {
    private baseUrl: string = "https://api.pipedrive.com/v1";
    private PipedriveService: PipedriveService;

    constructor(private apiToken: string) {
        this.PipedriveService = new PipedriveService(this.baseUrl);
    }

    public async GetAllDeals(params?: GetAllDealsParams) {
        try {
            return await this.PipedriveService.GetAllDeals({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllDealFields(params?: GetAllDealFieldsParams) {
        try {
            return await this.PipedriveService.GetAllDealFields({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizations(params?: GetAllOrganizationsParams) {
        try {
            return await this.PipedriveService.GetAllOrganizations({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllStages(params?: GetAllStagesParams) {
        try {
            return await this.PipedriveService.GetAllStages({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizationFields(params?: GetAllOrganizationFieldsParams) {
        try {
            return await this.PipedriveService.GetAllOrganizationFields({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllNotes(params?: GetAllNotesParams) {
        try {
            return await this.PipedriveService.GetAllNotes({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllFiles(params?: GetAllFilesParams) {
        try {
            return await this.PipedriveService.GetAllFiles({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllPersons(params?: GetAllPersonsParams) {
        try {
            return await this.PipedriveService.GetAllPersons({ ...params, api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }

    public async GetAllUsers() {
        try {
            return await this.PipedriveService.GetAllUsers({ api_token: this.apiToken });
        } catch (error) {
            throw error;
        }
    }
}
