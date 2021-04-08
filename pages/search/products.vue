<template>
  <div>
    <p class="text-2xl font-bold">Products search result</p>
    <div
      v-if="products.data.length > 0"
      class="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12"
    >
      <div
        class="mb-8 cursor-pointer"
        v-for="(product, i) in products.data"
        :key="i"
      >
        <n-link
          :to="{
            name: 'product-slug-id',
            params: { slug: product.slug, id: product.id },
          }"
        >
          <div class="h-full">
            <div class="">
              <img
                class="h-52 w-full"
                :src="
                  product.image.src
                    ? basePath + '/storage/' + product.image.src
                    : require(`~/assets/img/products/default.png`)
                "
                alt="Image"
              />
            </div>
            <p class="font-bold pt-2">{{ product.name }}</p>
            <p class="">{{ product.color }}</p>
            <p class="font-bold">{{ product.price }} BDT</p>
          </div>
        </n-link>
        <div class="flex justify-between">
          <button class="btn bg-green-3 focus:outline-none">Buy Now</button>
          <button class="btn border-orange-1 focus:outline-none">
            Add to bag
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-3xl font-bold text-center text-red-400">
        No result found!
      </h1>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      cols: 'lg:grid-cols-4',
      modal: false,
      imageUrl: this.$axios.imageURL,
      basePath: null,
    }
  },

  created() {
    this.loadSearch()
  },

  mounted() {
    this.basePath = this.$axios.defaults.baseURL
  },

  methods: {
    ...mapActions('search', ['loadSearch']),
    showModal() {
      this.modal = true
    },
    closeModal(e) {
      this.modal = e
    },
  },

  computed: {
    ...mapGetters({
      products: 'search/result',
      isLoading: 'search/isLoading',
    }),
  },
}
</script>
