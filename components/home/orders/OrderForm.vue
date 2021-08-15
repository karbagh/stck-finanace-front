<template>
  <section class="order-form">
    <b-card :title="$t('order.form')">

      <b-form @submit="onSubmit" v-if="show">
        <b-row>
          <b-col cols="12">
            <b-row>
              <b-col cols="6">
                <FormGroupInput
                  id="first_name"
                  :label="$t('form.first_name.label')"
                  :model="$v.form.first_name.$model"
                  :error="$v.form.first_name.$error"
                  :validations="$v.form.first_name"
                  :messages="messages.form.first_name"
                  :placeholder="$t('form.first_name.placeholder')"
                  :required="true"
                  name="first_name"/>
              </b-col>

              <b-col cols="6">
                <FormGroupInput
                  id="last_name"
                  :label="$t('form.last_name.label')"
                  :model="$v.form.last_name.$model"
                  :error="$v.form.last_name.$error"
                  :validations="$v.form.last_name"
                  :messages="messages.form.last_name"
                  :placeholder="$t('form.last_name.placeholder')"
                  :required="true"
                  name="last_name"/>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <FormGroupInput
          id="email"
          :label="$t('form.email.label')"
          :model="$v.form.email.$model"
          :error="$v.form.email.$error"
          :validations="$v.form.email"
          :messages="messages.form.email"
          :placeholder="$t('form.email.placeholder')"
          :required="false"
          name="email"/>

        <FormGroupInput
          id="mobile"
          :label="$t('form.mobile.label')"
          :model="$v.form.mobile.$model"
          :error="$v.form.mobile.$error"
          :validations="$v.form.mobile"
          :messages="messages.form.mobile"
          :placeholder="$t('form.mobile.placeholder')"
          :required="true"
          name="mobile"/>

        <FormGroupInput
          id="address"
          :label="$t('form.address.label')"
          :model="$v.form.address.$model"
          :error="$v.form.address.$error"
          :validations="$v.form.address"
          :messages="messages.form.address"
          :placeholder="$t('form.address.placeholder')"
          :required="true"
          name="address"/>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            class="d-flex align-items-center justify-content-between"
            v-model="form.messengers.label"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <span v-bind:key="messenger.value" v-for="messenger in messengers">
              <label :for="messenger.value">
                <SocialIcons :class="`${messenger.icon} d-block`" />
              </label>
              <b-form-checkbox :value="messenger.value" :id="messenger.value"></b-form-checkbox>
            </span>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit"
                  :variant="[$v.form.$invalid ? 'secondary' : 'success']"
                  class="order-form-submit col-12"
                  :disabled="$v.form.$invalid">{{ $t('order.send') }}</b-button>

      </b-form>
    </b-card>
  </section>
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
import SocialIcons from '../../dashboard/icons/socials/SocialIcons'
import FormGroupInput from './fields/FormGroupInput'
// import axioses from '../../../axios/axioses'
const mobileFormat = helpers.regex('mobileFormat', /^(\+374)?\d{8}$/)
export default {
  name: 'OrderForm',
  components: {
    FormGroupInput,
    SocialIcons
  },
  validations: {
    form: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      email: {
        email
      },
      mobile: {
        required,
        mobileFormat
      },
      address: {
        required
      }
    }
  },
  data () {
    return {
      form: {
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        mobile: '',
        messengers: [],
        status: 'created',
        // devices: this.$store.state.cart.products.map((item) => {
        //   return item.slug
        // })
        devices: []
      },
      messages: {
        form: {
          first_name: {
            required: this.$t('form.first_name.validation.required')
          },
          last_name: {
            required: this.$t('form.first_name.validation.required')
          },
          email: {
            email: this.$t('form.email.validation.email')
          },
          mobile: {
            required: this.$t('form.mobile.validation.required'),
            mobileFormat: this.$t('form.mobile.validation.mobileFormat')
          },
          address: {
            required: this.$t('form.address.validation.required')
          }
        }
      },
      messengers: [
        {
          icon: 'vib',
          value: 'viber',
          title: 'Viber'
        },
        {
          icon: 'wtsp',
          value: 'whatsapp',
          title: 'Whats App'
        },
        {
          icon: 'msg',
          value: 'messenger',
          title: 'Messenger'
        },
        {
          icon: 'skp',
          value: 'skype',
          title: 'Skype'
        },
        {
          icon: 'tel',
          value: 'telegram',
          title: 'Telegram'
        }
      ],
      show: true
    }
  },
  methods: {
    async thenClosure () {
      this.$root.$emit('loader', true)
      await this.$store.commit('emptyCart')
      await this.$router.push({ name: 'home.order.finished', params: { payment: 'cash', status: 'success' } })
      this.$root.$emit('loader', false)
    },
    catchClosure () {
      this.$bvToast.toast('', {
        variant: 'danger',
        title: 'danger'
      })
    },
    // onSubmit (event) {
    //   event.preventDefault()
    //   axioses.makeOrder(this.form, this.thenClosure, this.catchClosure)
    // }
  },
  created () {
    this.$root.$on('changeValue', (field) => {
      this.form[field.field] = field.value
      this.$v.form[field.field].$touch()
    })
  }
}
</script>
