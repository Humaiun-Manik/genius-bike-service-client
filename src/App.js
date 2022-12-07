import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddService from "./Pages/AddService/AddService";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUp from "./Pages/Login/SignUp/SignUp";
import ManageServices from "./Pages/ManageServices/ManageServices";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="service/:serviceId" element={<ServiceDetail />} />
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/addService"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

// 1. react bootstrap
// 2. react router
// 3. firebase
// 4. react fonts awesome
// 5. react firebase hooks
// 6. react toastify
// 7. react-helmet-async
// 8. axios
