<template>
  <b-container>
    <section class="login-form py-5">
      <b-card bg-variant="transparent" text-variant="black">
        <h1 class="administrator-login h2 text-center">{{ $t('actions.sell', {item: $t('entities.stocks')}) }}</h1>
        <b-alert variant="danger" v-if="error.message" show>{{ error.message }}</b-alert>
        <b-form @submit.prevent="onSubmit" class="p-3">
          <b-form-select
            v-model="form.stockId"
            class="my-2"
            :options="stocks"></b-form-select>

          <b-form-select
            class="my-2"
            v-model="selected"
            :options="clients"></b-form-select>

          <b-form-group
            id="volume-group"
            :label="$t('form.inputs.volume.label')"
            label-for="volume"
          >
            <b-form-input
              id="volume"
              name="volume"
              v-model="form.volume"
              type="number"
              :placeholder="$t('form.inputs.volume.placeholder')"
            ></b-form-input>
          </b-form-group>

          <b-button
            class="ml-auto"
            type="submit"
            variant="primary">
            {{ $t('actions.sell', {item: $t('entities.stocks')}) }}
          </b-button>
        </b-form>
      </b-card>
    </section>
  </b-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  async fetch({store}) {
    await store.dispatch('modules/stocks/list')
    await store.dispatch('modules/clients/list')
    await store.dispatch('modules/configs/loader', false)
  },
  data() {
    return {
      form: {
        volume: '',
        stockId: null,
      },
      error: {
        message: ''
      },
      selected: null,
    }
  },
  computed: {
    ...mapGetters('modules/stocks', {
      stockList: 'list'
    }),
    ...mapGetters('modules/clients', {
      clientList: 'list'
    }),

    stocks() {
      return [
        {value: null, text: this.$t('form.option.choose', {item: 'Stock'})},
        ...this.stockList.map((item) => {
          return {
            value: item.id,
            text: item.id,
          }
        })
      ]
    },

    clients() {
      return [
        {value: null, text: this.$t('form.option.choose', {item: 'Client'})},
        ...this.clientList.map((item) => {
          return {
            value: item.id,
            text: item.id,
          }
        })
      ]
    },
  },
  methods: {
    ...mapActions('modules/clients', [
      'sell'
    ]),

    onSubmit() {
      this.sell({
        body: this.form,
        client: this.selected
      }).catch((error) => this.error.message = error.response.data.message)
    }
  },
}
</script>
