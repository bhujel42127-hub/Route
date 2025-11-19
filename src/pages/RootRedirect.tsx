import { Navigate } from "react-router-dom";

export default function RootRedirect() {
  const user = localStorage.getItem("user");
  if (user) return <Navigate to="/dashboard" replace />;
  return <Navigate to="/signup" replace />;
}
