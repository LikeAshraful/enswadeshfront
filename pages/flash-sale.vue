<template>
  <div>
    <p class="text-2xl font-bold">Flash Sale</p>
    <product-grid :products="products" :basePath="basePath"></product-grid>
  </div>
</template>
<script>
import ProductGrid from '../components/products/ProductGrid.vue'

export default {
  components: {
    ProductGrid,
  },

  data() {
    return {
      imageUrl: this.$axios.imageURL,
      basePath: null,
      products:[],
    }
  },

  mounted() {
    this.basePath = this.$axios.defaults.baseURL,
    this.getProducts()
  },

  methods: {
    async getProducts() {
      await this.$axios.$get(
          '/api/flash-sale'
        ).then((res) => {
          this.products = res.data;
        })
    },
  },

}
</script>
