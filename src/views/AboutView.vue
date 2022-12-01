<template>
  <div style="width: 100%; height: 100%;">
    <!-- <gdp-timeline-chart /> -->
    <!-- <JiangsuMapWarning /> -->
    <!-- <RotatingEarth /> -->
    <OrderMap />
  </div>
</template>

<script>
// import GdpTimelineChart from '../components/GdpTimelineChart/index.vue'
// import JiangsuMapWarning from '../components/JiangsuMapWarning/index.vue'
// import RotatingEarth from '../components/RotatingEarth/index.vue'
import OrderMap from '../components/OrderMap/index.vue'

export default {
  name: 'about',
  components: {
    // GdpTimelineChart,
    // JiangsuMapWarning
    // RotatingEarth
    OrderMap
  }
}
</script>

<style>

</style>
