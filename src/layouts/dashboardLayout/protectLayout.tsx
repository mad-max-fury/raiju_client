import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getToken, getUser } from "../../app/slices/authsplice";
import { ApplicationRoutes } from "../../utils/enums";

interface ProtectedLayoutProps {
  children: ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = useSelector(getToken);
  const user = useSelector(getUser);

  if (!isLoggedIn && !token && user === null) {
    return <Navigate to={ApplicationRoutes.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
