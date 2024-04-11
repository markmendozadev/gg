import { Outlet, useRoutes } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import ContactView from "./pages/ContactView";
import HomePage from "./pages/HomePage";

const App = ({ environment }: { environment?: string }) => {
  const path = environment === "development" ? "/dashboard" : "";
  let element = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/dashboard",
          element: <HomePage />,
        },
        {
          path: `${path}/form`,
          element: <ContactForm />,
        },
        {
          path: `${path}/view`,
          element: <ContactView />,
        },
      ],
    },
  ]);

  return element;
};

export default App;
