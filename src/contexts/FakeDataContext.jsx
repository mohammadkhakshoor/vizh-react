import { createContext, useContext } from "react";
import data from "../utils/getFakeData";
const FakeData = createContext();

const FakeDataProvider = ({ children }) => {
  return <FakeData.Provider value={data}>{children}</FakeData.Provider>;
};

function useFakeData() {
  const context = useContext(FakeData);
  if (context === undefined)
    throw new Error("fake data used outside of the Provider");
  return context;
}
export { useFakeData, FakeDataProvider };
