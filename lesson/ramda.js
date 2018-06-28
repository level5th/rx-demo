const {
  pipe,
  filter,
  equals,
  where,
  sortBy,
  project,
  reverse,
  compose,
  prop,
  groupBy,
  partition
 } = require('ramda')

const staff = require('./data')

// 性别男
// 按照年龄倒序
// 取name 和 job 字段
// 按 job 分组

const queryTask = pipe(
  filter(where({ gender: equals('female') })),
  sortBy(prop('age')),
  reverse,
  project(['name', 'job']),
  groupBy(prop('job'))
)

const queryOther =  compose(
  groupBy(prop('job')),
  project(['name', 'job']),
  reverse,
  sortBy(prop('age')),
  filter(where({ gender: equals('female') }))
)

console.log(queryTask(staff))
console.log(queryOther(staff))
