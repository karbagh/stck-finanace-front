<template>
  <section class="home-body">
    <b-container class="my-3">
      <b-card
        :title="$t('entities.clients')">
        <b-table
          :items="clients"
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
        { key: 'fullName', label: 'FullName', sortable: true, class: 'text-center' },
        { key: 'email', label: 'Email', sortable: true, class: 'text-center' },
        { key: 'username', label: 'Username', sortable: true, class: 'text-center' },
        { key: 'budget', label: 'Budget', sortable: true, sortDirection: 'desc' },
        { key: 'range', label: 'Range', sortable: true, class: 'text-center' },
      ],
      sortDirection: 'asc'
    }
  },
  async fetch({store, $config}) {
    await store.dispatch('modules/configs/loader', true)
    await store.dispatch('modules/clients/list')
    await store.dispatch('modules/configs/loader', false)
  },
  computed: {
    ...mapGetters('modules/clients', {
      clients: 'list',
    }),
  },
  methods: {
    ...mapActions('modules/configs', [
      'loader'
    ])
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.clients.length
  },
}
</script>
