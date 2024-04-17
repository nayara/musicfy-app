import { Route } from "react-router-dom";
import Home from "../pages/Home";
import PlaylistDetail from "../pages/PlaylistDetail";

export const rootPath = "/";

export const PublicRoutes = (
  <Route path={rootPath}>
    <Route index element={<Home />} />
    <Route path="/playlist/:id" element={<PlaylistDetail />} />
  </Route>
);
