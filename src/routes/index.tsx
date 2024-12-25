import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import WithSidebar from "../molecules/layout/components/WithSidebar";
import PageNotFound from "../molecules/layout/components/PageNotFound";
import ProjectPage from "../pages/project";
import { LoginContainer } from "../containers/login-container";
import { DashboardContainer } from "../containers/dashboard-container";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <WithSidebar />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <DashboardContainer />
          </PrivateRoute>
        ),
      },
      {
        path: "projects/:projectId",
        element: (
          <PrivateRoute>
            <ProjectPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <LoginContainer />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoute>
        <PageNotFound />
      </PublicRoute>
    ),
  },
]);

export default router;
