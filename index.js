const { from } = require('rxjs')
const { map } = require('rxjs/operators')

var $source = from([1, 2, 3])
$source.pipe(map(x => x * 2))
  .subscribe(console.log)
