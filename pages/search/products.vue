<template>
  <div>
    <p class="text-2xl font-bold">Products search result</p>
    <div class="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
      <div class="mb-8" v-for="(product, i) in products.data" :key="i">
        <div @click="showModal" class="h-full">
          <div class="">
            <img
              class="h-52 w-full"
              :src="
                product.image.src
                  ? basePath + 'storage/' + product.image.src
                  : require(`~/assets/img/products/default.png`)
              "
              alt="Image"
            />
          </div>
          <p class="font-bold pt-2">{{ product.name }}</p>
          <p class="">{{ product.color }}</p>
          <p class="font-bold">{{ product.price }} BDT</p>
        </div>
        <div class="flex justify-between">
          <button class="btn bg-green-3 focus:outline-none">Buy Now</button>
          <button class="btn border-orange-1 focus:outline-none">
            Add to bag
          </button>
        </div>
      </div>
    </div>
    <!-- Product Details -->
    <product-details
      v-if="modal"
      v-on:product-modal="closeModal($event)"
    ></product-details>
  </div>
</template>
<script>
import ProductDetails from '~/components/product-details/Product-details.vue'
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

  components: {
    ProductDetails,
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
