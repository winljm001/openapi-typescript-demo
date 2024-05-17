import createClient from "openapi-fetch";
import type { paths } from "../../services/api-schema"; // 由openapi-typescript生成

export const client = createClient<paths>({ baseUrl: "/" });
