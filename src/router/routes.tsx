import DashboardLayout from "../layouts/dashboardLayout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/dashboard/home";

const authRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [{ element: <Home />, index: true, path: "" }],
  },
];

export { authRoutes, dashboardRoutes };
