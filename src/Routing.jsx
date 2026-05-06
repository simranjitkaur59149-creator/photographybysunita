import { createBrowserRouter, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
import HomePage from "./HomePage/HomePage";
import Layout from "./Layout";
import Footer from "./components/Footer";
import About from "./About";

import ContactPage from "./ContactPage";
import Portfolio from "./Portfolio/Portfolio.jsx";

const router = createBrowserRouter([
    {path:"/",
        element:<Navigate to="/photography" replace />

    },
  {
    path: "/photography",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
//   {
//     path: "/",
//     element: <HomePage />,
//   },

  // {
  //     path:"/footer",
  //     element:<Footer/>
  // }
]);

export default router;
