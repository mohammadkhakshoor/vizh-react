import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/Applayout";
import NftInfo from "./components/NftInfo";
import NftContainer from "./components/NftContainer";
import { FakeDataProvider } from "./contexts/FakeDataContext";
import Homepage from "./ui/Homepage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "/collections",
          element: <NftContainer />,
        },
        {
          path: "/collections/:id",
          element: <NftInfo />,
        },
      ],
    },
  ]);

  return (
    <FakeDataProvider>
      <RouterProvider router={router} />
    </FakeDataProvider>
  );
}
