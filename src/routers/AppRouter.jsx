import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { startChecking } from "../actions/auth";

const AuthRouter = lazy(() => import("./AuthRouter"));
const MyCalendar = lazy(() => import("../pages/calendar/Index"));
const PublicRouter = lazy(() => import("./PublicRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));
const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRouter isAuth={!!uid}>
                <AuthRouter />
              </PublicRouter>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRouter isAuth={!!uid}>
                <MyCalendar />
              </PrivateRouter>
            }
          />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
