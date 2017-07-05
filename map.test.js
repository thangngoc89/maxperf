const map = require("./map")

it("map", () => {
  const arr = [1, 2, 3, 4, 5]
  expect(map(arr, val => val + 1)).toEqual([2, 3, 4, 5, 6])
  expect(map(arr, val => val * val)).toEqual([1, 4, 9, 16, 25])
})
