<template>
  <section class="home-body">
    <SimpleSlider
      :show_blank="true"
      :slides="banners"
      :configs="sliderConfigs"/>
    <CategoryList :categories="categories"/>
    <DeviceList
      v-for="item in collection"
      v-bind:key="item.type"
      :collection="item"/>
  </section>
</template>

<script>
import SimpleSlider from '@/components/home/banner/carousel/SimpleSlider'
import CategoryList from '@/components/home/categories/CategoryList'
import DeviceList from '@/components/home/devices/DeviceList'
import { mapGetters } from 'vuex'

export default {
  components: {
    DeviceList,
    CategoryList,
    SimpleSlider
  },
  data() {
    return {
      sliderConfigs: {
        interval: 4000
      }
    }
  },
  async asyncData({store, $config}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/banners/list', $config.apiUrl)
    await store.dispatch('modules/categories/list', $config.apiUrl)
    await store.dispatch('modules/home/collection', $config.apiUrl)
    store.dispatch('modules/configs/loader', false)
  },
  computed: {
    ...mapGetters('modules/banners', {
      banners: 'getBanners',
    }),

    ...mapGetters('modules/categories', {
      categories: 'getCategories',
    }),

    ...mapGetters('modules/home', {
      collection: 'getCollection',
    }),
  }
}
</script>
