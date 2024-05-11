import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import { ScheduleManagement } from "../components/ScheduleManagement";

export const routes = {
  home: "/",
  schedule: "/schedule-management",
};
export const routers = createBrowserRouter([
  {
    path: routes.home,
    element: <HomeLayout />,
    children: [
      {
        path: routes.home,
        element: <Navigate to={routes.schedule} replace />,
        index: true,
      },
      {
        path: routes.schedule,
        element: <ScheduleManagement />,
      },
    ],
  },
]);
