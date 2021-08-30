<template>
  <section class="home-categories">
    <b-container class="my-4" fluid="fluid">
      <h1 class="text-center">{{ $t('categories') }}</h1>
      <b-row class="overflow-auto hidden-scroll flex-wrap-nowrap">
        <b-col cols="11" class="m-auto">
          <b-row class="flex-wrap-nowrap">
            <Category
              v-for="category in categories"
              v-bind:key="category.slug"
              v-bind:category="category"/>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Category from '@/components/home/categories/Category'
import {mapGetters} from "vuex";

export default {
  components: {
    Category
  },
  async asyncData({store, $config}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/categories/list', $config.apiUrl)
    store.dispatch('modules/configs/loader', false)
  },
  computed: {
    ...mapGetters('modules/categories', {
      categories: 'getCategories',
    }),

  }
}
</script>

<style scoped>

</style>
