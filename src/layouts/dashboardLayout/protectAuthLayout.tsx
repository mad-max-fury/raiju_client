import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getToken, getUser } from "../../app/slices/authsplice";
import { ApplicationRoutes } from "../../utils/enums";

interface ProtectedAuthLayoutProps {
  children: ReactNode;
}

const ProtectedAuthLayout: React.FC<ProtectedAuthLayoutProps> = ({
  children,
}) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getToken);
  const user = useSelector(getUser);
  if (isLoggedIn && token && user) {
    return <Navigate to={ApplicationRoutes.DASHBOARD_HOME} replace />;
  }

  return <>{children}</>;
};

export default ProtectedAuthLayout;
