import { fakeItemGenerator } from "./generateFakeItems";

const data = localStorage.getItem("nfts")
  ? JSON.parse(localStorage.getItem("nfts"))
  : setDatatoLocalStorage(fakeItemGenerator(10));

function setDatatoLocalStorage(data) {
  localStorage.setItem("nfts", JSON.stringify(data));
  return data;
}

export default data;
