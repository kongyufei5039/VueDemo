<template>
  <div>
    <this-dialog :is-show-dialog="isShowCheckDialog" @close-dialog="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus('success')">
        支付成功
      </div>
      <div class="button" @click="checkStatus('error')">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show-dialog="isShowSuccessDialog" @close-dialog="toOrderList">
      购买成功！订单页详情<router-link :to="{path: '/orderList'}">请点这里</router-link>
    </this-dialog>
    <this-dialog :is-show-dialog="isShowFailDialog" @close-dialog="toOrderList">
      购买失败！订单页详情<router-link :to="{path: '/orderList'}">请点这里</router-link>
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog'
export default {
  components: {
    thisDialog: Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus (status) {
      this.$http.post('/api/checkOrder', {
        orderId: this.orderId
      })
      .then((res) => {
        if(status === 'success')
          this.isShowSuccessDialog = true
        if(status === 'error')
          this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
      .catch((err) => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    toOrderList () {
      this.$router.push({path: '/orderList'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 a {
   color: rgb(236, 17, 17);
 }
</style>
