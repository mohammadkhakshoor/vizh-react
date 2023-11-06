import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/Applayout";
import CartInfo from "./components/CartInfo";
import CartContainer from "./components/CartContainer";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <CartContainer /> },
        {
          path: "product",
          element: <CartInfo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
