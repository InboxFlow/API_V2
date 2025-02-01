import { LoaderFunctionArgs } from "@remix-run/node";
import { DashboardPage } from "~/client/pages/DashboardPage";

export const loader = async (context: LoaderFunctionArgs) => {
  return null;
};

export default function DashboardRoute() {
  return <DashboardPage />;
}
