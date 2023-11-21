import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./ResetLinks.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./custom.css";

import App from "./App.jsx";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductsPage";
import Video from "./pages/VideoPage";
import Work from "./pages/WorkPage.jsx";
import Photo from "./pages/PhotoPage.jsx";
import NoMatch from "./pages/NoMatch";
import Checkout from "./pages/CheckoutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/photo",
        element: <Photo />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
