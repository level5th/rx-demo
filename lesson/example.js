const { pipe, interval } = require('rxjs')
const { delay, filter, map, debounceTime } = require('rxjs/operators')

const interver$ = interval(1000)

// interver$.subscribe(x => console.log(`event1:${x}`))

interver$.pipe(
  debounceTime(2000),
  filter(x => x % 3 === 0),
  map(x => x * 2),
).subscribe(x => console.log(`event2:${x}`))

// interver$.subscribe(x => console.log(`event3:${x}`))

