import DashboardLayout from "../layouts/dashboardLayout";
import ProtectedAuthLayout from "../layouts/dashboardLayout/protectAuthLayout";
import ProtectedLayout from "../layouts/dashboardLayout/protectLayout";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Analytics from "../pages/dashboard/analytics";
import FundsManagement from "../pages/dashboard/fundsManagements";
import GenerateApi from "../pages/dashboard/generateApi";
import Home from "../pages/dashboard/home";
import UserProfile from "../pages/dashboard/profile";
import EditProfile from "../pages/dashboard/profile/editProfile";
import Services from "../pages/dashboard/services";
import Settings from "../pages/dashboard/settings";
import TransactionHistory from "../pages/dashboard/transactions";

const authRoutes = [
  {
    path: "/",
    element: (
      <ProtectedAuthLayout>
        <Login />
      </ProtectedAuthLayout>
    ),
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
];

const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedLayout>
        <DashboardLayout />
      </ProtectedLayout>
    ),
    children: [
      { element: <Home />, index: true, path: "" },
      { element: <Services />, index: true, path: "/dashboard/services/:id" },
      {
        element: <FundsManagement />,
        index: true,
        path: "/dashboard/funds_management",
      },
      {
        element: <TransactionHistory />,
        index: false,
        path: "/dashboard/transactions",
      },
      { element: <Analytics />, index: true, path: "/dashboard/analytics" },
      {
        element: <GenerateApi />,
        index: true,
        path: "/dashboard/generate_api",
      },
      { element: <UserProfile />, index: true, path: "/dashboard/profile" },
      {
        element: <EditProfile />,
        index: true,
        path: "/dashboard/profile/edit",
      },
      { element: <Settings />, index: true, path: "/dashboard/settings" },
    ],
  },
];

export { authRoutes, dashboardRoutes };
