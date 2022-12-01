<template>
  <div style="width: 100%; height: 100%;">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'JiangsuMapWarning',
  // setup () {
  //   const options = ref({})
  //   let timer = null

  //   const update = () => {
  //     fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
  //       .then(response => response.json())
  //       .then(data => {
  //         const center = []
  //         data.features.forEach(item => {
  //           if (item.properties) {
  //             center.push({
  //               key: item.properties.name,
  //               value: item.properties.center
  //             })
  //           }
  //         })
  //         echarts.registerMap('jiangsu', data)
  //         options.value = {
  //           visualMap: {
  //             show: true,
  //             max: 100,
  //             inRange: {
  //               color: ['#a5dcf4', '#006edd']
  //             }
  //           },
  //           geo: [{
  //             map: 'jiangsu',
  //             zoom: 1,
  //             roam: false, // 开启鼠标滚轮缩放
  //             scaleLimit: {
  //               min: 0,
  //               max: 3
  //             },
  //             itemStyle: {
  //               areaColor: '#013c62',
  //               shadowColor: '#013c62',
  //               shadowBlur: 20,
  //               shadowOffsetX: -5,
  //               shadowOffsetY: 15
  //             }
  //           }],
  //           series: [
  //             {
  //               type: 'map',
  //               mapType: 'jiangsu',
  //               zoom: 1,
  //               roam: false,
  //               label: {
  //                 show: true,
  //                 color: '#fff',
  //                 emphasis: {
  //                   color: '#fff',
  //                   show: true
  //                 }
  //               },
  //               itemStyle: {
  //                 normal: {
  //                   borderColor: '#2980b9',
  //                   borderWidth: 1,
  //                   areaColor: '#12235c'
  //                 }
  //               },
  //               emphasis: {
  //                 itemStyle: {
  //                   areaColor: '#fa8c16',
  //                   borderWidth: 0
  //                 }
  //               },
  //               // data: center.map(centerItem => {
  //               //   const value = Math.random() * 100 // 人口数（单位：万）
  //               //   return {
  //               //     name: centerItem.key,
  //               //     value
  //               //   }
  //               // })
  //               data: []
  //             },
  //             {
  //               type: 'effectScatter',
  //               // data: [{ value: center[0].value, city: center[0].key }],
  //               data: [],
  //               coordinateSystem: 'geo',
  //               symbolSize: 14,
  //               itemStyle: {
  //                 color: 'red'
  //               },
  //               label: {
  //                 normal: {
  //                   show: true,
  //                   position: 'top',
  //                   formatter: function (params) {
  //                     return `{title|${params.data.city}}\n{content|发生事件}`
  //                   },
  //                   backgroundColor: 'rgba(255, 174, 33, .8)',
  //                   padding: [0, 0],
  //                   borderRadius: 3,
  //                   lineHeight: 32,
  //                   color: '#f7fafb',
  //                   rich: {
  //                     title: {
  //                       padding: [0, 10, 0, 10],
  //                       color: '#fff'
  //                     },
  //                     content: {
  //                       padding: [0, 10, 0, 10],
  //                       color: 'red'
  //                     }
  //                   }
  //                 },
  //                 emphasis: {
  //                   show: true
  //                 }
  //               }
  //             },
  //             {
  //               type: 'effectScatter',
  //               // data: [{ value: center[0].value, city: center[0].key }],
  //               data: [],
  //               coordinateSystem: 'geo',
  //               symbolSize: 14,
  //               itemStyle: {
  //                 color: '#e93f42'
  //               },
  //               label: {
  //                 normal: {
  //                   show: true,
  //                   position: 'top',
  //                   formatter: function (params) {
  //                     return `{title|${params.data.city}}\n{content|发生事件}`
  //                   },
  //                   backgroundColor: 'rgba(233, 63, 66, .8)',
  //                   padding: [0, 0],
  //                   borderRadius: 3,
  //                   lineHeight: 32,
  //                   color: '#fff',
  //                   rich: {
  //                     title: {
  //                       padding: [0, 10, 0, 10],
  //                       color: '#fff'
  //                     },
  //                     content: {
  //                       padding: [0, 10, 0, 10],
  //                       color: '#fff'
  //                     }
  //                   }
  //                 }
  //               }
  //             },
  //             {
  //               type: 'effectScatter',
  //               data: [],
  //               // data: [],
  //               coordinateSystem: 'geo',
  //               symbolSize: 14,
  //               itemStyle: {
  //                 color: '#08baec'
  //               },
  //               label: {
  //                 normal: {
  //                   show: true,
  //                   position: 'top',
  //                   formatter: function (params) {
  //                     return `{title|${params.data.city}}\n{content|发生事件}`
  //                   },
  //                   backgroundColor: 'rgba(8, 186, 236, .9)',
  //                   padding: [0, 0],
  //                   borderRadius: 3,
  //                   lineHeight: 32,
  //                   color: '#fff',
  //                   rich: {
  //                     title: {
  //                       padding: [0, 10, 0, 10],
  //                       color: '#fff'
  //                     },
  //                     content: {
  //                       padding: [0, 10, 0, 10],
  //                       color: '#fff'
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           ]
  //         }

  //         // 测试，随机展示事件信息
  //         timer = setInterval(() => {
  //           const _options = cloneDeep(options.value)
  //           // 初始化数据
  //           for (let i = 0; i < 4; i++) {
  //             _options.series[i].data = []
  //           }
  //           // 生成城市随机数
  //           const cityLength = center.length
  //           const cityIndex = Math.floor(Math.random() * cityLength)
  //           const eventIndex = Math.floor(Math.random() * 3) + 1
  //           _options.series[eventIndex].data = [{
  //             city: center[cityIndex].key,
  //             value: center[cityIndex].value
  //           }]
  //           options.value = _options
  //         }, 2000)
  //       })
  //     // options.value = {}
  //   }

  //   onMounted(update)

  //   onUnmounted(() => timer && clearInterval(timer))
  //   return {
  //     options
  //   }
  // }
  setup () {
    const options = ref({})
    const update = () => {
    /* eslint-disable */
    fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
      .then(response => response.json())
      .then(data => {
        var center = {
          '南京市': [118.767413, 32.041544],
          '无锡市': [120.301663, 31.574729],
          '徐州市': [117.184811, 34.261792],
          '常州市': [119.946973, 31.772752],
          '苏州市': [120.619585, 31.299379],
          '南通市': [120.864608, 32.016212],
          '连云港市': [119.178821, 34.600018],
          '淮安市': [119.021265, 33.597506],
          '盐城市': [120.139998, 33.377631],
          '扬州市': [119.421003, 32.393159],
          '镇江市': [119.452753, 32.204402],
          '泰州市': [119.915176, 32.484882],
          '宿迁市': [118.275162, 33.963008]
        }
        echarts.registerMap('js', data)
        options.value = {
          visualMap: {
            show: true,
            max: 100,
            seriesIndex: [3],
            inRange: {
              color: ['#A5DCF4', '#006edd']
            }
          },
          geo: [{
            map: 'js',
            roam: false, //是否允许缩放
            zoom: 1.1, //默认显示级别
            scaleLimit: {
              min: 0,
              max: 3
            }, //缩放级别
            itemStyle: {
              normal: {
                areaColor: '#013C62',
                shadowColor: '#013C62',
                shadowBlur: 20,
                shadowOffsetX: -5,
                shadowOffsetY: 15
              }
            },
            tooltip: {
              show: false
            }
          }],
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              z: 5,
              data: [],
              symbolSize: 14,
              label: {
                normal: {
                  show: true,
                  formatter: function (params) {
                    return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                  },
                  position: 'top',
                  backgroundColor: 'rgba(254,174,33,.8)',
                  padding: [0, 0],
                  borderRadius: 3,
                  lineHeight: 32,
                  color: '#f7fafb',
                  rich: {
                    fline: {
                      padding: [0, 10, 10, 10],
                      color: '#fff'
                    },
                    tline: {
                      padding: [10, 10, 0, 10],
                      color: '#fff'
                    }
                  }
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                color: '#feae21'
              }
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              z: 5,
              data: [],
              symbolSize: 14,
              label: {
                normal: {
                  show: true,
                  formatter: function (params) {
                    return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                  },
                  position: 'top',
                  backgroundColor: 'rgba(233,63,66,.9)',
                  padding: [0, 0],
                  borderRadius: 3,
                  lineHeight: 32,
                  color: '#ffffff',
                  rich: {
                    fline: {
                      padding: [0, 10, 10, 10],
                      color: '#ffffff'
                    },
                    tline: {
                      padding: [10, 10, 0, 10],
                      color: '#ffffff'
                    }
                  }
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                color: '#e93f42'
              }
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              z: 5,
              data: [],
              symbolSize: 14,
              label: {
                normal: {
                  show: true,
                  formatter: function (params) {
                    return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                  },
                  position: 'top',
                  backgroundColor: 'rgba(8,186,236,.9)',
                  padding: [0, 0],
                  borderRadius: 3,
                  lineHeight: 32,
                  color: '#ffffff',
                  rich: {
                    fline: {
                      padding: [0, 10, 10, 10],
                      color: '#ffffff'
                    },
                    tline: {
                      padding: [10, 10, 0, 10],
                      color: '#ffffff'
                    }
                  }
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                color: '#08baec'
              }
            },
            {
              type: 'map',
              mapType: 'js',
              geoIndex: -1,
              zoom: 1.1, //默认显示级别
              label: {
                show: true,
                color: '#ffffff',
                emphasis: {
                  color: 'white',
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#2980b9',
                  borderWidth: 1,
                  areaColor: '#12235c'
                },
                emphasis: {
                  areaColor: '#FA8C16',
                  borderWidth: 0,
                  color: 'green'
                }
              },
              data: Object.keys(center).map(name => {
                return {
                  name: name,
                  value: Math.random() * 100
                }
              })
            }
          ]
        }

        var timer = setInterval(() => {
          const _options = cloneDeep(options.value)
          for (var i = 0; i < 3; i++) {
            _options.series[i].data = []
          }
          var cityIndex = Math.floor(Math.random() * 13)
          var runidx = Math.floor(Math.random() * 3)
          var coordCity = Object.keys(center)[cityIndex]
          var coord = center[coordCity]
          _options.series[runidx].data = [{
            city: coordCity,
            value: coord
          }]
          options.value = _options
        }, 2000)
      })
  }
  onMounted(() => {
    update()
  })

  return {
    options
  }
}
}
</script>

<style>

</style>
