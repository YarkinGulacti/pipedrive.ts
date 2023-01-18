import axios from "axios";
import { PipedriveEndpoints } from "../lib/Endpoints";
import { GetAllDealsParams } from "../lib/types/request/params/GetAllDeals.params";
import { GetAllDealsResponse } from "../lib/types/response/GetAllDeals.response";

export class PipedriveService {
    constructor(private baseUrl: string) {
        if (baseUrl.endsWith("/")) {
            this.baseUrl = this.baseUrl.substring(0, this.baseUrl.length - 1);
        }
    }

    private buildQueryParameters(params: object): string {
        let queryParameters = [];

        for (const key of Object.keys(params)) {
            queryParameters.push(`${key}=${params[key]}`);
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
