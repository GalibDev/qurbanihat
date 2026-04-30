import { Navigate, useLocation } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { data: session, isPending } = authClient.useSession();
  const location = useLocation();

  if (isPending) {
    return <Loading />;
  }

  if (!session?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;