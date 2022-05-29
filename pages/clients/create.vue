<template>
  <b-container>
    <section class="login-form py-5">
      <b-card bg-variant="transparent" text-variant="black">
        <h1 class="administrator-login h2 text-center">{{ $t('actions.create', {item: $t('entities.clients')}) }}</h1>
        <b-alert variant="danger" v-if="error.message" show>{{ error.message }}</b-alert>
        <b-form @submit.prevent="onSubmit" class="p-3">
          <b-form-group
            v-for="field in fields"
            :id="field.label.id"
            :label="field.label.text"
            :label-for="field.label.for"
            :description="field.label.description"
          >
            <b-form-input
              @change="fillForm($event, field.input.vModel)"
              :id="field.input.id"
              :name="field.input.name"
              :type="field.input.type"
              :placeholder="field.input.placeholder"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">{{ $t('actions.create', {item: $t('entities.clients')}) }}</b-button>
        </b-form>
      </b-card>
    </section>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  async fetch({store}) {
    await store.dispatch('modules/configs/loader', false)
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        email: 'dsadasda',
      },
      error: {
        message: ''
      },
    }
  },
  computed: {
    fields() {
      return [
        {
          label: {
            id: 'firstName-group',
            text: this.$t('form.inputs.firstName.label'),
            for: 'firstName',
          },
          input: {
            id: 'firstName',
            name: 'firstName',
            vModel: 'firstName',
            type: 'text',
            placeholder: this.$t('form.inputs.firstName.placeholder'),
          }
        },
        {
          label: {
            id: 'lastName-group',
            text: this.$t('form.inputs.lastName.label'),
            for: 'lastName',
          },
          input: {
            id: 'lastName',
            name: 'lastName',
            vModel: 'lastName',
            type: 'text',
            placeholder: this.$t('form.inputs.lastName.placeholder'),
          }
        },{
          label: {
            id: 'username-group',
            text: this.$t('form.inputs.username.label'),
            for: 'username',
          },
          input: {
            id: 'username',
            name: 'username',
            vModel: 'username',
            type: 'text',
            placeholder: this.$t('form.inputs.username.placeholder'),
          }
        },
        {
          label: {
            id: 'email-group',
            text: this.$t('form.inputs.email.label'),
            for: 'email',
            description: this.$t('form.inputs.email.description')
          },
          input: {
            id: 'email',
            name: 'email',
            vModel: 'email',
            type: 'email',
            placeholder: this.$t('form.inputs.email.placeholder'),
          }
        },
      ]
    }
  },
  methods: {
    ...mapActions('modules/clients', [
      'create'
    ]),

    ...mapActions('modules/configs', [
      'loader'
    ]),

    onSubmit(event) {
      this.create(this.form)
        .catch((error) => this.error.message = error.response.data.message)
    },
    fillForm(value, field) {
      this.form[field] = value
    }
  },
  mounted() {
    this.loader(false)
  },
}
</script>
