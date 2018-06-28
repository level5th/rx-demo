const { Observable } = require('rxjs')

// const source$ = new Observable(observer => {
//   observer.next(1)
//   observer.next(2)
//   observer.next(3)
// }).subscribe({
//   next: console.log
// })

// const source$ = new Observable(observer => {
//   let number = 1
// 　const handle = setInterval(() => {
//     observer.next(number++)
//       if (number > 3) {
//         clearInterval(handle);
//       }
//   }, 1000);
// }).subscribe({
//   next: console.log
// })

// const source$ = new Observable(observer => {
//   let number = 1
// 　const handle = setInterval(() => {
//     observer.next(number++)
//       if (number > 3) {
//         clearInterval(handle);
//         observer.complete()
//       }
//   }, 1000);
// }).subscribe({
//   next: console.log,
//   complete: () => console.log('observable complete')
// })
  
// const source$ = new Observable(observer => {
//   let number = 1
// 　const handle = setInterval(() => {
//     observer.next(number++)
//       if (number > 3) {
//         observer.error('custom error')
//         // observer.complete() // next 循环， err, complete
//       }
//   }, 1000);
// }).subscribe({
//   next: console.log,
//   error: console.log,
//   complete: () => console.log('observable complete')
// })

// 退订
// const source$ = new Observable(observer => {
//   let number = 1
// 　const handle = setInterval(() => {
//     // console.log(`run:${number}`)
//     observer.next(number++)
//   }, 1000)
//   return {
//     unsubscribe: () => {
//       clearInterval(handle)
//       console.log('unsubscribe')
//     }
//   }
// })

// const subscription = source$.subscribe({
//   next: console.log,
//   error: console.log,
//   complete: () => console.log('observable complete')
// })
// setInterval(() => subscription.unsubscribe(), 3000)

// 自定义操作符
// function map(project) {
//   return new Observable(observer => {
//     const sub = this.subscribe({
//       next: value => observer.next(project(value)),
//       error: err => observer.error(error),
//       complete: () => observer.complete(),
//     })
//     return {
//       unsubscribe: () => {
//         sub.unsubscribe()
//       }
//     }
//   })
// }

// Observable.prototype.map = map

// const source$ = Observable.create(obs => {
//   obs.next(1)
//   obs.next(2)
//   obs.next(3)
// }).map(x => x * 2).subscribe(console.log)

  
  