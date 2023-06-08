import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Cart from "../page/Cart";
import Main from "../page/Main";
import Notification from "../page/Notification";
import Pay from "../page/Pay";
import Delivery from "../page/Delivery";
import Favorite from "../page/Favorite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/notification", element: <Notification /> },
      { path: "/pay", element: <Pay /> },
      { path: "/delivery", element: <Delivery /> },
      { path: "/favorite", element: <Favorite /> },
    ],
  },
]);

export default router;
