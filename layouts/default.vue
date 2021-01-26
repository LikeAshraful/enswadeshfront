<template>
  <div>
    <Header />
    <div class="lg:w-11/12 xl:w-10/12 w-full m-auto">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
