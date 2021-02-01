<template>
    <div>
        <!-- Shops -->
        <div class="">
            <p class="font-bold text-2xl">Ground Floor</p>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
                <n-link v-for="(shop, i) in shops" :key="i" :to="shop.url" class="">
                    <img class="h-16 w-full" :src="require(`~/assets/img/${shop.banner}.png`)" alt="Image">
                    <p style="margin-top: -48px;" class="w-full text-center font-bold text-white text-xl mb-5">{{ shop.shop_no }}</p>
                    <img class="sm:h-56 h-40 w-full" src="~/assets/img/shutter.png" alt="Image">
                    <p class="w-full text-center font-bold lg:text-xl">{{ shop.name }}</p>
                </n-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['shops']
}
</script>