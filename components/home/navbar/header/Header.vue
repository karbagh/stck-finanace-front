<template>
  <section class="home-header">
    <b-navbar class="header-fixed-navbar" fixed="top" toggleable="xl" :type="navbarType" :variant="navbarVariant">
      <NuxtLink to="/">
        <b-navbar-brand>
          <Logo class="d-inline-block align-top header-logo" :alt="`${$config.productionName} Logo`"/>
          {{ $config.productionName }}
        </b-navbar-brand>
      </NuxtLink>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button v-b-modal.cart-list variant="white" class="position-relative">
            <BIconCartFill class="text-white" :variant="navbarIconVariant"/>
            <!--            <b-badge variant="danger" class="rounded-circle position-absolute">{{ $store.state.store.cart.products.length }}</b-badge>-->
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
  import {BIconCartFill} from 'bootstrap-vue'
  import Logo from '../../images/Logo'

  export default {
    data() {
      return {
        navbarType: 'light',
        navbarVariant: 'white',
        navbarIconVariant: 'secondary'
      }
    },
    components: {
      Logo,
      BIconCartFill
    },
    methods: {
      homeScrollChanges() {
        if (window.scrollY > 60) {
          this.navbarType = 'dark'
          this.navbarVariant = 'dark'
          this.navbarIconVariant = 'light'
        } else {
          this.navbarType = 'light'
          this.navbarVariant = 'white'
          this.navbarIconVariant = 'secondary'
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        this.homeScrollChanges()
      })
      // this.state.commit('banners/increment')
    }
  }
</script>
