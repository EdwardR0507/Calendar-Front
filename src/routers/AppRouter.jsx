import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { startChecking } from "../actions/auth";

const AuthRouter = lazy(() => import("./AuthRouter"));
const MyCalendar = lazy(() => import("../pages/calendar/Index"));

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/" element={<MyCalendar />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
