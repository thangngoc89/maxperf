const Benchmark = require("benchmark")
const map = require("./map")

const suite = new Benchmark.Suite()
const suite2 = new Benchmark.Suite()

const arr = [1, 2, 3, 4, 5]
const cb = val => val + 1

const largeArray = new Array(100000)

suite
  .add("Array.prototype.map", () => {
    arr.map(cb)
  })
  .add("maxperf/map", () => {
    map(arr, cb)
  })
  .on("cycle", function(event) {
    console.log(String(event.target))
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"))
  })
  .run()

suite2
  .add("Array.prototype.map 100 000 elements", () => {
    largeArray.map(cb)
  })
  .add("maxperf/map 100 000 elements", () => {
    map(largeArray, cb)
  })
  .on("cycle", function(event) {
    console.log(String(event.target))
  })
  .on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"))
  })
  .run()
