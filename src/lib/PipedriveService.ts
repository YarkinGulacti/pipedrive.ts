import axios from "axios";
import { PipedriveEndpoints } from "./Endpoints";
import { GetAllDealsParams } from "./types/request/params/GetAllDeals.params";
import { GetAllDealsResponse } from "./types/response/GetAllDeals.response";

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
}