// import { App } from "antd";
import Home from "./pages/Home";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/User";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminContent } from "./components/Content";
import SignUp from "./pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <AdminContent />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);
