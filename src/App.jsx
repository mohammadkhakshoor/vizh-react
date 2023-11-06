import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/Applayout";
import CartInfo from "./components/CartInfo";
import NftContainer from "./components/NftContainer";
import { FakeDataProvider } from "./contexts/FakeDataContext";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <NftContainer /> },
        {
          path: "product",
          element: <CartInfo />,
        },
      ],
    },
  ]);

  return (
    <FakeDataProvider>
      <RouterProvider router={router} />;
    </FakeDataProvider>
  );
}
