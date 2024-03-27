import DashboardLayout from "../layouts/dashboardLayout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/dashboard/home";
import TransactionHistory from "../pages/dashboard/transactions";

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
    children: [
      { element: <Home />, index: true, path: "" },
      { element: <Home />, index: true, path: "/dashboard/funds_management" },
      {
        element: <TransactionHistory />,
        index: false,
        path: "/dashboard/transactions",
      },
      { element: <Home />, index: true, path: "/dashboard/analytics" },
      { element: <Home />, index: true, path: "/dashboard/profile" },
      { element: <Home />, index: true, path: "/dashboard/settings" },
    ],
  },
];

export { authRoutes, dashboardRoutes };
