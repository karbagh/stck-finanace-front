<template>
  <b-container>
    <section class="login-form py-5">
      <b-card bg-variant="transparent" text-variant="black">
        <h1 class="administrator-login h2 text-center">{{ $t('form.login.title') }}</h1>
        <b-alert variant="danger" v-if="error.message" show>{{ error.message }}</b-alert>
        <b-form @submit.prevent="onSubmit" class="p-3">
          <b-form-group
            id="email-group"
            :label="$t('form.inputs.email.label')"
            label-for="email"
            :description="$t('form.inputs.email.description')"
          >
            <b-form-input
              id="email"
              name="email"
              v-model="form.username"
              type="email"
              :placeholder="$t('form.inputs.email.placeholder')"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="password-group"
            :label="$t('form.inputs.password.label')"
            label-for="password">
            <b-form-input
              id="password"
              name="password"
              v-model="form.password"
              :placeholder="$t('form.inputs.password.placeholder')"
              type="password"
              autocomplete="current-password"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox
              v-model="form.remember"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
              value="rememberMe"
              unchecked-value="dontRememberMe"

            >
              {{ $t('form.checkboxes.rememberMe.text') }}
            </b-form-checkbox>
          </b-form-group>

          <b-button type="submit" variant="primary">{{ $t('form.buttons.login.text') }}</b-button>
        </b-form>
      </b-card>
    </section>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  layout: 'unauthorized',
  async fetch({store}) {
    await store.dispatch('modules/configs/loader', false)
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
        remember: false
      },
      error: {
        message: ''
      },
    }
  },
  methods: {
    ...mapActions('modules/auth', [
      'login'
    ]),

    ...mapActions('modules/configs', [
      'loader'
    ]),

    onSubmit(event) {
      this.login(this.form)
        .catch((error) => this.error.message = error.response.data.message)
    }
  },
  mounted() {
    this.loader(false)
  },
}
</script>

<style scoped>

</style>
