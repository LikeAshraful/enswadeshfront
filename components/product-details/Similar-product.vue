<template>
    <div>
        <div class="flex justify-between">
            <p class="h1">Similar Products</p>
            <div class="flex text-xl font-bold">
                <button class="border-2 rounded-full w-12 h-12 text-xl mr-4 hover:bg-green-3 focus:outline-none"><i class="ri-arrow-left-line"></i></button>
                <button class="border-2 rounded-full w-12 h-12 text-xl mr-4 hover:bg-green-3 focus:outline-none"><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
        <div class="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4 pt-6 pb-6">
            <div v-for="(product, i) in products" :key="i">
                <div class="h-full">
                    <div class="">
                        <img class="h-52 w-full" src="~/assets/img/products/default.png" alt="Image"/>
                    </div>
                    <p class="font-semibold pt-2">{{ product.name }}</p>
                    <p class="">{{ product.color }}</p>
                    <p class="font-semibold">{{ product.price }} BDT</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                {name: 'Product name gose here', color: 'Red', price: '1200'},
                {name: 'Product name gose here', color: 'Red', price: '1200'},
                {name: 'Product name gose here', color: 'Red', price: '1200'},
                {name: 'Product name gose here', color: 'Red', price: '1200'},
            ]
        }
    },
}
</script>
