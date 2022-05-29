<template>
  <b-container>
    <section class="login-form py-5">
      <b-card bg-variant="transparent" text-variant="black">
        <h1 class="administrator-login h2 text-center">{{ $t('actions.create', {item: $t('entities.stocks')}) }}</h1>
        <b-alert variant="danger" v-if="error.message" show>{{ error.message }}</b-alert>
        <b-form @submit.prevent="onSubmit" class="p-3">
          <b-form-select
            class="my-2"
            v-model="selected"
            :options="corporations"></b-form-select>

          <b-form-group
            id="price-group"
            :label="$t('form.inputs.price.label')"
            label-for="price"
          >
            <b-form-input
              id="price"
              name="price"
              v-model="form.price"
              :placeholder="$t('form.inputs.price.placeholder')"
            ></b-form-input>
          </b-form-group>

          <b-button
            class="ml-auto"
            type="submit"
            variant="primary">{{ $t('actions.create', {item: $t('entities.stocks')}) }}
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
    await store.dispatch('modules/corporations/list', false)
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
    ...mapGetters('modules/corporations', [
      'list'
    ]),

    corporations() {
      return [
        {value: null, text: this.$t('form.option.choose', {item: 'Corporation'})},
        ...this.list.map((item) => {
          return {
            value: item.slug,
            text: item.name,
          }
        })
      ]
    }
  },
  methods: {
    ...mapActions('modules/stocks', [
      'create'
    ]),

    onSubmit() {
      this.create({
        body: this.form,
        corporation: this.selected
      })
        .catch((error) => this.error.message = error.response.data.message)
    }
  },
}
</script>

<style scoped>

</style>
