<template>
    <b-col cols="6" class="my-5">
      <b-card
        overlay
        :img-src="service.image || 'https://picsum.photos/900/250/?image=3'"
        text-variant="light"
        :title="service.title">
        <b-card-text class="service-card-description">{{ service.description }}</b-card-text>
      </b-card>
    </b-col>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    service: Object
  }
}
</script>
