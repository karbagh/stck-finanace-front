<template>
  <b-col cols="12" md="3">
    <section>
      <b-badge class="discount-badge-product-left-top" variant="danger" v-if="device.discount">{{ $t('discount')}} {{ device.discount }}%</b-badge>
      <NuxtLink :to="`/categories/${device.category}/devices/${device.slug}`" class="text-decoration-none text-dark">
        <b-card
          :title="device.model"
          :sub-title="device.brand"
          :img-src="image"
          :img-height="200"
          :img-alt="device.model"
          img-top
          bg-variant="white"
          tag="article"
          class="mb-2"
        >
          <div class="d-flex justify-content-between">
            <span class="text-dark">{{device.price}} <AMD /></span>
            <span class="text-secondary text-right" v-if="device.made">{{ $t('y', {year: device.made}) }}</span>
          </div>
        </b-card>
      </NuxtLink>
    </section>
  </b-col>
</template>

<script>
import AMD from '../content/symbols/curencies/AMD'
export default {
  name: 'Device',
  components: { AMD },
  props: {
    device: Object
  },
  computed: {
    image () {
      return this.device.image ?? '/defaults/emptyMain.jpg'
    }
  }
}
</script>

<style scoped>

</style>
