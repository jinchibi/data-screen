import { ref, onMounted } from 'vue'

export default function userScreen (id) {
  const width = ref(0)
  const height = ref(0)
  let dom

  onMounted(() => {
    dom = document.getElementById(id)
    width.value = dom.clientWidth
    height.value = dom.clientHeight
    console.log(width.value, height.value)
  })

  return {
    width,
    height
  }
}
