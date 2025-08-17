import { Route, Routes } from "react-router-dom";
import { Main } from "../Main";
import { NotFound } from "../NotFound";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../../shared/components/Login";
import { NotNotes } from "../NotNotes";
import { PreviewNotePage } from "../Preview";
import { EditNotePage } from "../Edit";

export const Routing = () => {
  return (
    <div className="main-app">
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        /> */}

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        >
          <Route index element={<NotNotes />} />
          <Route path="/preview/:id" element={<PreviewNotePage />} />
          <Route path="/edit/:id" element={<EditNotePage />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
