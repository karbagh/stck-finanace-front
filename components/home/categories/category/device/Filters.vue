<template>
  <section class="devices-filter">
    <b-list-group flush>
      <b-list-group-item>
        <span>{{ $t('filterTypes.brands') }}</span>
        <b-checkbox-group :options="shortListBrands" @change="filter" v-model="filterBrands"
                          name="model"></b-checkbox-group>
        <div class="see-more-buttons" v-if="brands.length > limit">
          <b-link @click="currentLimit = brands.length"
                  class="text-secondary font-weight-normal text-decoration-none small" v-if="currentLimit === limit">
            {{ $t('see-more', {count: brands.length - limit}) }}
            <BIconChevronDown/>
          </b-link>
          <b-link @click="currentLimit = limit" class="text-secondary font-weight-normal text-decoration-none small"
                  v-else>{{ $t('see-less') }}
            <BIconChevronUp/>
          </b-link>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <b-form-checkbox v-model="filters.in_stock" name="in-stock-button" @change="filter" switch>
          {{ $t('in_stock.true') }}
        </b-form-checkbox>
        <b-form-checkbox v-model="filters.used" name="in-stock-button" @change="filter" switch>
          {{ $t('used.true') }}
        </b-form-checkbox>
        <b-form-checkbox v-model="filters.discount" name="in-stock-button" @change="filter" switch>
          {{ $t('discount') }}
        </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Filters',
  data() {
    return {
      filters: {
        in_stock: false,
        used: false,
        discount: false
      },
      limit: 5,
      currentLimit: this.limit,
      filterBrands: []
    }
  },
  props: {
    brands: Array,
    // slug: String,
    query: Object
  },
  computed: {
    shortListBrands: function () {
      return this.brands.slice(0, this.currentLimit)
    }
  },
  methods: {
    ...mapActions('modules/configs', [
      'loader'
    ]),

    ...mapActions('modules/categories', [
      'categoryWithDevices'
    ]),
    async filter() {
      const filters = {
        ...Object.fromEntries(Object.entries(this.filters).filter((item) => {
          return item[1]
        })),
        brands: this.filterBrands
      }

      this.$root.$emit('filter', filters)
    }
  },
  async created() {
    this.filters.in_stock = 'in_stock' in this.$route.query
    this.filters.used = 'used' in this.$route.query
    this.filters.discount = 'discount' in this.$route.query
    this.filterBrands = 'brands' in this.$route.query ? this.$route.query.brands : this.filterBrands
  }
}
</script>
