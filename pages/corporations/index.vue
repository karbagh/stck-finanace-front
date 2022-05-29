<template>
  <section class="home-body">
    <b-container class="my-3">
      <b-card
        :title="$t('entities.corporations')">
        <b-table
          :items="corporations"
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
        { key: 'name', label: 'Name', sortable: true, sortDirection: 'desc' },
        { key: 'slug', label: 'Slug', sortable: true, class: 'text-center' },
        { key: 'capital', label: 'Capital', sortable: true, class: 'text-center' },
      ],
      sortDirection: 'asc'
    }
  },
  async fetch({store, $config}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/corporations/list')
    await store.dispatch('modules/configs/loader', false)
  },
  computed: {
    ...mapGetters('modules/corporations', {
      corporations: 'list',
    }),
  },
  methods: {
    ...mapActions('modules/configs', [
      'loader'
    ])
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.corporations.length
  },
}
</script>
