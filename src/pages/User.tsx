import { useLocation } from "react-router-dom";

export default function UserProfile() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const user = params.get("user");
  const address = params.get("address");

  return (
    <div>
      <h2>User: {user}</h2>
      <h2>Address: {address}</h2>
    </div>
  );
}
