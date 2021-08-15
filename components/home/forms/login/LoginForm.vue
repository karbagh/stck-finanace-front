<template>
  <section class="login-form">
    <b-card bg-variant="transparent" text-variant="white">
      <h1 class="administrator-login h2 my-1 text-center">{{ $t('administrator.login.title') }}</h1>
      <b-form @submit="onSubmit" class="p-3">
        <b-form-group
          id="input-group-1"
          :label="$t('inputs.email.labels.label')"
          label-for="input-1"
          :description="$t('inputs.email.labels.description')"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            :placeholder="$t('inputs.email.labels.placeholder')"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" :label="$t('inputs.password.labels.label')" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            :placeholder="$t('inputs.password.labels.placeholder')"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.remember"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="rememberMe">{{ $t('checkboxes.rememberMe.text') }}</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">{{ $t('buttons.login.text') }}</b-button>
      </b-form>
    </b-card>
  </section>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        name: '',
        remember: false
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style scoped>

</style>
