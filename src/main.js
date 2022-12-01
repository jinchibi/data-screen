import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation'
import Loading from './components/Loading'
import FlyBox from './components/FlyBox'
import Container from './components/Container'
import VueCountTo from './components/VueCountTo/index.js'
import VueEcharts from './components/VueEcharts/index'
import BaseScrollList from './components/BaseScrollList/index.js'
import Echarts from 'echarts'

createApp(App)
  .use(store)
  .use(router)
  .use(Icon)
  .use(Loading)
  .use(SvgAnimation)
  .use(FlyBox)
  .use(Container)
  // .component('CountTo', VueCountTo)
  .use(VueCountTo)
  .use(VueEcharts)
  .use(Echarts)
  .use(BaseScrollList)
  .mount('#app')
