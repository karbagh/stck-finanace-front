<template>
    <section class="device-parameters">
      <b-list-group flush>
        <b-list-group-item
          v-bind:key="index"
          v-for="(parameter,index) in parameters">
          <h5 class="device-parameter">
            <b-col cols="12">
              <b-row>
                <b-col cols="4">
                  <span class=" text-secondary">{{ parameter.parameter }}</span>
                </b-col>
                <b-col cols="8">
                  <span>{{ parameter.value }}</span>
                </b-col>
              </b-row>
            </b-col>
          </h5>
        </b-list-group-item>
      </b-list-group>
    </section>
</template>

<script>
export default {
  name: 'DeviceParameters',
  props: {
    parameters: Array
  }
}
</script>

<style scoped>

</style>
