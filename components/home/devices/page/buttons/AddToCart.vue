<template>
  <section class="add-to-cart">
    <b-button variant="info" class="add-to-cart-button" @click="addToCart">
      <b-icon-cart-plus-fill variant="white"></b-icon-cart-plus-fill>
      <span class="add-to-cart-button-text"> {{ $t('add-to-cart') }}</span>
    </b-button>
  </section>
</template>

<script>
import { BIconCartPlusFill } from 'bootstrap-vue'
import setters from '../../../../../local-storage/setters'
import getters from '../../../../../local-storage/getters'

export default {
  name: 'AddToCart',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
  },
  components: {
    BIconCartPlusFill
  },
  methods: {
    async addProduct () {
      console.log(this.$store)
      await this.$store.commit('addToCart', {
        brand: this.product.brand,
        model: this.product.model,
        price: this.product.price,
        old_price: this.product.old_price,
        slug: this.product.slug,
        image: this.product.images[0] ?? null,
        quantity: 1
      })

      await this.$bvToast.toast(this.$t('cart.added.message'), {
        title: this.$t('cart.added.title', { model: this.product.model }),
        variant: 'success'
      })
    },
    addToCart () {
      this.$root.$emit('loader', true)
      try {
        this.addProduct()
        this.$root.$emit('loader', false)
      } catch (e) {
        this.$root.$emit('loader', false)

        this.$bvToast.toast(e.message, {
          title: e.title,
          variant: 'danger'
        })
      }
    }
  },
  beforeDestroy () {
    setters.cart.add(this.$store.state.cart)
  },
  created () {
    this.$store.commit('fillCart', getters.cart.get())
    getters.cart.remove()
  }
}
</script>
