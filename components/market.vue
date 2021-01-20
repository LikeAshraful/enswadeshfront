<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 lg:px-20 px-3">
            <n-link to="/" class="text-blue-1">Home</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/cities" class="text-blue-1">Go To Market</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/markets" class="text-blue-1">Dhaka</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/market" class="text-blue-1">Eastern Plaza Shopping Complex</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <p>Grand Floor</p>
        </div>
        <!-- End Breadcrumbs -->
        <!-- Market Details -->
        <div class="lg:px-20 px-3 lg:py-6 py-3 grid grid-cols-2 gap-3">
            <div class="flex">
                <img class="h-40 w-2/5 rounded-l-lg" src="~/assets/img/shopping-mall.png" alt="Image">
                <div class="pl-3">
                    <p class="font-bold lg:text-2xl md:text-xl">Eastern Plaza Shopping Complex</p>
                    <div class="flex justify-around text-center font-bold mt-4">
                        <div class="">
                            <p>115</p>
                            <p class="text-gray-2">Registered Shop</p>
                        </div>
                        <div class="">
                            <p>6</p>
                            <p class="text-gray-2">Total floor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                    <n-link v-for="(floor, i) in floors" :key="i" :to="floor.url">
                        <div :class="floor.active" class="border-2 border-gray-2 hover:bg-green-3 rounded-lg text-center p-2">
                            <p>{{ floor.shops }} Shops</p>
                            <p class="font-bold">{{ floor.name }} Floor</p>
                        </div>
                    </n-link>
                </div>
            </div>
        </div>
        <!-- End Market Details -->
        <!-- Shops -->
        <div class="lg:px-20 px-3">
            <p class="font-bold text-2xl">Ground Floor</p>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
                <n-link v-for="(shop, i) in shops" :key="i" :to="shop.url" class="">
                    <img class="h-16 w-full" :src="require(`~/assets/img/${shop.banner}.png`)" alt="Image">
                    <p style="margin-top: -48px;" class="w-full text-center font-bold text-white text-xl mb-5">{{ shop.shop_no }}</p>
                    <img class="h-56 w-full" src="~/assets/img/shutter.png" alt="Image">
                    <p class="w-full text-center font-bold text-xl">{{ shop.name }}</p>
                </n-link>
            </div>
        </div>
        <!-- End Shops -->
        <!-- Paginate -->
        <div class="lg:px-20 px-3 pb-8">
            <Paginate/>
        </div>
        <!-- End Paginate -->
    </div>
</template>
<script>
import Paginate from '~/components/common/paginate.vue';
export default {
    components: {
        Paginate
    },
    data: () => ({
        floors: [
            {url: '', active: 'border-green-4 bg-green-3', shops:'86', name: 'Grand'},
            {url: '', active: '', shops:'86', name: '1st'},
            {url: '', active: '', shops:'50', name: '2nd'},
            {url: '', active: '', shops:'45', name: '3rd'},
            {url: '', active: '', shops:'40', name: '4th'},
            {url: '', active: '', shops:'30', name: '5th'},
        ],
        shops: [
            {url: '/shop', banner: 'banner_blue', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_green', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_green', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_green', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
        ],
    })
}
</script>