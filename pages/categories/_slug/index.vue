<template>
  <section class="home-category">
    <b-container class="my-4" fluid="fluid">
      <h1 class="text-center">{{ category.name }} {{ $t('devices') }}</h1>
      <DeviceListWithFilters :devicesCount="category.devicesCount"
                             :brands="category.brands"
                             :devices="category.devices.data"/>
    </b-container>
  </section>
</template>

<script>
import DeviceListWithFilters from '@/components/home/devices/DeviceListWithFilters'
import {mapActions, mapGetters} from 'vuex'

export default {
  async asyncData({params, store, $config, query}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/categories/categoryWithDevices', {
      apiUrl: $config.apiUrl,
      slug: params.slug,
      query: query
    })
    store.dispatch('modules/configs/loader', false)
  },
  data() {
    return {
      dynamicFiltersTypes: {
        brands: []
      },
    }
  },
  components: {
    DeviceListWithFilters
  },
  computed: {
    ...mapGetters('modules/categories', {
      category: 'getCategoryWithDevices'
    }),
  },
  methods: {
    ...mapActions('modules/categories', [
      'categoryWithDevices'
    ]),
  },
  created() {
    this.$root.$on('filter', async (filters) => {
      await this.categoryWithDevices({
        apiUrl: this.$config.apiUrl,
        slug: this.category.slug,
        query: filters
      })

      await this.$router.push({path: this.$route.path, query: filters})
    })
  }
}
</script>
