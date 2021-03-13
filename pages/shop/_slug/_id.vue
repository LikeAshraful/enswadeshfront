<template>
  <div>
    <!-- Breadcrumbs -->
    <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

    <div class="lg:py-6 py-3 grid sm:grid-cols-2 gap-3">
      <!-- Shop thumbnail -->
      <shop-thumbnail></shop-thumbnail>
      <!-- Shop Details -->
      <shopDetails :shop="shop"></shopDetails>
    </div>
    <!-- Slider -->
    <slider></slider>
    <div class="">
      <div class="grid lg:grid-cols-4 sm:grid-cols-3 gap-4 my-5">
        <!-- Filter -->
        <dataFilter
          :filtersData="filtersData"
          :filterTitle="filterTitle"
          v-on:filterByData="loadProducts"
        />
        <div class="lg:col-span-3 sm:col-span-2">
          <!-- All Products -->
          <products
            :basePath="basePath"
            :products="products"
            :isLoading="isLoading"
          ></products>
          <!-- Paginate -->
          <div class="px-3 pb-8">
            <Paginate
              :totalPages="totalPages"
              :total="total"
              :currentPage="currentPage"
              :perPage="perPage"
              v-on:pagechanged="loadProductsPaginate"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Slider from '~/components/shop/Slider.vue'
import ShopDetails from '~/components/shop/ShopDetails.vue'
import ShopThumbnail from '~/components/shop/ShopThumbnail.vue'
import DataFilter from '~/components/common/Filter.vue'
import Products from '~/components/shop/Products.vue'
import Paginate from '~/components/common/Paginate.vue'

export default {
  components: {
    Breadcrumb,
    Slider,
    ShopDetails,
    ShopThumbnail,
    DataFilter,
    Products,
    Paginate,
  },
  data() {
    return {
      basePath: this.$axios.defaults.baseURL,

      breadCrumbs: [
        {title: 'Home', url: '/'},
        {title: 'Go To Market', url: '/cities'},
        {title: '', url: ''},
        {title: '', url: ''},
        {title: '', url: ''},
        {title: '', url: ''},
      ],

      filterTitle: 'Categories',
      filtersData: [],
      shop: {},
      products: [],
      totalPages: 0,
      total: 0,
      currentPage: 0,
      perPage: 0,
      isLoading: true,
    }
  },
  mounted() {
    this.loadData()
    this.loadProducts()
    this.loadProductsPaginate()
    this.getBreadCrumbItems();
  },
  methods: {
    async loadData() {
      await this.$axios.get('/api/categories/base').then((res) => {
        this.filtersData = res.data
      }),
        await this.$axios
          .get('/api/shops/' + this.$route.params.id)
          .then((res) => {
            this.shop = res.data.data
          })
    },

    async loadProducts(id, isLoading) {
      this.isLoading = isLoading
      await this.$axios
        .get(
          id
            ? '/api/products-by-shop/category/' +
                this.$route.params.id +
                '/' +
                id
            : '/api/products-by-shop/' + this.$route.params.id
        )
        .then((res) => {
          this.products = res.data.data
          this.isLoading = false
        })
    },
    async loadProductsPaginate(value) {
      await this.$axios
        .get(
          '/api/products-by-shop/' + this.$route.params.id + '?page=' + value
        )
        .then((res) => {
          this.products = res.data.data
          this.total = this.products.meta.total
          this.totalPages = this.products.meta.last_page
          this.currentPage = this.products.meta.current_page
          this.perPage = this.products.meta.per_page
          this.isLoading = false
        })
    },
    getBreadCrumbItems()
    {
      this.breadCrumbs[2].title = localStorage.getItem('city');
      this.breadCrumbs[2].url = localStorage.getItem('city-url');
      this.breadCrumbs[3].title = localStorage.getItem('market');
      this.breadCrumbs[3].url = localStorage.getItem('market-url');
      this.breadCrumbs[4].title = localStorage.getItem('floor');
      this.breadCrumbs[4].url = localStorage.getItem('market-url');
      this.breadCrumbs[5].title = localStorage.getItem('shop');
      // this.breadCrumbs[5].url = localStorage.getItem('shop-url');
    }
  },
}
</script>
