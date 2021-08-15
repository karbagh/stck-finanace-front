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
    async addToCart () {
      await this.$store.commit('addToCart', {
        brand: this.product.brand,
        model: this.product.model,
        price: this.product.price,
        old_price: this.product.old_price,
        slug: this.product.slug,
        image: this.product.images[0] ?? null,
        quantity: 1
      })
    },
    async orderNow () {
      this.$root.$emit('loader', true)
      await this.addToCart()
      await this.$router.push({ name: 'home.order' })
      this.$root.$emit('loader', false)
    }
  }
}
</script>

<style scoped>

</style>
