<template>
  <section class="device-list-with-filters">
    <b-col cols="12 my-5">
      <b-row v-if="devicesCount">
        <b-col cols="12" md="2">
          <b-row>
            <b-col cols="12">
              <h3 class="filters-title">{{ $t('filters') }}</h3>
              <Filters :brands="brands"/>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="10">
          <b-row>
            <b-col cols="12">
              <b-row>
                <b-col cols="12" md="4" offset-md="8" class="mb-3">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-col>
                <b-col cols="12">
                  <section v-if="!devices.length" class="col-12">
                    <b-card no-body class="text-center p-3">
                      <h3 v-text="$t('category.devices.false')"></h3>
                    </b-card>
                  </section>
                  <section v-else class="row device-list-overflow-auto">
                  <Device
                    v-for="device in devices"
                    v-bind:key="device.slug"
                    :device="device"/>
                </section>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-card v-else no-body class="text-center p-3">
        <h3 v-text="$t('category.devices.false')"></h3>
      </b-card>
    </b-col>
  </section>
</template>

<script>
import Device from '@/components/home/devices/Device'
import Filters from '@/components/home/categories/category/device/Filters'

export default {
  name: "DeviceListWithFilters",
  props: {
    devices: {
      type: Array,
      required: true
    },
    devicesCount: {
      type: Number,
      required: true
    },
    brands: {
      type: Array,
      required: true
    },
  },
  components: {
    Device,
    Filters
  },
  data() {
    return {
      selected: null,
      options: [
        {value: null, text: this.$t('sort.by')},
        {value: 'model.asc', text: this.$t('sort.alphabetical.asc'), selected: true},
        {value: 'model.desc', text: this.$t('sort.alphabetical.desc')},
        {value: 'price.asc', text: this.$t('sort.price.asc')},
        {value: 'price.desc', text: this.$t('sort.price.desc')}
      ],
    }
  },
  watch: {
    selected: function (value) {
      this.$root.$emit('filter', {...this.$route.query, orderBy: value})
    }
  }}
</script>
