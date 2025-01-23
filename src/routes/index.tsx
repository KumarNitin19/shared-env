import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Loading from "../pages/loading";
import Loader from "../molecules/loader";

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
        <Suspense fallback={<Loader fullPage loader={true} />}>
          <WithSidebar />
        </Suspense>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loader fullPage loader={true} />}>
              <DashboardContainer />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loader fullPage loader={true} />}>
              <DashboardContainer />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "project/:projectId",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loader fullPage loader={true} />}>
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
        <Suspense fallback={<Loader fullPage loader={true} />}>
          <GeneratePrivateKeyContainer />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/loading",
    element: (
      // <PublicRoute>
      <Suspense fallback={<Loader fullPage loader={true} />}>
        <Loading />
      </Suspense>
      // </PublicRoute>
    ),
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader fullPage loader={true} />}>
          <LoginContainer />
        </Suspense>
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: (
      <PublicRoute>
        <Suspense fallback={<Loader fullPage loader={true} />}>
          <PageNotFound />
        </Suspense>
      </PublicRoute>
    ),
  },
]);

export default router;
