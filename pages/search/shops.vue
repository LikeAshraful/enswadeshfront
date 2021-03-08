<template>
    <div>
        <p class="text-2xl font-bold">Shops search result</p>
        <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
            <div v-for="(shop, i) in shops" :key="i" class="">
                <NuxtLink :to="{name:'shop-slug-id', params:{slug: shop.slug, id: shop.id} }">
                    <img class="h-16 w-full" :src=" shop.logo ? basePath + 'storage/' + shop.logo : require(`~/assets/img/banner_green.png`) " alt="Image">
                    <p style="margin-top: -48px;" class="w-full text-center font-bold text-white text-xl mb-5">{{ shop.shop_no }}</p>
                    <img class="sm:h-40 h-32 w-full" src="~/assets/img/shutter.png" alt="Image">
                    <p class="w-full text-center font-bold">{{ shop.name }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            shops: [
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
                {shop_no: '12', name: 'Search market name'},
            ],
        }
    },
}
</script>
