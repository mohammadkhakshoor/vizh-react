import { faker } from "@faker-js/faker";

const fakeItemInfo = function () {
  return {
    id: faker.string.uuid(),
    fullName: faker.person.lastName(),
    image: faker.image.urlLoremFlickr({
      category: "abstract",
      // width: 368,
      // height: 352,
      width: 268,
      height: 256,
    }),
    number: (Math.random() * 20).toFixed(2),
    nftName: faker.person.zodiacSign(),
    avatar: faker.image.avatar(),
  };
};

export const fakeItemGenerator = (amount) => {
  const items = [];
  Array.from({ length: amount }).forEach(() => {
    items.push(fakeItemInfo());
  });
  return items;
};
