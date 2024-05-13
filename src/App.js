import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";

import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route
              path={ROUTES.LOGIN}
              element={
                <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
                  <Login />
                </IsUserLoggedIn>
              }
            />

            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
                  <SignUp />
                </IsUserLoggedIn>
              }
            />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
