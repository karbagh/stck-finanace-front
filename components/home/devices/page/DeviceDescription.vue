<template>
    <section class="device-description">
      <b-list-group flush>
        <b-list-group-item>
          <h1 class="h3 device-model">{{  device.model }}</h1>
          <h2 class="h5 device-brand text-secondary">{{ device.brand }}</h2>
        </b-list-group-item>
        <b-list-group-item>
          <section class="discount" v-if="device.discount">
            <b-badge variant="danger">{{ $t('discount')}} {{ device.discount }}%</b-badge>
            <h4 class="h4 text-decoration-line-through text-danger">{{ device.oldPrice }} <AMD/></h4>
          </section>
          <h4 class="h2">{{ device.price }} <AMD/> </h4>
        </b-list-group-item>
        <b-list-group-item>
          <h5 v-if="device.made">{{ $t('made_year') }}: {{ $t('y', {year: device.made} ) }}</h5>
          <h5>{{ device.used ? $t('used.true') : $t('used.false') }}</h5>
          <h5 v-bind:class="[device.inStock ? 'text-success' : 'text-danger']">{{ device.inStock ? $t('in_stock.true') : $t('in_stock.false') }}</h5>
        </b-list-group-item>
        <b-list-group-item v-if="device.description">{{ device.description }}</b-list-group-item>
        <b-list-group-item>
          <b-col cols="12">
            <b-row v-if="device.inStock">
              <b-col cols="6">
                <AddToCart
                  :product="device" />
              </b-col>
              <b-col cols="6">
                <OrderNow
                  :product="device"/>
              </b-col>
            </b-row>
            <p v-else v-text="$t('device.out_of_stock')" class="text-center text-danger"></p>
          </b-col>
        </b-list-group-item>
      </b-list-group>
    </section>
</template>

<script>
import AddToCart from './buttons/AddToCart'
import OrderNow from './buttons/OrderNow'
import AMD from '../../content/symbols/curencies/AMD'

export default {
  name: 'DeviceDescription',
  components: { AMD, OrderNow, AddToCart },
  props: {
    device: Object
  }
}
</script>
