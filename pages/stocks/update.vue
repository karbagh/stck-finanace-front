<template>
  <b-container>
    <section class="login-form py-5">
      <b-card bg-variant="transparent" text-variant="black">
        <h1 class="administrator-login h2 text-center">{{ $t('actions.update', {item: $t('entities.stocks')}) }}</h1>
        <b-alert variant="danger" v-if="error.message" show>{{ error.message }}</b-alert>
        <b-form @submit.prevent="onSubmit" class="p-3">
          <b-form-select
            class="my-2"
            v-model="selected"
            :options="stocks"></b-form-select>

          <b-form-group
            id="price-group"
            :label="$t('form.inputs.price.label')"
            label-for="price"
          >
            <b-form-input
              id="price"
              name="price"
              v-model="form.price"
              type="number"
              :placeholder="$t('form.inputs.price.placeholder')"
            ></b-form-input>
          </b-form-group>

          <b-button
            class="ml-auto"
            type="submit"
            variant="primary">
            {{ $t('actions.update', {item: $t('entities.stocks')}) }}
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
    await store.dispatch('modules/stocks/list', false)
    await store.dispatch('modules/configs/loader', false)
  },
  data() {
    return {
      form: {
        price: ''
      },
      error: {
        message: ''
      },
      selected: null,
    }
  },
  computed: {
    ...mapGetters('modules/stocks', [
      'list'
    ]),

    stocks() {
      return [
        {value: null, text: this.$t('form.option.choose', {item: 'Stock'})},
        ...this.list.map((item) => {
          return {
            value: item.id,
            text: item.id,
          }
        })
      ]
    }
  },
  methods: {
    ...mapActions('modules/stocks', [
      'update'
    ]),

    onSubmit() {
      this.update({
        body: this.form,
        stock: this.selected
      })
        .catch((error) => this.error.message = error.response.data.message)
    }
  },
}
</script>

<style scoped>

</style>
