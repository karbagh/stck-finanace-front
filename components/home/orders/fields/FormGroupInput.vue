<template>
  <b-form-group id="order_form"
                :class="{ 'form-group--error': error }"
                :label="`${label}: ${required ? '*' : ''}`"
                :label-for="id">
    <b-form-input
      :id="id"
      :name="name"
      @input.passive="changeValue"
      :placeholder="placeholder"
    ></b-form-input>
    <div v-if="error && validationList.length" class="error-messages">
      <div v-for="validation in validationList" class="error" v-bind:key="validation">
        <span v-if="!validations[validation]">{{ messages[validation] }}</span>
      </div>
    </div>
  </b-form-group>
</template>

<script>
export default {
  name: 'FormGroupInput',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: true
    },
    model: {
      required: true
    },
    error: {
      required: true
    },
    validations: {
      type: Object,
      required: true
    },
    messages: {
      type: Object,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  computed: {
    validationList() {
      return Object.keys(this.messages)
    }
  },
  methods: {
    changeValue(value) {
      this.$root.$emit('changeValue', {
        value: value,
        field: this.name
      })
    }
  }
}
</script>

<style scoped>

</style>
