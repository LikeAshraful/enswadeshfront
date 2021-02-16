<template>
    <div>
        <!-- All Products -->
        <p class="text-2xl font-black">All Products</p>
        <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
          {{imageUrl}}
            <div v-for="(product, i) in products.data" :key="i" >
              <NuxtLink to="/">
                <div @click="showModal" class="">
                    <div class="">
                        <img class="h-52 w-full" :src="product.image.src ? basePath + 'storage/' + product.image.src : require(`~/assets/img/products/default.png`)" alt="Image">
                    </div>
                    <p class="font-bold pt-2">{{ product.name }}</p>
                    <p class="">{{ product.color }}</p>
                    <p class="font-bold">{{ product.price }} BDT</p>
                </div>
              </NuxtLink>
            </div>
        </div>
        <!-- Paginate -->
        <div class="px-3 pb-8">
            <Paginate :totalPages="totalPages" :total="total" :currentPage="currentPage" :perPage="perPage" v-on:pagechanged="loadProducts" />
        </div>

        <!-- Product Details -->
        <product-details v-if="modal" v-on:product-modal="closeModal($event)"></product-details>

    </div>
</template>
<script>
import Paginate from '~/components/common/Paginate.vue';
import ProductDetails from '~/components/product-details/Product-details.vue';

export default {
    props:['basePath'],

    data(){
        return {
            modal: false,
            totalPages:0,
            total:0,
            currentPage:0,
            perPage:0,
            products:[],
            imageUrl: this.$axios.imageURL,
        }
    },
    components: {
        Paginate,
        ProductDetails,
    },

    mounted() {
        this.loadProducts();
        console.log(this.imageUrl);
    },

    methods: {
        showModal(){
            this.modal = true;
        },
        closeModal(e){
            this.modal = e;
        },
        async loadProducts(value) {
            await this.$axios.get(
                '/api/products-by-shop/' + this.$route.params.id + '?page=' + value
                ).then((res) => {
                this.products = res.data.data;
                this.total = this.products.meta.total;
                this.totalPages = this.products.meta.last_page;
                this.currentPage = this.products.meta.current_page;
                this.perPage = this.products.meta.per_page;
                
                console.log(this.products);
            })
        }
    },
}
</script>
