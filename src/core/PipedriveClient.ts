export class PipedriveClient {
    private _apiToken: string;

    public get apiToken(): string {
        return this._apiToken;
    }

    public set apiToken(value: string) {
        this._apiToken = value;
    }

    constructor(apiToken?: string) {
        if (apiToken) this.apiToken = apiToken;
    }
}