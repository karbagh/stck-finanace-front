<template>
  <section class="devices-filter">
    <b-list-group flush>
      <b-list-group-item>
        <b-checkbox-group :options="shortListBrands" v-model="filters.brands" @change="changeQuery('brands')"
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
        <b-form-checkbox v-model="filters.in_stock" @change="changeQuery('in_stock')" name="in-stock-button" switch>
          {{ $t('in_stock.true') }}
        </b-form-checkbox>
        <b-form-checkbox v-model="filters.new" @change="changeQuery('new')" name="new-button" switch>
          {{ $t('used.false') }}
        </b-form-checkbox>
        <b-form-checkbox v-model="filters.discount" @change="changeQuery('discount')" name="discount-button" switch>
          {{ $t('discount') }}
        </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </section>
</template>

<script>
import { BIconChevronDown, BIconChevronUp } from 'bootstrap-vue'

export default {
  name: 'Filters',
  components: {
    BIconChevronDown,
    BIconChevronUp
  },
  data () {
    return {
      filters: {
        brands: [],
        in_stock: false,
        new: false,
        discount: false
      },
      limit: 5,
      currentLimit: this.limit
    }
  },
  props: {
    brands: Array,
    query: Object
  },
  computed: {
    shortListBrands () {
      return this.brands.slice(0, this.currentLimit)
    }
  },
  methods: {
    changeQueryForBoolType (filter) {
      if (Object.prototype.hasOwnProperty.call(this.query, filter)) {
        delete this.query[filter]
      } else {
        this.query[filter] = this.filters[filter]
      }
    },
    changeQueryForArrayType (filter) {
      if (!this.filters[filter].length) {
        delete this.query[filter]
      } else {
        this.query[filter] = this.filters[filter]
      }
    },
    async changeQuery (filter) {
      if (typeof this.filters[filter] === 'boolean') {
        await this.changeQueryForBoolType(filter)
      } else if (Array.isArray(this.filters[filter])) {
        await this.changeQueryForArrayType(filter)
      }

      await this.$router.replace({ query: this.query })
      this.$root.$emit('updateContent')
    },
    getQueryFilters () {
      if (Object.keys(this.$route.query).length) {
        if (this.$route.query.brands) {
          this.filters.brands = typeof this.$route.query.brands === 'string' ? [this.$route.query.brands] : this.$route.query.brands
        }
        this.filters.in_stock = this.$route.query.in_stock ? this.$route.query.in_stock : false
        this.filters.new = this.$route.query.new ? this.$route.query.new : false
        this.filters.discount = this.$route.query.discount ? this.$route.query.discount : false
      }
    }
  },
  created () {
    this.getQueryFilters()
  }
}
</script>
