<template>
  <section class="simple-slider">
    <b-carousel
      id="carousel-1"
      v-if="slides"
      v-model="slide"
      :interval="configs.interval"
      :controls="slides.length > 0"
      :indicators="slides.length > 0"
      background="#simple-slider-background"
      img-width="1024"
      img-height="440"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-if="slides.length > 0">
        <b-carousel-slide
          v-bind:key="index"
          v-for="(item,index) in slides"
          :caption="item.title"
          :img-src="item.image"
          :img-alt="item.title"
        ></b-carousel-slide>
      </div>
      <div v-else-if="!show_blank">
        <b-carousel-slide
          img-src="https://cloudimg.scaalar.com/crop/640x480/n/https://www.carrosnovale.com.br/wp-content/uploads/2021/04/49-volkswagen-spacefox-comfortline-i-motion-16-mi-8v-total-flex-2012-0.jpg"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: 'SimpleSlider',
  props: {
    slides: Array,
    configs: Object,
    show_blank: Boolean
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
