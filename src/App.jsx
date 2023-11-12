import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import NftInfo from "./components/NftInfo";
import NftContainer from "./components/NftContainer";
import { FakeDataProvider } from "./contexts/FakeDataContext";
import Homepage from "./ui/Homepage";
import { SeachNftProvider } from "./contexts/SearchNftContext";
import WagmiConfigProvider from "./components/web3Modal/WaggmiConfig";

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
    <WagmiConfigProvider>
      <FakeDataProvider>
        <SeachNftProvider>
          <RouterProvider router={router} />
        </SeachNftProvider>
      </FakeDataProvider>
    </WagmiConfigProvider>
  );
}
