import { PipedriveClient } from "./core/PipedriveClient";
import { Deal } from "./lib/types/interface/Deal.interface";

declare module "pipedrive.ts" {
    export { PipedriveClient };
    export { Deal };
}
