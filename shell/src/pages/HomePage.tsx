import TextWithBG from "../components/TextWithBG";
import { Suspense, lazy } from "react";
import DashboardComponent from "federation_consumer/consumerComponent";
// const HelloComponent = lazy(() => import("app2/Hello"));

function HomePage() {
  return (
    <div>
      <p>This is home page in shell</p>
      <div>
        <TextWithBG text="This is my homepage component" />
      </div>
      <DashboardComponent />
    </div>
  );
}

export default HomePage;
