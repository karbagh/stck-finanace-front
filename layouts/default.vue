<template>
  <section class="home-page" ref="homeSection">
    <div class="loader-logo" v-show="loader">
      <Logo  class="img-loader-logo"/>
    </div>
    <section class="home-content" v-show="!loader">
      <Header />
        <Nuxt />
      <CartList />
      <Footer />
    </section>
  </section>
</template>

<script>
import Header from '@/components/home/navbar/header/Header'
import Footer from '@/components/home/navbar/footer/Footer'
import CartList from '@/components/home/cart/modals/CartList'
import Logo from '@/components/home/images/Logo'

export default {
  components: {
    Logo,
    CartList,
    Footer,
    Header
  },
  data () {
    return {
      loader: true
    }
  },
  mounted () {
    this.$root.$on('loader', (status) => {
      this.loader = status
    })
  }
}
</script>
