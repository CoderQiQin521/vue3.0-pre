import { reactive, onMounted, toRefs } from 'vue'

export default () => {
  const position = reactive({
    x: 0,
    y: 0,
  })

  const setPosition = (event) => {
    position.x = event.pageX
    position.y = event.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', setPosition)
  })

  return toRefs(position)
}
