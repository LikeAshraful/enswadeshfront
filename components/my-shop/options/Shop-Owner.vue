<template>
    <div>
        <p class="font-bold text-3xl">Shops ({{ shops.length }})</p>
        <div v-if="shops.length == 0" class="flex flex-col items-center justify-center my-12">
            <div class="flex items-center justify-center w-32 h-32 bg-green-1 rounded-full">
                <i class="text-4xl text-gray-2 ri-store-fill"></i>
            </div>
            <p class="font-semibold text-xl">You have no shop in Swadesh</p>
            <p>If you want to add a shop, go to the <n-link to="/" class="text-blue-1">Market</n-link> and then add from there.</p>
        </div>
        <div v-if="shops.length >= 0" class="flex flex-col items-center justify-center my-8">
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
                <div v-for="(shop, i) in shops" :key="i" class="">
                    <img class="h-16 w-full" src="~/assets/img/banner_green.png" alt="Image"/>
                    <p
                        style="margin-top: -48px"
                        class="w-full text-center font-bold text-white text-xl mb-5"
                    >
                        {{ shop.shop_no }}
                    </p>
                    <img
                        class="sm:h-48 h-36 w-full"
                        src="~/assets/img/shutter.png"
                        alt="Image"
                    />
                    <p class="w-full text-center font-bold">{{ shop.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shops: [
                {shop_no: '12', name: 'Shop name gose here'},
                {shop_no: '10', name: 'Shop name gose here'},
            ]
        };
    },
}
</script>
