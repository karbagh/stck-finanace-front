<template>
  <section class="home-body">
    <SimpleSlider
      :show_blank="true"
      :slides="getBanners"
      :configs="sliderConfigs"/>
    <CategoryList :categories="getCategories"/>
    <DeviceList
      v-for="collection in getCollection"
      v-bind:key="collection.type"
      :collection="collection"/>
  </section>
</template>

<script>
import SimpleSlider from '@/components/home/banner/carousel/SimpleSlider'
import CategoryList from '@/components/home/categories/CategoryList'
import DeviceList from '@/components/home/devices/DeviceList'
import { mapGetters, mapActions } from 'vuex'

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
    actions: {

    },
    computed: {
      ...mapGetters('modules/banners', [
          'getBanners',
      ]),

      ...mapGetters('modules/categories', [
          'getCategories',
      ]),

      ...mapGetters('modules/home', [
          'getCollection',
      ]),
    },
    methods: {
      ...mapActions('modules/banners', {
          getBannersList: 'list'
      }),
      ...mapActions('modules/categories', {
          getCategoriesList: 'list'
      }),
      ...mapActions('modules/home', {
          getCollectionList: 'collection'
      }),
      async makeRequests() {
        await this.getBannersList(this.$config.apiUrl)
        await this.getCategoriesList(this.$config.apiUrl)
        await this.getCollectionList(this.$config.apiUrl)
        this.$root.$emit('loader', false)
      },
    },
    created() {
      this.$root.$emit('loader', true)
      this.makeRequests()
    }
  }
</script>
