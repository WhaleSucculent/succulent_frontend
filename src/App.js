import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import PaymentPage from "pages/PaymentPage/PaymentPage";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import LandingPage from "pages/LandingPage/LandingPage";
import ProductDetailPage from "pages/ProductDetailPage/ProductDetailPage";
import HomePage from "pages/HomePage/HomePage";
import UserProfilePage from "pages/UserProfilePage/UserProfilePage";
import OrderPage from "pages/AdminOrderPage/AdminOrderPage";
import AdminHeader from "pages/AdminHomePage/components/Sidebar";
import AdminProductPage from "pages/AdminHomePage/pages/Inventory";
import AdminOrderPage from "pages/AdminHomePage/pages/Order";
import AdminUserListPage from "pages/AdminHomePage/pages/Users";
import CollectionsPage from "pages/CollectionsPage/CollectionsPage";
import CollectionPageGrowLights from "pages/CollectionsPage/CollectionPageGrowLights";
import CollectionPageSoil from "pages/CollectionsPage/CollectionPageSoil";
import CollectionPagePot from "pages/CollectionsPage/CollectionPagePot";
import MyOrdersPage from "pages/UserProfilePage/MyOrdersPage";
import Address from "pages/UserProfilePage/Address";
import Payments from "pages/UserProfilePage/Payments";
import UserSideBar from "pages/UserProfilePage/Components/UserSidebar";
import Shipping from "pages/PrivacyPolicies/Shipping";



import HeaderFooter from "components/HeaderFooter";
// import Cart from "pages/CheckoutPage/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CheckoutCart from "pages/CheckoutPage/CheckoutCart";
import NotFound from "components/NotFound";
import ContactPage from "pages/ContactPage/Contact";
import Privacy from "pages/ContactPage/Privacy";
import PlaceOrder from "pages/CheckoutPage/components/order/PlaceOrder";

import { LoginPage } from "pages/LoginPage/LoginPage";
import { ForgotPassPage } from "pages/ForgotPassPage/ForgotPassPage";
import FileUpload from "components/FileUploader";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { useMeQuery } from "queries/utilQueries";
import Loading from "components/Loading";
import { ResetPassPage } from "pages/ResetPassPage/ResetPassPage";
import { AnimatePresence } from "framer-motion";
import { CartButton } from "components/CartButton/CartButton";
import TestingPage from "pages/TestingPage/TestingPage";
import DashboardHome from "pages/AdminHomePage/temp/DashboardHome";

function App() {
  const { data, loading, error } = useMeQuery()
  const location = useLocation();


  if (loading) return <div></div>
  if (error) return <div>Error!</div>

  return (
    <div className="App">

      <ToastContainer />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          {/* Router for landing page */}
          <Route path="landing" element={<LandingPage />} />
          <Route path="loading" element={<Loading />} />
          <Route path="cartButton" element={<CartButton />} />
          <Route path="testing" element={<TestingPage />} />
          {/* Router for   */}
          <Route path="/" element={<HeaderFooter />}>
            <Route  index element={<HomePage />} />

            <Route path="home" element={<HomePage />} />
            <Route path="succulents" element={<CollectionsPage />}>
              <Route path="new" element={<CollectionsPage />} />
              <Route path="rare" element={<CollectionsPage />} />
              <Route path="best" element={<CollectionsPage />} />
            </Route>
            <Route path="growlights" element={<CollectionPageGrowLights />} />
            <Route path="soil/rocks" element={<CollectionPageSoil />} />
            <Route path="pots" element={<CollectionPagePot />} />
            
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot" element={<ForgotPassPage />} />
            <Route path="reset">
              <Route path=":id" element={<ResetPassPage />} />
            </Route>
            <Route path="file" element={<FileUpload />} />
            <Route path="products">
              <Route path=":id" element={<ProductDetailPage />} />
            </Route>

            <Route path="cart" element={<CheckoutCart />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="checkout/*" element={<CheckoutPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="profile" element={<UserSideBar />}>
              <Route path="myprofile" element={<UserProfilePage />} />
              <Route path="myorders" element={<MyOrdersPage />} />
              <Route path="myplacedorders" element={<OrderPage />} />
              <Route path="payments" element={<Payments />} /> 
              <Route path="address" element={<Address />} /> 

            </Route>
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="shipping" element={<Shipping />} />

          </Route>
          {data?.me?.role === "admin" && (
            <Route path="/admin" element={<AdminHeader />}>
              <Route path="home" element={<DashboardHome />} />
              <Route path="product" element={<AdminProductPage />} />
              <Route path="order" element={<AdminOrderPage />} />
              <Route path="user" element={<AdminUserListPage />} />
            </Route>
          )}


          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </AnimatePresence>
    </div>
  )
}


export default App;
