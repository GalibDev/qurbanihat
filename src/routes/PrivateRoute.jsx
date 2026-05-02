import { Navigate, useLocation } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { data: session, isPending } = authClient.useSession();

  const savedUser = localStorage.getItem("qurbanihat-user")
    ? JSON.parse(localStorage.getItem("qurbanihat-user"))
    : null;

  const user = session?.user || savedUser;

  if (isPending && !savedUser) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;