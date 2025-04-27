import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const SCHEMA_URL = `${process.env.VITE_API_SERVER_BASE_URL}/v3/api-docs`;

const ast = await openapiTS(SCHEMA_URL, {});

fs.writeFileSync("./src/types/server/index.d.ts", astToString(ast));
