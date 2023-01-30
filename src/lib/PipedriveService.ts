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
import { GetAllUsersResponse } from "./types/response/GetAllUsers.response";

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

    private async buildRequest<T>(baseUrl: string, endpoint: PipedriveEndpoints, params: any) {
        const query = this.buildQueryParameters(params);
        const url = `${baseUrl}${endpoint}${query}`;
        const response = await axios.get(url);

        return response.data as T;
    }

    public async GetAllDeals(params?: GetAllDealsParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllDealsResponse>(this.baseUrl, PipedriveEndpoints.GetAllDeals, params);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllDealFields(params?: GetAllDealFieldsParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllDealFieldsResponse>(
                this.baseUrl,
                PipedriveEndpoints.GetAllDealFields,
                params,
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizations(params?: GetAllOrganizationsParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllOrganizationsResponse>(
                this.baseUrl,
                PipedriveEndpoints.GetAllOrganizations,
                params,
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetAllStages(params?: GetAllStagesParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllStagesResponse>(this.baseUrl, PipedriveEndpoints.GetAllStages, params);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllOrganizationFields(params?: GetAllOrganizationFieldsParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllOrganizationFieldsResponse>(
                this.baseUrl,
                PipedriveEndpoints.GetAllOrganizationFields,
                params,
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetAllNotes(params?: GetAllNotesParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllNotesResponse>(this.baseUrl, PipedriveEndpoints.GetAllNotes, params);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllFiles(params?: GetAllFilesParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllFilesResponse>(this.baseUrl, PipedriveEndpoints.GetAllFiles, params);
        } catch (error) {
            throw error;
        }
    }

    public async GetAllPersons(params?: GetAllPersonsParams & { api_token: string }) {
        try {
            return await this.buildRequest<GetAllPersonsResponse>(
                this.baseUrl,
                PipedriveEndpoints.GetAllPersons,
                params,
            );
        } catch (error) {
            throw error;
        }
    }

    public async GetAllUsers(params?: { api_token: string }) {
        try {
            return await this.buildRequest<GetAllUsersResponse>(this.baseUrl, PipedriveEndpoints.GetAllUsers, params);
        } catch (error) {
            throw error;
        }
    }
}
