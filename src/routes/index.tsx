import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Container from "../molecules/layout/components/Container";
import PageNotFound from "../molecules/layout/components/PageNotFound";
import DashboardPage from "../pages/dashboard";
import ProjectPage from "../pages/project";
import { LoginContainer } from "../containers/login-container";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Container />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <DashboardPage />
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
