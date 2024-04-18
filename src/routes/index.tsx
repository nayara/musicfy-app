import { Route } from "react-router-dom";
import Home from "../pages/Home";
import PlaylistDetail from "../pages/PlaylistDetail";
import Login from "../pages/Login";

export const rootPath = "/";

export const PublicRoutes = (
  <Route path={rootPath}>
    <Route index element={<Home />} />
    <Route path="/playlist/:playListId" element={<PlaylistDetail />} />
    <Route path="/login" element={<Login />} />
  </Route>
);
