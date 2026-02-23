
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import { createBrowserRouter, RouterProvider } from "react-router"
import FetchQuizs from "./pages/FetchQuizs";
import RootLayout from "./components/layout/RootLayout"
import Home from "./pages/Home"
import GetSavedQuizs, { loader as savedQuizLoader } from './pages/GetSavedQuizs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true, element: <Home />
        },
        {
          path: "quizs",
          element: <FetchQuizs />
        },
        {
          path: "saved",
          element: <GetSavedQuizs />,
          loader: savedQuizLoader
        }
      ]
    },

  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
