// const dependencies = require("./package.json").dependencies;
import { dependencies } from "./package.json";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
// const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin");

export default defineConfig({
  server: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: true,
  },
  performance: {
    chunkSplit: { strategy: "single-vendor" },
  },
  output: {
    assetPrefix: "http://localhost:3000",
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:3000",
  },
  html: {
    scriptLoading: "module",
  },

  moduleFederation: {
    options: {
      name: "shell",

      remotes: {
        federation_consumer:
          "federation_consumer@http://localhost:2000/remoteEntry.js",
      },
      exposes: {
        "./shellRoute": "./src/routes/index.tsx",
      },
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: "18.2.0",
          },
          "react-dom": {
            singleton: true,
            requiredVersion: "18.2.0",
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: dependencies["react-router-dom"],
          },
          "@mui/material": {
            singleton: true,
            requiredVersion: dependencies["@mui/material"],
          },
          "@emotion/react": {
            singleton: true,
            requiredVersion: dependencies["@emotion/react"],
          },
          "@emotion/styled": {
            singleton: true,
            requiredVersion: dependencies["@emotion/styled"],
          },
        },
      ],
    },
  },
  // tools: {
  //   rspack: (config, { appendPlugins }) => {
  //     appendPlugins([
  //       new ModuleFederationPlugin(),
  //       // new RsdoctorRspackPlugin({}),
  //     ]);
  //   },
  // },
  plugins: [pluginReact()],
});
