import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Cart from "../page/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;