<template>
  <div>
      <label>hello publish</label>
      <count :min="min" :max="max"></count>
      <m-chooser :selections="versionList"></m-chooser>
  </div>
</template>

<script>
import MChooser from '../../components/base/multiplyChooser'
import Count from '../../components/base/counter'
export default {
  components: {
    MChooser,
    Count
  },
  data () {
      return {
        max: 100,
        min: 0,
        versionList: [
          {
            label: '初级版',
            value: 0
          },
          {
            label: '中级版',
            value: 1
          },
          {
            label: '高级版',
            value: 2
          },
          {
            label: '专家版',
            value: 3
          }
        ]
      }
  }
}
</script>

<style>

</style>


