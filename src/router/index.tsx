import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { authRoutes, dashboardRoutes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {authRoutes.map((el) => (
        <Route {...el} key={el.path} />
      ))}

      {dashboardRoutes.map((el) =>
        el.children.length > 0 ? (
          <Route path={el.path} element={el.element} key={el.path}>
            {el.children.map((child) => (
              <Route
                path={child.path}
                element={child.element}
                index={child.index}
                key={child.path}
              />
            ))}
          </Route>
        ) : (
          <Route element={el.element} path={el.path} />
        )
      )}

      <Route path="*" element={<div>Page not found</div>} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
