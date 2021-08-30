<template>
  <section class="home-orders">
    <b-container fluid="fluid">
      <b-col cols="12">
        <b-row class="my-5">
          <b-col md="6" class="m-3 m-md-0">
            <OrderList />
          </b-col>
          <b-col md="6" class="m-3 m-md-0">
            <OrderForm />
          </b-col>
        </b-row>
      </b-col>
    </b-container>
  </section>
</template>

<script>
import OrderList from '@/components/home/orders/OrderList'
import OrderForm from '@/components/home/orders/OrderForm'
export default {
  components: {
    OrderList,
    OrderForm
  },
  async asyncData({store}) {
    await store.dispatch('modules/configs/loader', true)
    store.dispatch('modules/configs/loader', false)
  }
}
</script>

<style scoped>

</style>
