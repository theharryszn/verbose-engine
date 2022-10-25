import { getJSONData, updateJSONData } from "../helpers/store";

it("gets arrays of users from localStorage", () => {
  const data = getJSONData("users");
  expect(data).toBeInstanceOf(Array);
});

it("gets arrays of chats from localStorage", () => {
  const data = getJSONData("users");
  expect(data).toBeInstanceOf(Array);
});

it("updates objects in localStorage", () => {
  const newData = [
    {
      name: "test",
    },
  ];
  updateJSONData("users", newData);

  const fetched = getJSONData("users");

  expect(fetched).toMatchObject(newData);
});
