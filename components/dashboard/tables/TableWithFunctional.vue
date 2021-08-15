<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button variant="info" :disabled="!filter" @click="filter = ''">{{ $t('clear') }}</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          v-model="sortDirection"
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox :value="item.value" v-for="item in filterFields" v-bind:key="item.value">{{ item.text }}</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    >

      <template #cell(actions)="row">
        <b-button size="sm" variant="info" class="mx-1" :to="row.item.links.edit">
          <BIconPenFill /> {{ $t('edit') }}
        </b-button>
        <b-button size="sm" variant="danger" class="mx-1" @click="confirmDelete(row.item)">
          <BIconTrash2Fill /> {{ $t('delete') }}
        </b-button>
      </template>

    </b-table>

  </b-container>
</template>

<script>
import { BIconPenFill, BIconTrash2Fill } from 'bootstrap-vue'
export default {
  name: 'TableWithFunctional',
  components: {
    BIconPenFill,
    BIconTrash2Fill
  },
  props: {
    items: Array,
    filterFields: Array,
    fields: Array,
    totalRows: Number,
    currentPage: Number,
    perPage: Number,
    pageOptions: Array,
    sortBy: String,
    sortDesc: Boolean,
    sortDirection: String,
    filter: String,
    filterOn: Array
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted () {
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    confirmDelete (item) {
      this.$bvModal.msgBoxConfirm(this.$t('deleting.confirmation.description'), {
        title: this.$t('deleting.confirmation.title'),
        size: 'md',
        buttonSize: 'sm',
        okTitle: this.$t('deleting.confirmation.confirm'),
        okVariant: 'danger',
        cancelTitle: this.$t('deleting.confirmation.cancel'),
        cancelVariant: 'info',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
        .then(value => {
          console.log(value)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
