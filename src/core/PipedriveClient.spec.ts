import { describe, test, expect } from "@jest/globals";
import { config } from "dotenv";
import { PipedriveClient } from "./PipedriveClient";

describe("Pipedrive Client tests.", () => {
    beforeAll(() => {
        config();
    });

    test("Pipedrive Client get all deals test.", async () => {
        const client = new PipedriveClient(process.env.PIPEDRIVE_API_KEY);
        const res = await client.GetAllDeals();

        expect(res.data).toBeDefined();
    });
});
