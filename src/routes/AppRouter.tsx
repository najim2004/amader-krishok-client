import { createBrowserRouter } from "react-router-dom";
import { Route } from "../types/routes";
import { App } from "../App";
import { Home } from "../pages/home/Home";
import { ProductPage } from "@/pages/product/ProductPage";
import { ShoppingCart } from "@/pages/cart/ShoppingCart";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "@/pages/signup/Signup";
import { Shop } from "@/pages/shop/Shop";
import { Chat } from "@/pages/chat/Chat";
import { Dashboard } from "@/layout/dashboard/Dashboard";
const routes: Route[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/shop/category/:slug",
        element: <Shop />,
      },
      {
        path: "/shop/category/:slug/:sub_slug",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export const router = createBrowserRouter(routes);
