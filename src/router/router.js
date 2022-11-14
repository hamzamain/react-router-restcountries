import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Countries from "../components/Countries/Countries";
import Details from "../components/Details/Details";
import Home from "../components/Home/Home";
import Policy from "../components/Policy/Policy";
import Main from "../Layout/Main";
import { CountriesLoder } from "../Loders/CountriesLoder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: CountriesLoder,
        element: <Home></Home>,
      },
      {
        path: "/countries",
        element: <Countries></Countries>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/country/:countryName",
        loader: ({ params }) => {
          return fetch(
            `https://restcountries.com/v3.1/name/${params.countryName}`
          );
        },
        element: <Details></Details>,
      },
      {
        path: "/*",
        element: (
          <h1>
            <b>
              <p>Page Not Found</p>
              <i>404</i>
            </b>
          </h1>
        ),
      },
    ],
  },
]);

export default router;
