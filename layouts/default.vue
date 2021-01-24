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
import Header from '~/components/common/header.vue'
import Footer from '~/components/common/footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
