<template>
    <section class="order-now">
      <b-button @click="orderNow" variant="success" class="order-now-button">
        <b-icon-check-circle-fill variant="white"></b-icon-check-circle-fill>
        <span class="order-now-button-text"> {{ $t('order-now') }}</span>
      </b-button>
    </section>
</template>

<script>
import { BIconCheckCircleFill } from 'bootstrap-vue'
import {mapActions} from "vuex";

export default {
  name: 'OrderNow',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    BIconCheckCircleFill
  },
  methods: {
    ...mapActions('modules/cart', [
      'addToCart'
    ]),

    ...mapActions('modules/configs', [
      'loader'
    ]),

    async orderNow () {
      await this.loader(true)
      await this.addToCart({
        brand: this.product.brand,
        model: this.product.model,
        price: this.product.price,
        old_price: this.product.old_price,
        slug: this.product.slug,
        image: this.product.images[0] ?? null,
        quantity: 1
      })
      await this.$router.push({ path: '/order' })
      this.loader(true)
    }
  }
}
</script>

<style scoped>

</style>
