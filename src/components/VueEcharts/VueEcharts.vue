<template>
  <div :class="[className, 'e']"></div>
</template>

<script>
import { watch, onMounted, nextTick } from 'vue'
import * as Echarts from 'echarts'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'VueEcharts',
  props: {
    options: Object,
    theme: [String, Object]
  },
  setup (ctx) {
    let dom
    let chart
    const className = `echarts${uuidv4()}`
    const initChart = () => {
      nextTick(() => {
        if (!chart) {
          dom = document.getElementsByClassName(className)[0]
          chart = Echarts.init(dom, ctx.theme)
        }
        if (ctx.options) {
          chart.setOption(ctx.options)
        }
      })
    }
    onMounted(() => {
      initChart()
    })
    // chart.setOption(ctx.options)
    watch(() => ctx.options, () => {
      // console.log('change', Echarts.getMap('jiangsu'))
      // new add
      nextTick(() => {
        // console.log('change')
        // alert('change')
        initChart()
        // chart.setOption(ctx.options)
      })
    })

    return {
      className
    }
  }
}
</script>

<style>
  .e {
    width: 100%;
    height: 100%;
  }
</style>
