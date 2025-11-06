import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { Home } from "./pages/Home";
import { ErrorPage
  
 } from "./pages/ErrorPage";
import { AppLayout } from "./components/layout/AppLayout";
import { CountryDetails } from "./components/layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
       {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "country",
    element: <Country />,
  },
  {
    path: "country/:id",
    element: <CountryDetails />,
  },
]
}])

const App = () => {
  return <RouterProvider router = {router}></RouterProvider>
}

export default App;
