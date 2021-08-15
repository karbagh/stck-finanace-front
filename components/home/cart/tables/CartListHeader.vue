<template>
  <section class="card-list-header">
    <b-list-group-item>
      <b-col>
        <b-row>
          <b-col cols="4">{{ $t('order.device.name') }}</b-col>
          <b-col cols="4">{{ $t('order.device.quantity') }}</b-col>
          <b-col cols="4">{{ $t('order.device.price') }}</b-col>
        </b-row>
      </b-col>
    </b-list-group-item>
  </section>
</template>

<script>
export default {
  name: 'CartListHeader'
}
</script>

<style scoped>

</style>
