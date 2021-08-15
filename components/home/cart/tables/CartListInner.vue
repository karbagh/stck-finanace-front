<template>
  <section class="cart-list-inner">
    <b-list-group-item>
      <b-col>
        <b-row>
          <b-col class="item-brand">{{ item.brand }}</b-col>
          <b-col class="item-count">{{ item.quantity }}</b-col>
          <b-col class="item-price">{{ item.price }} <AMD/></b-col>
        </b-row>
      </b-col>
    </b-list-group-item>
  </section>
</template>

<script>
import AMD from '../../content/symbols/curencies/AMD'
export default {
  name: 'CartListInner',
  components: { AMD },
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>
