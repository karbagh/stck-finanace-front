<template>
  <section class="order-list">
    <b-card :title="$t('order.list')">
<!--      <CartListCard-->
<!--      :cartList="$store.state.cart.devices"/>-->
    </b-card>
  </section>
</template>

<script>
import CartListCard from '../cart/cards/CartListCard'
export default {
  name: 'OrderList',
  components: { CartListCard },
  data () {
    return {}
  }
}
</script>
