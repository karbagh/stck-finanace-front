<template>
  <section class="order-list">
    <b-card :title="$t('order.list')">
      321
    </b-card>
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'OrderList',
  components: {

  },
  computed: {
    ...mapGetters('modules/cart', [
      'products'
    ])
  }
}
</script>
