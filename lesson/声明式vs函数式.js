const ramda = require('ramda')

// 声明式
function double (array) {
  const res = []
  for (let i = 0, len = array.length; i < len; i++) {
    res.push(array[i] * 2)
  }
  return res
}

function addOne (array) {
  const res = []
  for (let i = 0, len = array.length; i < len; i++) {
    res.push(array[i] + 1)
  }
  return res
}

// 函数式
const double = array => array.map(x => x * 2)
const addOne = array => array.map(x => x + 1)
