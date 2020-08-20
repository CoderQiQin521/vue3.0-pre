<template>
  {{x}}={{y}}
  <app-bar text="hello vue3"></app-bar>
  max:{{count}}-{{offset}}
  <ul>
    <li v-for="(item,index) in arr" :key="index">{{item}}</li>
  </ul>
  <ul>
    <li v-for="item in dataList" :key="item.id">{{item.title}}</li>
  </ul>
  <button @click="increment">add</button>
  <br />
  <p></p>
  <br />
  <div>
    <img src="./code.png" alt />
  </div>
  <div>
    <img src="./code1.png" alt />
  </div>
</template> 

<script>
import AppBar from '../components/AppBar'
import { reactive, computed, toRefs, onMounted } from 'vue'
import Postion from './page'
import axios from 'axios'

export default {
  components: {
    AppBar
  },
  setup() {
    console.log('setup')
    const event = reactive({
      count: 4,
      arr: ['js','go','dart'],
      offset: computed(() => event.count - event.arr.length),
      dataList: []
    })

    onMounted(async () => {
      let res = await axios.get('https://www.fastmock.site/mock/09d86ed8a861337ae7da96bbb47bc39e/shoppage/get_list')
      console.log('res: ', res);
      event.dataList = res.data.data.list
    })

    const {x,y} = Postion()

    function increment() {
      event.count++
    }

    return {...toRefs(event), increment,x,y}
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
}
</style>