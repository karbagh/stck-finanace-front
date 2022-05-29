<template>
  <section class="home-body">
    <b-container class="my-3">
      <b-card
        :title="$t('entities.stocks')">
        <b-table
          :items="stocks"
          :fields="fields"
          :sort-direction="sortDirection"
          stacked="md"
          show-empty
          small
          class="my-5"
        />
      </b-card>
    </b-container>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      fields: [
        { key: 'id', label: 'Id', sortable: true, class: 'text-center' },
        { key: 'corporation', label: 'Corporation', sortable: true, sortDirection: 'desc' },
        { key: 'price', label: 'Price', sortable: true, class: 'text-center' },
        { key: 'updatedAt', label: 'UpdatedAt', sortable: true, class: 'text-center' },
      ],
      sortDirection: 'asc'
    }
  },
  async fetch({store, $config}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/stocks/list')
    await store.dispatch('modules/configs/loader', false)
  },
  computed: {
    ...mapGetters('modules/stocks', {
      stocks: 'list',
    }),
  },
  methods: {
    ...mapActions('modules/configs', [
      'loader'
    ])
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.stocks.length
  },
}
</script>
