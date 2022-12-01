<template>
  <div class="rotating-earth">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import 'echarts-gl'

// const ROOT_PATH = './'

export default {
  name: 'RotatingEarth',
  setup () {
    const options = ref({})
    const update = () => {
      options.value = {
        // globe: {
        //   baseTexture: require('@/assets/datav-gl-texture.jpg'),
        //   heightTexture: require('@/assets/datav-gl-texture.jpg'),
        //   displacementScale: 0.04,
        //   shading: 'realistic',
        //   environment: require('@/assets/star-bg.jpg'),

        // }
        globe: {
          baseTexture: require('@/assets/datav-gl-texture.jpg'),
          heightTexture: require('@/assets/datav-gl-texture.jpg'),
          displacementScale: 0.04,
          shading: 'realistic',
          environment: require('@/assets/star-bg.jpg'),
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              diffuseIntensity: 0.2
            }
          },
          viewControl: {
            autoRotateSpeed: 100
          }
        }
      }
    }
    onMounted(update)
    return {
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.rotating-earth {
  width: 100%;
  height: 100%;
}
</style>
