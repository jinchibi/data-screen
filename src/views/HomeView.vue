<template>
  <div class="home">

    <Loading v-if="loading">
      <div class="loading-text">数据大屏加载中</div>
    </Loading>
    <Container v-else :options="{ width: 3840, height: 2160 }">
      <div class="header">
        <top-header/>
      </div>
      <div class="separator" />
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              :today-user="todayUser"
              :growthLastDay="growthLastDay"
              :growthLastMonth="growthLastMonth"
            />
          </div>
          <div class="left2">
            <average-age
              :data="ageData"
              :avg-age="averageAge"
            />
          </div>
          <div class="left3">
            <total-device
              :data="deviceData"
            />
          </div>
          <div class="left4">
            <TotalGender :data="genderData"/>
          </div>
          <div class="left5">
            <TotalRider :data="riderData"/>
          </div>
          <div class="left6">
            <HotCategory :data="hotCategoryData" />
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData"/>
          </div>
          <div class="right-top2">
            <TransformCategory
              :data="['All', '北京', '上海', '广州', '深圳', '杭州', '南京']"
            />
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
                <!-- <gdp-timeline-chart /> -->
                <!-- <jiangsu-map-warning /> -->
                <order-map />
              </div>
              <div class="right-left2">
                <transform-category
                 :data="['订单量', '销售额', '用户数', '退单量']"
                 :color="['rgb(178, 209, 126)', 'rgb(116, 166, 49)']"
                />
              </div>
              <div class="right-left3">
                <fly-box>
                  <RealTimeOrder :data="realTimeOrderData" />
                </fly-box>
              </div>
              <div class="right-left4">
                <ScheduleView :data="scheduleViewData" />
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <SalesList :data="salesListData" />
              </div>
              <div class="right-right2">
                <SalesRank :data="salesRankData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from 'vue'
import useScreenData from '../hooks/useScreenData'
import TopHeader from '../components/TopHeader/index.vue'
import TotalUser from '../components/TotalUser/index.vue'
import AverageAge from '../components/AverageAge/index.vue'
import TotalDevice from '../components/TotalDevice/index.vue'
import TotalGender from '../components/TotalGender/index.vue'
import TotalRider from '../components/TotalRider/index.vue'
import HotCategory from '../components/HotCategory/index.vue'
import CenterHeader from '../components/CenterHeader/index.vue'
import TransformCategory from '../components/TransformCategory/index.vue'
import SalesList from '../components/SalesList/index.vue'
// import GdpTimelineChart from '../components/GdpTimelineChart/index.vue'
// import JiangsuMapWarning from '../components/JiangsuMapWarning/index.vue'
import OrderMap from '../components/OrderMap/index.vue'
import RealTimeOrder from '../components/RealTimeOrder/index.vue'
import ScheduleView from '../components/ScheduleView/index.vue'
import SalesRank from '../components/SalesRank/index.vue'


export default {
  name: 'HomeView',
  components: {
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    TransformCategory,
    SalesList,
    // GdpTimelineChart,
    // JiangsuMapWarning,
    OrderMap,
    RealTimeOrder,
    ScheduleView,
    SalesRank
  },
  setup () {
    const loading = ref(true)
    // const a = 1
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })

    const screenData = useScreenData()

    return {
      loading,
      ...screenData
      // options: {
      //   xAxis: {
      //     data: ['a', 'b', 'c', 'd']
      //   },
      //   yAxis: {},
      //   series: [{
      //     name: 'sales',
      //     type: 'bar',
      //     data: [10, 13, 20, 25]
      //   }]
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgb(29, 29, 29);
    font-size: 48px;
    color: #fff;
    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      .header {
        width: 100%;
        height: 167px;
      }
      .separator {
        width: 100%;
        height: 10px;
        background: rgb(92, 88, 89);
      }
      .center {
        width: 100%;
        display: flex;
        flex: 1;
        .left {
          flex: 0 0 860px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 860px;
          height: 100%;
          padding-bottom: 20px;
          box-sizing: border-box;
          .left1 {
            height: 300px;
          }
          .left2 {
            height: 320px;
          }
          .left3 {
            height: 230px;
          }
          .left4 {
            height: 280px;
          }
          .left5 {
            height: 360px;
          }
          .left6 {
            height: 360px;
          }
        }
        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          margin-right: 20px;
          .right-top1 {
            width: 100%;
            height: 206px;
          }
          .right-top2 {
            width: 100%;
            height: 48px;
            margin: 10px 0;
          }
          .right-bottom {
            flex: 1;
            display: flex;
            padding-bottom: 20px;
            .right-left {
              flex: 0 0 1917px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 1917px;
              .right-left1 {
                height: 999px;
              }
              .right-left2 {
                height: 80px;
              }
              .right-left3 {
                height: 350px;
              }
              .right-left4 {
                height: 220px;
              }
            }
            .right-right {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-left: 10px;
              .right-right1 {
                width: 100%;
                height: 999px;
              }
              .right-right2 {
                width: 100%;
                flex: 1;
                margin-top: 20px;
              }
            }
          }
        }
      }
    }
  }
  .loading-text {
    margin-top: 10px;
    font-size: 20px;
  }
</style>
