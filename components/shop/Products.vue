<template>
    <div>
        <!-- All Products -->
        <p class="text-2xl font-black">All Products</p>
        <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
          <!-- {{products}} -->
            <div v-for="(product, i) in products.data" :key="i" >
              <NuxtLink to="/">
                <div @click="showModal" class="">
                    <div class="">
                        <img class="h-52 w-full" :src="product.image ? basePath + '/storage/' + product.image.src : require(`~/assets/img/products/default.png`)" alt="Image">
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
            <Paginate/>
        </div>

        <!-- Product Details -->
        <product-details v-if="modal" v-on:product-modal="closeModal($event)"></product-details>

    </div>
</template>
<script>
import Paginate from '~/components/common/Paginate.vue';
import ProductDetails from '~/components/product-details/Product-details.vue';

export default {
    props:['products', 'basePath'],

    data:() => ({
        modal: false,

        // products: [
        //     {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
        //     {url: '', photo: 'img-2', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
        //     {url: '', photo: 'img-3', color: 'Black & White', price:'1195 BDT', name: 'Ceiling circle black electric  deem lamp'},
        //     {url: '', photo: 'img-4', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
        //     {url: '', photo: 'img-5', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
        //     {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Table lamp'},
        //     {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
        //     {url: '', photo: 'img-2', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
        //     {url: '', photo: 'img-3', color: 'Black & White', price:'1195 BDT', name: 'Ceiling circle black electric  deem lamp'},
        //     {url: '', photo: 'img-4', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
        //     {url: '', photo: 'img-5', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
        //     {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Table lamp'},
        // ],
    }),
    components: {
        Paginate,
        ProductDetails,
    },
    methods: {
        showModal(){
            this.modal = true;
        },
        closeModal(e){
            this.modal = e;
        }
    },
}
</script>
