import { Route } from "react-router-dom";
import Home from "../pages/Home";

export const rootPath = "/";

export const PublicRoutes = (
  <Route path={rootPath}>
    <Route index element={<Home />} />
  </Route>
);
