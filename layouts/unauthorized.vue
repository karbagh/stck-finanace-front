<template>
  <section class="home-page" ref="homeSection">
    <div class="loader-logo" v-show="loader">
      <Logo  class="img-loader-logo"/>
    </div>
    <section class="home-content" v-show="!loader">
      <GuestHeader />
        <Nuxt />
    </section>
  </section>
</template>

<script>
import GuestHeader from '@/components/home/navbar/header/guest/Index'
import Logo from '@/components/home/images/Logo'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    Logo,
    GuestHeader
  },
  computed: {
    ...mapGetters('modules/configs', [
      'loader'
    ])
  },
}
</script>
