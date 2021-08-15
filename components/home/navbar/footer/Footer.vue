<template>
  <section class="home-footer">
    <b-navbar type="dark" variant="dark">
      <NuxtLink to="/">
        <b-navbar-brand>NavBar</b-navbar-brand>
      </NuxtLink>

      <b-container>
          <b-col cols="12">
            <b-row>
              <b-col cols="12" md="3">
                <ul class="list-unstyled text-white">
                  <h4>{{ $t('contacts') }}</h4>
                  <li>Section</li>
                  <li>Section</li>
                  <li>Section</li>
                </ul>
              </b-col>
              <b-col cols="12" md="3">
                <ul class="list-unstyled text-white">
                  <h4>{{ $t('socials') }}</h4>
                  <li>Section</li>
                  <li>Section</li>
                  <li>Section</li>
                </ul>
              </b-col>
              <b-col cols="12" md="3">
                <ul class="list-unstyled text-white">
                  <h4>{{ $t('pages') }}</h4>
                  <li>Section</li>
                  <li>Section</li>
                  <li>Section</li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-container>
    </b-navbar>
  </section>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
