import React, { Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/404";
// import DashboardPage from "federation_consumer/consumerDashboard";
const DashboardPage = React.lazy(
  () => import("federation_consumer/consumerDashboard")
);

function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "dashboard/*",
          element: (
            <Suspense fallback="Loading....">
              <DashboardPage />,
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return element;
}

export default Router;
