import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "components/Header";
import ProductsPage from "pages/ProductsPage/ProductsPage";
import LoginPage from "pages/LoginPage/LoginPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import PaymentPage from "pages/PaymentPage/PaymentPage";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import LandingPage from "pages/LandingPage/LandingPage";
import ProductDetailPage from "pages/ProductDetailPage/ProductDetailPage";
import HomePage from "pages/HomePage/HomePage";
import UserProfilePage from "pages/UserProfilePage/UserProfilePage";
import AdminHomePage from "pages/AdminHomePage/AdminHomePage";
import AdminHeader from "pages/AdminHomePage/components/Sidebar";
import AdminProductPage from "pages/AdminHomePage/pages/Inventory";
import AdminOrderPage from "pages/AdminHomePage/pages/Order";
import AdminUserPage from "pages/AdminHomePage/pages/Users";
import CollectionsPage from "pages/CollectionsPage/CollectionsPage";

import HeaderFooter from "components/HeaderFooter";
// import Cart from "pages/CheckoutPage/Cart";
import {ToastContainer} from "react-toastify";
import"react-toastify/dist/ReactToastify.css";

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import CheckoutCart from "pages/CheckoutPage/CheckoutCart";
import NotFound from "components/NotFound";
import ContactPage from "pages/ContactPage/Contact";
import Privacy from "pages/ContactPage/Privacy";
import PlaceOrder from "pages/CheckoutPage/components/order/PlaceOrder";
import { AUTH_TOKEN } from "pages/LoginPage/constants";
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from '@apollo/client/link/ws';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        order: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: 'https://succulentbackend.azurewebsites.net/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
        <ToastContainer/>
          <Routes>
            {/* Router for landing page */}
            <Route path="landing" element={<LandingPage />} />

            {/* Router for   */}
            <Route path="/" element={<HeaderFooter />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="products">
                <Route path=":id" element={<ProductDetailPage />} />
              </Route>
              <Route path="succulents" element={<CollectionsPage />}>
                <Route path="new" element={<CollectionsPage />} />
                <Route path="rare" element={<CollectionsPage />} />
                <Route path="best" element={<CollectionsPage />} />
              </Route>
              <Route path="cart" element={<CheckoutCart />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="profile" element={<UserProfilePage />} />
              <Route path="contact" element={<ContactPage/>}/>
            </Route>
            <Route path="/admin" >
              <Route path="home" element={<AdminHomePage />} />
              <Route path="product" element={<AdminProductPage />} />
              
              <Route path="order" element={<AdminOrderPage />} />
              <Route path="user" element={<AdminUserPage />} />
            </Route>
            <Route path="checkout/*" element={<CheckoutPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="/admin" element={<AdminHeader />}>
              <Route path="home" element={<AdminHomePage />} />
              <Route path="product" element={<AdminProductPage />} />
             
              <Route path="order" element={<AdminOrderPage />} />
              <Route path="user" element={<AdminUserPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
