<template>
    <b-col cols="12" md="3">
      <router-link :to="{name: 'home.category', params:{category: category.slug}}"
                   class="text-dark text-decoration-none">
        <b-card
          :title="category.name"
          :img-src="image"
          :img-height="160"
          :img-alt="category.name"
          img-top
          bg-variant="white"
          tag="article"
          class="mb-2"
        >
          <b-icon icon="exclamation-circle-fill"></b-icon>
        </b-card>
      </router-link>
    </b-col>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: Object
  },
  computed: {
    image () {
      return this.category.image ?? '/defaults/emptyMain.jpg'
    }
  }
}
</script>

<style scoped>

</style>
