import { describe, test, expect } from "@jest/globals";
import { PipedriveClient } from "./PipedriveClient";

describe("Pipedrive Client tests.", () => {
    test("Pipedrive Client apiToken set test.", () => {
        const client = new PipedriveClient();

        expect(client.apiToken).toBeUndefined();

        const token = "asdasdasdasdasdasdasd";
        client.apiToken = token;

        expect(client.apiToken).toBeDefined();
        expect(client.apiToken).toBe(token);
    });
});
