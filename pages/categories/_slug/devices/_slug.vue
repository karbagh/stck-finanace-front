<template>
  <section class="home-device">
    <b-container fluid="fluid">
      <b-row class="my-4">
        <b-col cols="12">
          <b-card border-variant="light" class="my-2">
            <b-row>
              <b-col md="6">
                <SimpleSlider
                  :show_blank="false"
                  :configs="sliderConfigs"
                  :slides="device.images"/>
              </b-col>
              <b-col md="6">
                <DeviceDescription
                  :device="device"/>
              </b-col>
            </b-row>
          </b-card>
          <b-card border-variant="light" class="my-2">
            <b-row>
              <b-col cols="12">
                <DeviceParameters
                  :parameters="device.parameters"/>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import SimpleSlider from '@/components/home/banner/carousel/SimpleSlider'
import DeviceDescription from '@/components/home/devices/page/DeviceDescription'
import DeviceParameters from '@/components/home/devices/page/DeviceParameters'
import {mapGetters} from "vuex";

export default {
  async asyncData({params, store, $config}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/devices/device', {
      apiUrl: $config.apiUrl,
      slug: params.slug,
    })
    store.dispatch('modules/configs/loader', false)
  },
  computed: {
    ...mapGetters('modules/devices', {
      device: 'getDevice'
    }),
  },
  data () {
    return {
      sliderConfigs: {
        interval: 2500
      }
    }
  },
  components: {
    SimpleSlider,
    DeviceDescription,
    DeviceParameters,
  }
}
</script>
