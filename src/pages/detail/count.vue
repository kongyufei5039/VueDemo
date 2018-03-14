<template>
  <div>
      <label>hello count </label>
      <v-selection :selections="districts"></v-selection>
  </div>
</template>

<script>
import VSelection from '../../components/base/selection'
export default {
  components: {
    VSelection,
  },
  data () {
      return {
         districts: [
          {
            label: '北京',
            value: 0
          },
          {
            label: '上海',
            value: 1
          },
          {
            label: '广州',
            value: 2
          },
          {
            label: '天津',
            value: 3
          },
          {
            label: '武汉',
            value: 4
          },
          {
            label: '重庆',
            value: 5
          },
        ]
      }
  }
}
</script>

<style>

</style>


