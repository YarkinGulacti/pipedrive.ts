import axios from "axios";
import { PipedriveEndpoints } from "./Endpoints";
import { GetAllDealsParams } from "./types/request/params/GetAllDeals.params";
import { GetAllDealsResponse } from "./types/response/GetAllDeals.response";
import { GetAllDealFieldsResponse } from "./types/response/GetAllDealFields.response";
import { GetAllDealFieldsParams } from "./types/request/params/GetAllDealFields.params";
import { GetAllOrganizationsParams } from "./types/request/params/GetAllOrganizations.params";
import { GetAllOrganizationsResponse } from "./types/response/GetAllOrganizations.response";
import { GetAllStagesParams } from "./types/request/params/GetAllStages.params";
import { GetAllStagesResponse } from "./types/response/GetAllStages.response";
import { GetAllOrganizationFieldsParams } from "./types/request/params/GetAllOrganizationFields.params";
import { GetAllOrganizationFieldsResponse } from "./types/response/GetAllOrganizationFields.response";
import { GetAllNotesParams } from "./types/request/params/GetAllNotes.params";
import { GetAllNotesResponse } from "./types/response/GetAllNotes.response";
import { GetAllFilesParams } from "./types/request/params/GetAllFiles.params";
import { GetAllFilesResponse } from "./types/response/GetAllFiles.response";
import { GetAllPersonsParams } from "./types/request/params/GetAllPersons.params";
import { GetAllPersonsResponse } from "./types/response/GetAllPersons.response";

export class PipedriveService {
    constructor(private baseUrl: string) {
        if (baseUrl.endsWith("/")) {
            this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
        }
    }

    private buildQueryParameters(params: any): string {
        let queryParameters = [];

        for (const key of Object.keys(params)) {
            queryParameters.push(`${key}=${params[key] as string}`);
        }

        return `?${queryParameters.join("&")}`;
    }

    public async GetAllDeals(params?: GetAllDealsParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllDeals
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);
            return response.data as GetAllDealsResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllDealFields(params?: GetAllDealFieldsParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllDealFields
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllDealFieldsResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizations(params?: GetAllOrganizationsParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllOrganizations
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllOrganizationsResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllStages(params?: GetAllStagesParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllStages
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllStagesResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizationFields(
        params?: GetAllOrganizationFieldsParams
    ) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllOrganizationFields
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllOrganizationFieldsResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllNotes(params?: GetAllNotesParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllNotes
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllNotesResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllFiles(params?: GetAllFilesParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllFiles
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllFilesResponse;
        } catch (error) {
            throw error;
        }
    }

    public async GetAllPersons(params?: GetAllPersonsParams) {
        try {
            const url = `${this.baseUrl}${
                PipedriveEndpoints.GetAllPersons
            }${this.buildQueryParameters(params)}`;

            const response = await axios.get(url);

            return response.data as GetAllPersonsResponse;
        } catch (error) {
            throw error;
        }
    }
}
