import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import Detailspage from "./pages/Detailspage.jsx";
import RootLayout from "./components/Layout/Rootlayout.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import DataFetcher from "./pages/testAxio.jsx";
import SlideBanner from "./components/Banner/SlideBanner.jsx";
import { Products } from "./pages/testAxio.jsx";
import { DetailCard1 } from "./components/Card/DetailpageCard.jsx";
import RecomendSlideBanner from "./components/Banner/RecomendBanner.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Normal layout with Navbar and Footer
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/listing",
        element: <ListingPage />,
      },

      {
        path: "/details",
        element: <Detailspage />,
      },

      {
        path: "/details/:id",
        element: <Detailspage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },

      {
        path: "/prod",
        element: <Products />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
