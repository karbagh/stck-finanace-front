<template>
  <section class="add-to-cart">
    <b-button variant="info" class="add-to-cart-button" @click="addProductToCart">
      <b-icon-cart-plus-fill variant="white"></b-icon-cart-plus-fill>
      <span class="add-to-cart-button-text"> {{ $t('add-to-cart') }}</span>
    </b-button>
  </section>
</template>

<script>
import {BIconCartPlusFill} from 'bootstrap-vue'
import {mapActions} from "vuex";

export default {
  name: 'AddToCart',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {},
  components: {
    BIconCartPlusFill
  },
  methods: {
    ...mapActions('modules/cart', [
      'addToCart'
    ]),

    async addProductToCart() {
      await this.addToCart({
        brand: this.product.brand,
        model: this.product.model,
        price: this.product.price,
        old_price: this.product.old_price,
        slug: this.product.slug,
        image: this.product.images[0] ?? null,
        quantity: 1
      })

      await this.$bvToast.toast(this.$t('cart.added.message'), {
        title: this.$t('cart.added.title', {model: this.product.model}),
        variant: 'success'
      })
    }
  },
}
</script>
