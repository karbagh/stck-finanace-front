<template>
  <section class="cart-list-modal">
    <b-modal id="cart-list"
             :cancel-title="$t('cart.list.close')"
             :ok-title="$t('cart.list.order')"
             :title="$t('cart.list.title')">
      <CartListCard
        :cartList="products"/>
    </b-modal>
  </section>
</template>

<script>
import CartListCard from '../cards/CartListCard'
import {mapGetters} from "vuex";

export default {
  name: 'CartList',
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
