<template>
  <div>
    <!-- Products Section -->
    <div class="grid lg:grid-cols md:grid-cols-3 gap-4 my-5">
      <div class="lg:col-span-3 md:col-span-2">
        <!-- Product tables -->
        <div class="flex justify-between font-bold mb-4">
          <div class="search">
            <i class="search-icon ri-search-line mr-2"></i>
            <input
              class="search-input bg-gray-5 focus:outline-none"
              type="text"
              @keyup="getProductsSearchResults"
              v-model="keyword"
              placeholder="Search products"
            />
          </div>
        </div>
        <loader v-if="isLoading"></loader>
        <table v-else class="w-full text-left mb-6">
          <thead>
            <tr class="bg-green-1 h-10">
              <th>#</th>
              <th>Order No</th>
              <th>Payment Method</th>
              <th>Order Status</th>
              <th>Date</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in products.data" :key="i">
              <td>{{ currentPage * 4 - 4 + i + 1 }}</td>
              <td>0282032932</td>
              <td>COD</td>
              <td>Pending</td>
              <td>08-April-20121</td>
              <td>720</td>
              <td></td>
            </tr>
          </tbody>
        </table>
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
        <!-- End Paginate -->
      </div>
    </div>
    <!-- End Products Section -->
  </div>
</template>
<script>
import _ from 'lodash'
import Paginate from '~/components/common/Paginate.vue'

export default {
  components: {
    Paginate,
  },
  data() {
    return {
      filterTitle: 'Categories',
      keyword: '',
      filtersData: [],
      totalPages: 0,
      total: 0,
      currentPage: 0,
      perPage: 0,
      products: [],
      keyword: '',
      isLoading: true,
      move: false,
      notification: false,
      flash: false,
      festival: false,
      product: '',
    }
  },

  mounted() {
    this.loadCategories()
    this.loadProducts()
    this.loadProductsPaginate()
  },

  methods: {
    moveTrash(product) {
      this.product = product
      this.loadProducts()
      this.move = !this.move
    },
    notify() {
      this.notification = !this.notification
    },
    flashSale() {
      this.flash = !this.flash
    },
    addFestival() {
      this.festival = !this.festival
    },

    async loadCategories() {
      await this.$axios
        .get(
          this.$auth.isLoading ? '/api/categories/base' : '/api/base/categories'
        )
        .then((res) => {
          this.filtersData = res.data
        })
        .catch((error) => {
          console.log(error)
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

    getProductsSearchResults: _.debounce(function (e) {
      this.isLoading = true
      this.$axios
        .post('/api/search/products/', {
          params: { keyword: this.keyword, id: this.$route.params.id },
        })
        .then((res) => {
          this.products = res.data.data
          this.total = this.products.meta.total
          this.totalPages = this.products.meta.last_page
          this.currentPage = this.products.meta.current_page
          this.perPage = this.products.meta.per_page
          this.isLoading = false
        })
    }, 500),
  },
}
</script>
