// import { defineConfig } from "@rsbuild/core";
// import { pluginReact } from "@rsbuild/plugin-react";
// import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
const dependencies = require("./package.json").dependencies;
// export default defineConfig({
//   server: {
//     port: 3002,
//   },
//   dev: {
//     assetPrefix: "http://localhost:3002",
//   },
//   html: {
//     mountId: "dashboard",
//   },
//   tools: {
//     rspack: (config, { appendPlugins }) => {
//       appendPlugins([
//         new ModuleFederationPlugin({
//           name: "dashboard",
//           remotes: {
//             shell: "shell@http://localhost:3000/mf-manifest.json",
//           },
//           exposes: {
//             "./dashboard": "./src/App.tsx",
//           },
//           shared: [
//             {
//               react: {
//                 singleton: true,
//                 eager: true,
//                 requiredVersion: dependencies.react,
//               },
//               "react-dom": {
//                 singleton: true,
//                 eager: true,
//                 requiredVersion: dependencies["react-dom"],
//               },
//               "react-router-dom": {
//                 singleton: true,
//                 requiredVersion: dependencies["react-router-dom"],
//               },
//             },
//           ],
//         }),
//       ]);
//     },
//   },
//   // moduleFederation: {
//   //   options: mfConfig,
//   // },
//   plugins: [pluginReact()],
// });

import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 2000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    historyApiFallback: false,
    publicDir: {
      name: __dirname,
      copyOnBuild: false,
    },
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: "http://localhost:2000",
  },
  html: {
    scriptLoading: "module",
  },
  performance: {
    chunkSplit: { strategy: "single-vendor" },
  },
  output: {
    assetPrefix: "http://localhost:2000",
  },
  moduleFederation: {
    options: {
      name: "federation_consumer",
      exposes: {
        "./consumerDashboard": "./src/App.tsx",
        "./consumerComponent": "./src/shared/HelloComponent.tsx",
      },
      filename: "remoteEntry.js",
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
  //     ]);
  //   },
  // },
  plugins: [pluginReact()],
});
