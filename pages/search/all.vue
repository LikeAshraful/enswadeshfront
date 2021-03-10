<template>
  <div>
    <p class="text-2xl font-bold">All search result</p>
    <div
      grid
      lg:grid-cols-4
      md:grid-cols-3
      grid-cols-2
      lg:gap-6
      md:gap-4
      gap-3
      py-8
      h-24
      pb-10
    >
      <h1 class="text-3xl font-bold text-center text-red-400">
        Comming soon..........!!!!!!!!!!!!!!!!!!!
      </h1>
    </div>

    <!-- <div
      class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8"
    >
      <div v-for="(all, i) in alls.data" :key="i" class="">
        <NuxtLink
          :to="{
            path: 'search/all',
            params: { slug: all.title },
          }"
        >
          <img
            class="h-16 w-full"
            :src="
              all.title
                ? basePath + 'storage/' + all.logo
                : require(`~/assets/img/banner_green.png`)
            "
            alt="Image"
          />
          <p
            style="margin-top: -48px"
            class="w-full text-center font-bold text-white text-xl mb-5"
          >
            {{ all.title }}
          </p>
          <img
            class="sm:h-40 h-32 w-full"
            src="~/assets/img/shutter.png"
            alt="Image"
          />
          <p class="w-full text-center font-bold">{{ all.title }}</p>
        </NuxtLink>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      cols: 'lg:grid-cols-4',
      imageUrl: this.$axios.imageURL,
    }
  },

  components: {
    Markets,
  },

  created() {
    this.loadSearch()
  },

  mounted() {
    this.basePath = this.$axios.defaults.baseURL
  },

  methods: {
    ...mapActions('search', ['loadSearch']),
  },

  computed: {
    ...mapGetters({
      alls: 'search/result',
      isLoading: 'search/isLoading',
    }),
  },
}
</script>

<style></style>
