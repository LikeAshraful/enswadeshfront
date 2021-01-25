<template>
    <div>
        <!-- All Products -->
        <p class="text-2xl font-black">All Products</p>
        <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
            <n-link v-for="(product, i) in products" :key="i" :to="product.url">
                <div class="">
                    <div class="">
                        <img class="h-52 w-full" :src="require(`~/assets/img/products/${product.photo}.png`)" alt="Image">
                    </div>
                    <p class="font-bold pt-2">{{ product.name }}</p>
                    <p class="">{{ product.color }}</p>
                    <p class="font-bold">{{ product.price }}</p>
                </div>
            </n-link>
        </div>
        <!-- Paginate -->
        <div class="px-3 pb-8">
            <Paginate/>
        </div>
    </div>
</template>
<script>
import Paginate from '~/components/common/paginate.vue';

export default {
    data:() => ({
        products: [
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-2', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-3', color: 'Black & White', price:'1195 BDT', name: 'Ceiling circle black electric  deem lamp'},
            {url: '', photo: 'img-4', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-5', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Table lamp'},
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-2', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-3', color: 'Black & White', price:'1195 BDT', name: 'Ceiling circle black electric  deem lamp'},
            {url: '', photo: 'img-4', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-5', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Table lamp'},
        ],
    }),
    components: {
        Paginate,
    }
}
</script>