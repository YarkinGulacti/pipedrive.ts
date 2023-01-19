import { describe, test, expect } from "@jest/globals";
import { config } from "dotenv";
import { PipedriveClient } from "./PipedriveClient";

describe("Pipedrive Client tests.", () => {
    beforeAll(() => {
        config();
    });

    test("Pipedrive Client get all deals test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllDeals();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
    });

    test("Pipedrive Client get all deal fields test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllDealFields();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
    });

    test("Pipedrive Client get all organizations test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllOrganizations();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
    });
});
