<template>
  <section>
    <div class="m-4">
      <b-card :header="$t('categories')"
              header-bg-variant="transparent"
              header-text-variant="dark"
              bg-variant="transparent"
              header-class="home-list-section-header">
        <b-row>
          <b-col cols="12" class="position-relative">
            <Prev v-if="categories.length > 5" class="position-absolute d-none d-md-flex absolute-slide-controls slide-control-left" />
            <b-row class="overflow-auto hidden-scroll flex-wrap-nowrap">
              <b-col cols="11" class="m-auto">
                <b-row class="flex-wrap-nowrap">
                  <Category
                    v-for="category in categories"
                    v-bind:key="category.slug"
                    v-bind:category="category"/>
                </b-row>
              </b-col>
            </b-row>
            <Next v-if="categories.length > 5" class="position-absolute d-none d-md-flex absolute-slide-controls slide-control-right"/>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </section>
</template>

<script>
import Category from './Category'
import Next from '../sections/buttons/Next'
import Prev from '../sections/buttons/Prev'

export default {
  name: 'CategoryList',
  components: {
    Prev,
    Next,
    Category
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
