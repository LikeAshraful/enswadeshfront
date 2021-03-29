<template>
   <div>
    <!-- All Products -->
    <div class="flex justify-between">
      <p class="h2">All Products</p>
      <div
        class="search"
      >
        <i class="search-icon ri-search-line mr-2"></i>
        <input
          class="search-input focus:outline-none"
          type="text"
          @keyup="getProductsSearchResults"
          v-model="keyword"
          placeholder="Search Products"
        />
      </div>
    </div>
    <loader v-if="isLoading"></loader>
    <div v-else class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
        <div class="target-area" v-for="(product, i) in products.data" :key="i" >
          <!-- <NuxtLink to="/"> -->
            <div @click="showModal(product, product.name, product.slug, product.id)" class="cursor-pointer h-full mb-10">
                <div class="">
                    <img class="h-52 w-full" :src="product.thumbnail ? basePath + '/storage/' + product.thumbnail : require(`~/assets/img/products/default.png`)" alt="Image">
                </div>
                <p class="font-semibold pt-2">{{ product.name }}</p>
                <p class="">{{ product.color }}</p>

                <p v-if="product.sizes.length > 0" class="font-bold">
                  <span>{{product.lowsizeprice ? product.lowsizeprice.price : ''}} - {{product.highsizeprice ? product.highsizeprice.price : ''}} {{product.currency_type}}</span>
                </p>

                <p v-else-if="product.weights.length > 0" class="font-bold">
                  <span>{{product.lowweightprice ? product.lowweightprice.price : ''}} - {{product.highweightprice ? product.highweightprice.price : ''}} {{product.currency_type}}</span>
                </p>

                <p v-else class="font-bold">
                  <span>{{ product.discount_price }} {{product.currency_type}}</span>
                  <span v-if="product.discount" class="text-gray-4 ml-4 line-through">{{product.price}} {{product.currency_type}}</span>
                </p>
            </div>
            <div class="hover-area-btns left-0 bottom-0 right-0">
              <div class="flex justify-between">
                  <button class="btn bg-green-3 focus:outline-none">Buy Now</button>
                  <button class="btn border-orange-1 bg-white focus:outline-none">Add to bag</button>
              </div>
            </div>
          <!-- </NuxtLink> -->
          <!-- <div class="target-area">
            <img class="h-16 w-full" src="~/assets/img/banner_green.png" alt="Image"/>
            <p class="absolute top-0 mt-4 w-full text-center font-bold text-white text-xl mb-5" >101</p>
            <img class="sm:h-56 h-40 w-full" src="~/assets/img/shutter.png" alt="Image" />
            <p class="w-full text-center font-bold">Shop name gose hear</p>

            <div class="hover-area top-0 left-0 bottom-0 right-0 bg-gray-2 opacity-50"></div>
            <div class="hover-area top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center">
                <button class="btn-border focus:outline-none bg-green-3 mb-4">Control Room</button>
                <button class="btn-border focus:outline-none">Visit Shop</button>
            </div>
          </div> -->
        </div>
    </div>
    <!-- Product Details -->
    <product-details v-if="modal" :product="product" :basePath="basePath" v-on:product-modal="closeModal($event)"></product-details>
  </div>
</template>
<script>
import _ from 'lodash'
import ProductDetails from '~/components/product-details/Product-details.vue'

export default {
  props: ['basePath', 'products', 'isLoading'],

  data(){
    return {
      modal: false,
      imageUrl: this.$axios.imageURL,
      keyword: null,
      product:{},
    }
  },

  components: {
    ProductDetails,
  },

  methods: {
      showModal(product, name, slug, id){
          this.product = Object.assign({}, product)
          this.modal = true;
          localStorage.setItem('product', name);
          localStorage.setItem('product-url', '/product/'+slug+'/'+id);
      },
      closeModal(e){
          this.modal = e;
      },
      getProductsSearchResults: _.debounce(function (e) {
          this.$axios.post('/api/search/products/', { params: { keyword: this.keyword, id: this.$route.params.id } })
              .then(res => {
                  this.products = res.data.data;
                  this.total = this.products.meta.total;
                  this.totalPages = this.products.meta.last_page;
                  this.currentPage = this.products.meta.current_page;
                  this.perPage = this.products.meta.per_page;
              })
      }, 500),

  },
}
</script>
