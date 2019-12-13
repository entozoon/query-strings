import { Config } from "@stencil/core";

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "query-strings",
  outputTargets: [
    {
      type: "www"
      // dir: "./dist"
      // baseUrl: "https://myapp.local/"
    }
  ]
};
