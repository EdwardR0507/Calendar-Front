import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AuthRouter = lazy(() => import("./AuthRouter"));
const Calendar = lazy(() => import("../pages/calendar/Index"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/" element={<Calendar />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;