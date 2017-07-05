module.exports = function map(arr, fn) {
  if (arr == null) {
    return []
  }

  var i = 0,
    len = arr.length,
    out = []

  for (; i < len; i++) {
    out[i] = fn(arr[i], i)
  }

  return out
}
