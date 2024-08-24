import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Container from "../molecules/layout/components/Container";
import Home from "../molecules/project/components/Home";
import Projects from "../molecules/project/components/Projects";
import SignIn from "../molecules/auth/components/signin";
import PageNotFound from "../molecules/layout/components/PageNotFound";

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
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "projects/:name",
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-in",
    element: (
      <PublicRoute>
        <SignIn />
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
