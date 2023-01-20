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
        expect(res.data?.shift()?.id).toBeDefined();
        expect(res.additional_data?.pagination?.start).toBeDefined();
    });

    test("Pipedrive Client get all stages test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllStages();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
        expect(res.data?.shift()?.pipeline_name).toBeDefined();
    });

    test("Pipedrive Client get all organization fields test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllOrganizationFields();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
        expect(res.data).toBeDefined();
    });

    test("Pipedrive Client get all notes test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllNotes();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
        expect(res.data?.shift()?.deal_id).toBeDefined();
    });

    test("Pipedrive Client get all files test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllFiles();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
        if (res.data && res.data?.length > 0) {
            expect(res.data?.shift()?.id).toBeDefined();
        }
    });

    test("Pipedrive Client get all persons test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllPersons();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
        if (res.data && res.data?.length > 0) {
            expect(res.data?.shift()?.cc_email).toBeDefined();
        }
    });

    test("Pipedrive Client get all users test.", async () => {
        const client = new PipedriveClient(
            process.env.PIPEDRIVE_API_KEY as string
        );
        const res = await client.GetAllUsers();

        expect(res).toBeDefined();
        expect(res?.success).toBe(true);
        if (res.data && res.data?.length > 0) {
            expect(res.data?.shift()?.email).toBeDefined();
        }
    });
});
