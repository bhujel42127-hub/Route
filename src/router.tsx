// import { App } from "antd";
import Home from "./pages/Home";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/User";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
