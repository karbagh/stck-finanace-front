<template>
  <section>
    <div class="m-4" v-if="collection.devices.length">
      <b-card :header="$t(collection.type)"
              header-bg-variant="transparent"
              header-text-variant="dark"
              bg-variant="transparent"
              header-class="home-list-section-header">
        <b-row>
          <b-col cols="12">
            <b-row>
              <Device
                :device="device"
                v-for="device in collection.devices"
                v-bind:key="device.slug"/>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </section>
</template>

<script>
import Device from './Device'

export default {
  name: 'DeviceList',
  components: { Device },
  props: {
    collection: Object
  }
}
</script>

<style scoped>

</style>
