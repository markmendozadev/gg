import { Outlet, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

const ContactView = lazy(() => import("../pages/ContactView"));
const ContactForm = lazy(() => import("../pages/ContactForm"));

function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback="Loading...">
              <ContactForm />
            </Suspense>
          ),
        },
        {
          path: "contact/view",
          element: (
            <Suspense fallback="Loading...">
              <ContactView />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return element;
}

export default Routes;
