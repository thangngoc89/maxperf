# maxperf
Javascript max perf FTW

This package is a collection of small utilities that can replace native code for max perf

# Map 

Replace `Array.proptype.map`
I mostly use this in JSX mapping

## Usage

```js
const map = require("maxperf/map")

assert.deepEqual(
  map([1, 2, 3, 4, 5], val => val * val),
  [1, 2, 3, 4, 5].map(val => val * val)
)
```

## Benchmark

```
❯ node map.bench
Array.prototype.map x 1,478,144 ops/sec ±2.17% (89 runs sampled)
maxperf/map x 11,525,104 ops/sec ±4.48% (68 runs sampled)
Fastest is maxperf/map

Array.prototype.map 100 000 elements x 493 ops/sec ±3.83% (70 runs sampled)
maxperf/map 100 000 elements x 302 ops/sec ±3.76% (65 runs sampled)
Fastest is Array.prototype.map 100 000 elements
```


