<template>
  <div class="app-bar">
    AppBar组件
    <div class="page">{{text}}</div>
  </div>
</template>
<script>
import {props} from 'vue'
export default {
  props: {
    text: String
  },
  setup(props,ctx) {
    console.log('props: ', props);
    console.log(props.text);
    console.log('ctx: ', ctx);
  }
}
</script>

<style lang="less">
.app-bar {
  background-color: #ddd;
  border: 1px solid #ddd;
}
</style>
