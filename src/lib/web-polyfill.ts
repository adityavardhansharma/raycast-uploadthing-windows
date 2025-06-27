/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetch, FormData, Response, Headers } from "undici";
import * as Crypto from "crypto";

// Check if crypto is already available before trying to assign it
if (!globalThis.crypto) {
  (globalThis as any).crypto = Crypto;
}
globalThis.fetch = fetch as any;
globalThis.Response = Response as any;
globalThis.FormData = FormData as any;
globalThis.Headers = Headers as any;
