<template>
    <section class="order-finish-content">
      <h1>{{ title }}</h1>
      <pre>{{ content }}</pre>
    </section>
</template>

<script>
export default {
  name: 'OrderFinishContent',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
