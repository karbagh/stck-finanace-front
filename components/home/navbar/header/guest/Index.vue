<template>
  <section class="home-header">
    <b-navbar class="header-fixed-navbar" fixed="top" toggleable="xl">
      <NuxtLink to="/">
        <b-navbar-brand>
          <Logo class="d-inline-block align-top header-logo" :alt="`${$config.productionName} Logo`"/>
          {{ $config.productionName }}
        </b-navbar-brand>
      </NuxtLink>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <NuxtLink
              v-for="item in navbarMenuList"
              :to="item.href" class="top-header-item-link text-secondary">
              {{ item.title }}
            </NuxtLink>
          </b-nav-item>
          <b-button v-b-modal.cart-list variant="white" class="position-relative">
            <BIconCartFill class="text-white"/>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
import {BIconCartFill} from 'bootstrap-vue'
import Logo from '../../../images/Logo'

export default {
  data() {
    return {
      navbarMenuList: [

      ]
    }
  },
  components: {
    Logo,
    BIconCartFill
  },
  computed: {

  },
  methods: {
  },
  mounted() {
  }
}
</script>
