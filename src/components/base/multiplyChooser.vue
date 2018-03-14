<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li
          v-for="(item, index) in selections"
          @click="toggleSelection(index)"
          :title="item.label"
          :class="{active: checkActive(index)}"
          >{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data () {
    return {
      curIndexes: [0]
    }
  },
  methods: {
    toggleSelection (index) {
      let curIndex = this.curIndexes.indexOf(index)
      if ( curIndex === -1) {
        this.curIndexes.push(index)  
      }else {
        this.curIndexes.splice(curIndex, 1)
      }
      let curObjArray = this.curIndexes.map(idx => {
        return this.selections[idx]
      })
      this.$emit('on-change', curObjArray)
    },
    checkActive (index) {
      return this.curIndexes.indexOf(index) !== -1
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
