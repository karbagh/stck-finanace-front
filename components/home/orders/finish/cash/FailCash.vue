<template>
  <section class="fail-cash-order">
    <FailIcon />
    <OrderFinishContent
     :title="$t('order.cash.fail.title')"
     :content="$t('order.cash.fail.content')"/>
  </section>
</template>

<script>
import FailIcon from '../icons/FailIcon'
import OrderFinishContent from '../contents/OrderFinishContent'
export default {
  name: 'FailCash',
  components: { OrderFinishContent, FailIcon }
}
</script>

<style scoped>

</style>
