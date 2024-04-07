import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import Appointment from "./pages/Appointment";
import DashboardTemplate from "./components/DashboardTemplate";
import Dashboard from "./components/Dashboard";
import Apply from "./pages/Apply";
import Navbar from "./components/Navbar";
import ProductPage from './pages/Product/ProductPage';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/legal"
              element={
                <Legal />
              }
            />
            <Route
              path="/appointment"
              element={
                <Appointment />
              }
            />
            <Route
              path="*"
              element={
                <NotFound />
              }
            />
            <Route
              path="/dashboard"
              element={
                 <><Navbar /><DashboardTemplate /><Dashboard /></> 
              }
            />
            <Route
              path="/jobs"
              element={
                <><Navbar /><Apply /><DashboardTemplate /></>
              }
            />
            {/* <Route path="/product/:prodid"
              element={
                <ProductPage />
              }
            /> */}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
