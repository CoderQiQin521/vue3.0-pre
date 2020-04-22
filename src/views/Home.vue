<template>
  <div class="home">
    <div>{{state.count}}</div>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      count: 0
    });

    function add() {
      state.count++;
    }
    return { state, add };
  }
};
</script>
