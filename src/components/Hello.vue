<template>
  <div>
    <button type="button" name="button" v-stream="plus$">123132</button>
    <h4>Single Value</h4>
  </div>
</template>

<script>
import Rx from 'rxjs/Rx'
export default {
  name: 'rx-simple',
  subscriptions () {
    // let stream$ = Rx.Observable.timer(1000, 1000)
    //               .map(x => x + 1)
    //               .take(10)
    // console.log('stream$', stream$)
    // let down$ = Rx.Observable.interval(1000)
    //             .map(x => 10 - x)
    //             .take(10)
    // let total$ = stream$.concat(down$)
    this.plus$ = Rx.Subject()
    this.plus$.subscribe(e => {
      console.log('plus', e)
    })
    // stream$.subscribe(e => {
    //   console.log('up', e)
    // })
    // total$.subscribe(e => {
    //   console.log('down', e)
    // })
    // socket$.next('hello')
    return {
      // socket$
    }
  },
  mounted () {
  }
}
</script>
