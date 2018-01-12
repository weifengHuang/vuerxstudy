<template lang="html">
  <div class="">
    <div v-for="item in elevators">
      <button v-stream:click="{subject: clickUp$, data: item}">↑</button>
      <button v-stream:click="{subject: clickDown$, data: item}">↓</button>
      <span :class="{current: clickToElevatorUp$ === item}">{{item}}</span>
    </div>
    <div class="">
      {{this.currentIndex}}
    </div>
  </div>
</template>

<script>
 /* eslint-disable */
 // 电梯到了之后，弹出选择楼层的选项
 // 电梯增加人数控制 进去以后按电梯，超过30秒无响应，回到一楼
import Rx from 'rxjs/Rx'
export default {
  name: 'te',
  data () {
    return {
      elevators: [5,4,3,2,1],
      currentIndex: 1
    }
  },
  domStreams: ['clickUp$', 'clickDown$'],
  subscriptions () {
    let createUpElevator = (target, current=this.currentIndex) => {
      console.log('target', target, current)
      let upElevator$ = Rx.Observable.interval(1000)
        .map(e => e + current)
        .takeWhile(index => index <= target )
      return upElevator$
    }
    let createDownElevator = (target, current=this.currentIndex) => {
      let downElevator$ = Rx.Observable.interval(1000)
        .map(e => current - e)
        .takeWhile(index => index >= target )
      return downElevator$
    }
    let createUpAndDownElevator = (index) => {
      let up$ = createUpElevator(index)
      let down$ = createDownElevator(index)
      return up$.concat(down$)
    }
    let clickToElevatorUp$ = this.clickUp$
      .pluck('data')
      .switchMap(target => {
        if (target - this.currentIndex > 0) {
          return createUpElevator(target)
        } else {
          return createDownElevator(target)
        }
      })
      .do(e => {
        console.log('up', e)
        this.currentIndex = e
      })
    let clickToElevatorDown$ = this.clickDown$
      .pluck('data')
      .switchMap(target => {
        if (target - this.currentIndex > 0) {
          return createUpElevator(target)
        } else {
          return createDownElevator(target)
        }
      })
      .do(e => {
        console.log('down', e)
        this.currentIndex = e
      })
    return {
      clickToElevatorUp$,
      clickToElevatorDown$
    }
  },
  mounted () {
    // console.log('ob', this.$observables)
  }
}
</script>

<style lang="css">
.current {
  background-color: red;
}
</style>
