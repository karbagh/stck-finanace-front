<template>
  <section class="home-page" ref="homeSection">
    <div class="loader-logo" v-show="loader">
      <Logo  class="img-loader-logo"/>
    </div>
    <section class="home-content" v-show="!loader">
      <Header />
        <Nuxt />
    </section>
  </section>
</template>

<script>
import Header from '@/components/home/navbar/header/Header'
import Logo from '@/components/home/images/Logo'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    Logo,
    Header
  },
  computed: {
    ...mapGetters('modules/configs', [
      'loader'
    ])
  }
}
</script>
