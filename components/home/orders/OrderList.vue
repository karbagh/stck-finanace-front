<template>
  <section class="order-list">
    <b-card :title="$t('order.list')">
      <CartListCard
        :cartList="products"/>
    </b-card>
  </section>
</template>

<script>
import CartListCard from '../cart/cards/CartListCard'
import {mapGetters} from "vuex";

export default {
  name: 'OrderList',
  components: {
    CartListCard
  },
  computed: {
    ...mapGetters('modules/cart', [
      'products'
    ])
  }
}
</script>
