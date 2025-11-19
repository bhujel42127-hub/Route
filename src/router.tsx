// import { App } from "antd";
import Home from "./pages/Home";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/User";
import { ProtectedRoute } from "./ProtectedRoute";
import SignUp from "./pages/Signup";
import RootRedirect from "./pages/RootRedirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);
