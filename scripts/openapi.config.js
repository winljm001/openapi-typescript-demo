// const { generateService } = require("@umijs/openapi");
import { generateService } from "@umijs/openapi";
generateService({
  requestLibPath: "import { request } from '@fetch'",
  schemaPath: "http://192.168.10.23:8080/v3/api-docs",
  serversPath: "./src/services",
  projectName: "api",
  mockFolder: "./.mocks",
});
