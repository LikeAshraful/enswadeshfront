<template>
    <div>
        <!-- All Products -->
        <div class="flex justify-between">
            <p class="text-2xl font-black">All Products</p>
            <div style="margin-left: -1px;" class="flex items-center border border-gray-2 px-3 py-1 rounded-full overflow-hidden">
                <img class="h-4 mr-1" src="~/assets/icons/search.png" alt="Icon">
                <input class="focus:outline-none w-full font-bold" type="text" @keyup="getProductsSearchResults"  v-model="keyword" placeholder="Search Products">
            </div>
        </div>
        <loader v-if="isLoading"></loader>
        <div v-else class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
            <div class="mb-8" v-for="(product, i) in products.data" :key="i" >
              <!-- <NuxtLink to="/"> -->
                <div @click="showModal(product)" class="h-full">
                    <div class="">
                        <img class="h-52 w-full" :src="product.image.src ? basePath + 'storage/' + product.image.src : require(`~/assets/img/products/default.png`)" alt="Image">
                    </div>
                    <p class="font-bold pt-2">{{ product.name }}</p>
                    <p class="">{{ product.color }}</p>
                    <p class="font-bold">{{ product.price }} BDT</p>
                </div>
                <div class="flex justify-between">
                    <button class="btn bg-green-3 focus:outline-none">Buy Now</button>
                    <button class="btn border-orange-1 focus:outline-none">Add to bag</button>
                </div>
              <!-- </NuxtLink> -->
            </div>
        </div>
        <!-- Product Details -->
        <product-details v-if="modal" :product="product" :basePath="basePath" v-on:product-modal="closeModal($event)"></product-details>

    </div>
</template>
<script>
import _ from "lodash"
import ProductDetails from '~/components/product-details/Product-details.vue';

export default {
    props:['basePath', 'products', 'isLoading'],

    data(){
      return {
        modal: false,
        imageUrl: this.$axios.imageURL,
        keyword: null,
        product:{}
      }
    },
    components: {
        ProductDetails,
    },

    mounted() {
        // this.showModal();
    },

    methods: {
        showModal(product){
            this.product = Object.assign({}, product)
            this.modal = true;
        },
        closeModal(e){
            this.modal = e;
        },
        getProductsSearchResults: _.debounce(function (e) {
          console.log(this.keyword);
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
