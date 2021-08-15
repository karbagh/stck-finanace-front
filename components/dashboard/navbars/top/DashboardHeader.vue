<template>
    <section class="dashboard-header">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-nav>
          <b-nav-item><b-button v-b-toggle.dashboard-sidebar class="btn-link text-white" variant="transparent"><BIconJustify /></b-button></b-nav-item>
        </b-navbar-nav>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item right>{{ $t('logout') }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
</template>

<script>
import { BIconJustify } from 'bootstrap-vue'
export default {
  name: 'DashboardHeader',
  components: {
    BIconJustify
  }
}
</script>

<style scoped>

</style>
