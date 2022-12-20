import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListWorkersPage from "./pages/ListWorkersPage";
import UrlValidatorWrap from "./pages/UrlValidatorWrap";
import ErrorPage from "./ErrorPage";
import AppFrame from "./AppFrame";

export default function App() {

  const [page, setPage] = useState(1);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppFrame />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <ListWorkersPage page={page} setPage={setPage} />,
        },
        {
          path: "/:uid",
          element: <UrlValidatorWrap />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}
