import { faker } from "@faker-js/faker";

const fakeItemInfo = function () {
  return {
    id: faker.string.uuid(),
    fullName: faker.person.fullName(),
    image: faker.image.urlLoremFlickr({ category: "abstract" }),
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
const i = fakeItemGenerator(20);
console.log(i);
