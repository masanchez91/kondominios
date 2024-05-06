import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { AuthGuard, RoleGuard } from "./guards";
import { PrivateRoutes, Roles } from "./models";
import LogOut from "./pages/Auth/LogOut/LogOutPageView";
import { Dashboard } from "./pages/Private";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";

const Private = lazy(() => import("./routes/Private"));
const Public = lazy(() => import("./routes/Public"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <BrowserRouter>
            <LogOut />
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path="/*" element={<Public />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
