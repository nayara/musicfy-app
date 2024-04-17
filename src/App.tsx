import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes, rootPath } from "./routes";

const App = () => {
  return (
    <Routes>
      {PublicRoutes}
      <Route path="*" element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default App;
