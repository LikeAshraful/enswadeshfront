<template>
  <div>
    <!-- Products Section -->
    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-5">
      <!-- Filter -->
      <dataFilter :filtersData="filtersData" :filterTitle="filterTitle" />

      <div class="lg:col-span-3 md:col-span-2">
        <!-- Product tables -->
        <div class="flex justify-between font-bold mb-4">
          <div class="flex items-center border border-gray-2 rounded-full px-3">
            <i class="ri-search-line mr-2"></i>
            <input
              class="focus:outline-none"
              type="text"
              @keyup="getProductsSearchResults"
              v-model="keyword"
              placeholder="Search products"
            />
          </div>
          <n-link
            to="/add-product"
            class="bg-orange-1 text-white rounded-lg py-2 px-4 focus:outline-none"
            >Add Product</n-link
          >
        </div>
        <table class="w-full text-left mb-6">
          <thead>
            <tr class="bg-green-1 h-10">
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price (BDT)</th>
              <th>Avl. Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in products.data" :key="i">
              <td>{{ currentPage * 4 - 4 + i + 1 }}</td>
              <td>
                <img
                  class="w-12 h-12"
                  :src="require(`~/assets/img/products/default.png`)"
                  alt="Image"
                />
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.category.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.total_stocks }}</td>
              <td>
                <n-link to=""><i class="ri-edit-2-fill mr-5"></i></n-link>
                <n-link to=""><i class="ri-delete-bin-2-fill"></i></n-link>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End Product tables -->
        <!-- Paginate -->
        <div class="px-3 pb-8">
          <Paginate
            :totalPages="totalPages"
            :total="total"
            :currentPage="currentPage"
            :perPage="perPage"
            v-on:pagechanged="loadProducts"
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
import DataFilter from '~/components/common/Filter.vue'
import Paginate from '~/components/common/Paginate.vue'

export default {
  components: {
    Paginate,
    DataFilter,
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
      keyword:''
    }
  },

  mounted() {
    this.loadProducts()
    this.loadCategories()
  },

  methods: {
    async loadProducts(value) {
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
        })
        .catch((error) => {
          console.log(error)
        })
    },
    async loadCategories() {
      await this.$axios
        .get('/api/categories/base')
        .then((res) => {
          this.filtersData = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getProductsSearchResults: _.debounce(function (e) {
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
        })
    }, 500),
  },
}
</script>
