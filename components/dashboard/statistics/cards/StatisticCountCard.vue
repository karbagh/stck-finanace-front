<template>
    <b-card :bg-variant="variants[index]" text-variant="white" class="statistic-count-card text-center">
      <b-card-text>
        <p>{{ $t(item.header) }}</p>
        <p class="h3">{{ item.count }}</p>
      </b-card-text>
    </b-card>
</template>

<script>
export default {
  name: 'StatisticCountCard',
  props: {
    item: Object,
    index: Number
  },
  data () {
    return {
      variants: [
        'dark',
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info'
      ]
    }
  }
}
</script>
