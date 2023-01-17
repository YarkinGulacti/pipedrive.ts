import { it, describe, test, expect } from "@jest/globals";
import { PipedriveClient } from "./PipedriveClient";

it("Pipedrive Client tests.", () => {
    describe("Pipedrive Client instantiation tests.", () => {
        test("Pipedrive Client apiToken set test.", () => {
            const client = new PipedriveClient();

            expect(client.apiToken).toBe(undefined);
        })
    })
});