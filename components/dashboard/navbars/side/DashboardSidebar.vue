<template>
    <section class="dashboard-sidebar">
      <b-sidebar id="dashboard-sidebar" :title="$t('sidebar.menu')" shadow backdrop backdrop-variant="dark">
        <div class="px-3 py-2">
          <b-list-group flush>
            <b-list-group-item :to="{name:'dashboard.index'}" :active="$route.name === 'dashboard.index'">
              <BIconKanbanFill /> <span>{{ $t('dashboard') }}</span>
            </b-list-group-item>
            <b-list-group-item :to="{name:'dashboard.categories'}" :active="$route.name === 'dashboard.categories'">
              <BIconTagFill /> <span>{{ $t('categories') }}</span>
            </b-list-group-item>
            <b-list-group-item  :to="{name:'dashboard.devices'}" :active="$route.name === 'dashboard.devices'">
              <BIconFileEaselFill /> <span>{{ $t('devices') }}</span>
            </b-list-group-item>
            <b-list-group-item  :to="{name:'dashboard.contacts'}" :active="$route.name === 'dashboard.contacts'">
              <BIconCreditCard2FrontFill /> <span>{{ $t('contacts') }}</span>
            </b-list-group-item>
            <b-list-group-item  :to="{name:'dashboard.pages'}" :active="$route.name === 'dashboard.pages'">
              <BIconFileTextFill /> <span>{{ $t('pages') }}</span>
            </b-list-group-item>
            <b-list-group-item  :to="{name:'dashboard.banners'}" :active="$route.name === 'dashboard.banners'">
              <BIconBadgeAdFill /> <span>{{ $t('banners') }}</span>
            </b-list-group-item>
            <b-list-group-item  :to="{name:'dashboard.orders'}" :active="$route.name === 'dashboard.orders'">
              <BIconCartFill /> <span>{{ $t('orders') }}</span>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-sidebar>
    </section>
</template>

<script>
import { BIconTagFill, BIconKanbanFill, BIconFileEaselFill, BIconCreditCard2FrontFill, BIconFileTextFill, BIconBadgeAdFill, BIconCartFill } from 'bootstrap-vue'
export default {
  name: 'DashboardSidebar',
  components: {
    BIconTagFill,
    BIconKanbanFill,
    BIconFileEaselFill,
    BIconCreditCard2FrontFill,
    BIconFileTextFill,
    BIconBadgeAdFill,
    BIconCartFill
  }
}
</script>

<style scoped>

</style>
