<template>
    <section class="succeed-cash-order">
      <SucceedIcon />
      <OrderFinishContent
      :title="$t('order.cash.succeed.title')"
      :content="$t('order.cash.succeed.content')"/>
    </section>
</template>

<script>
import SucceedIcon from '../icons/SucceedIcon'
import OrderFinishContent from '../contents/OrderFinishContent'
export default {
  name: 'SucceedCash',
  components: { OrderFinishContent, SucceedIcon },
  created () {

  }
}
</script>

<style scoped>

</style>
