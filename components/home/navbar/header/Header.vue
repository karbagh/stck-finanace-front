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
        <b-navbar-nav>
          <b-nav-item>
            <NuxtLink
              v-for="item in navbarMenuList"
              :to="item.href"
              class="mx-3 top-header-item-link text-secondary">
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
import Logo from '../../images/Logo'

export default {
  components: {
    Logo,
    BIconCartFill
  },
  data() {
    return {
      navbarMenuList: [
        {
          href: '/corporations',
          title: this.$t('entities.corporations'),
          name: 'corporations',
        }, {
          href: '/stocks',
          title: this.$t('entities.stocks'),
          name: 'stocks',
        }, {
          href: '/stocks/create',
          title: this.$t('actions.create', {item: this.$t('entities.stocks')}),
          name: 'stocks.create',
        }, {
          href: '/stocks/update',
          title: this.$t('actions.update', {item: this.$t('entities.stocks')}),
          name: 'stocks.update',
        }, {
          href: '/clients',
          title: this.$t('entities.clients'),
          name: 'clients',
        },{
          href: '/clients/create',
          title: this.$t('actions.create', {item: this.$t('entities.clients')}),
          name: 'clients.create',
        }, {
          href: '/clients/stock/purchase',
          title: this.$t('actions.purchase', {item: this.$t('entities.stocks')}),
          name: 'clients.purchase',
        }, {
          href: '/clients/stock/sell',
          title: this.$t('actions.sell', {item: this.$t('entities.stocks')}),
          name: 'clients.sell',
        },
      ]
    }
  },
}
</script>
