<template>
    <b-col cols="12" md="3">
      <NuxtLink :to="`categories/${category.slug}`"
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
        </b-card>
      </NuxtLink>
    </b-col>
</template>

<script>
export default {
  name: 'Category',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  computed: {
    image () {
      return this.category.image ?? require(`@/static/${this.$config.categoryDefaultImage}`)
    }
  }
}
</script>

<style scoped>

</style>
