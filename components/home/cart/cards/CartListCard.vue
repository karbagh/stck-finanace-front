<template>
    <section class="cart-list-card">
      <b-list-group>
        <CartListHeader />
        <CartListInner
        :item="item"
        v-bind:key="index"
        v-for="(item,index) in cartList"/>
      </b-list-group>
    </section>
</template>

<script>
import CartListHeader from '../tables/CartListHeader'
import CartListInner from '../tables/CartListInner'

export default {
  name: 'CartListCard',
  props: {
    cartList: Array
  },
  components: { CartListInner, CartListHeader }
}
</script>
