import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Loading from "../pages/loading";

const WithSidebar = lazy(
  () => import("../molecules/layout/components/WithSidebar")
);
const DashboardContainer = lazy(
  () => import("../containers/dashboard-container")
);
const LoginContainer = lazy(() => import("../containers/login-container"));

const GeneratePrivateKeyContainer = lazy(
  () => import("../containers/generate-private-key-container")
);

const PageNotFound = lazy(
  () => import("../molecules/layout/components/PageNotFound")
);

const ProjectPage = lazy(() => import("../pages/project"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <WithSidebar />
        </Suspense>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardContainer />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardContainer />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "project/:projectId",
        element: (
          <PrivateRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <ProjectPage />
            </Suspense>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/generate-private-key",
    element: (
      <PrivateRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <GeneratePrivateKeyContainer />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/loading",
    element: (
      // <PublicRoute>
      <Suspense fallback={<div>Loading...</div>}>
        <Loading />
      </Suspense>
      // </PublicRoute>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginContainer />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <PageNotFound />
        </Suspense>
      </PublicRoute>
    ),
  },
]);

export default router;
