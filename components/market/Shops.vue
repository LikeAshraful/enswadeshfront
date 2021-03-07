<template>
    <div>
        <!-- Shops -->
        <div class="">
             <div class="flex justify-between font-bold mb-4">
               <div class="left">
                  <p class="font-bold text-2xl">Ground Floor</p>
               </div>
               <div class="right flex justify-between gap-4">
                  <div class="flex flex-row items-center justify-center">
                    <div style="margin-left: -1px;" class="flex items-center border border-gray-4 px-2 py-1 rounded-l-full rounded-r-full overflow-hidden">
                      <i class="ri-search-line mr-2"></i>
                      <input @keyup="searchShopByMarket" v-model="keyword" class="focus:outline-none w-full font-semibold" type="text" placeholder="Search shops">
                    </div>
                  </div>
                  <button type="button" @click="$router.push({name:'shop-create', params:{city_id:market.city.id,  area_id:market.area.id, market_id:market.id, market_name:market.name}} )" class="bg-orange-1 text-white rounded-full focus:outline-none py-1 px-4">Add Shop</button>
               </div>
            </div>
            <div v-if="shopss.length === 0" class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
                <div v-for="(shop, i) in shops" :key="i" class="">
                  <NuxtLink :to="{name:'shop-slug-id', params:{slug: shop.slug, id: shop.id} }">
                      <img class="h-16 w-full" :src=" shop.logo ? basePath + 'storage/' + shop.logo : require(`~/assets/img/banner_green.png`) " alt="Image">
                      <p style="margin-top: -48px;" class="w-full text-center font-bold text-white text-xl mb-5">{{ shop.shop_no }}</p>
                      <img class="sm:h-56 h-40 w-full" src="~/assets/img/shutter.png" alt="Image">
                      <p class="w-full text-center font-bold">{{ shop.name }}</p>
                  </NuxtLink>
                </div>
            </div>
            <div v-else class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
                <div v-for="(shop, i) in shopss.data" :key="i" class="">
                  <NuxtLink :to="{name:'shop-slug-id', params:{slug: shop.slug, id: shop.id} }">
                      <img class="h-16 w-full" :src=" shop.logo ? basePath + 'storage/' + shop.logo : require(`~/assets/img/banner_green.png`) " alt="Image">
                      <p style="margin-top: -48px;" class="w-full text-center font-bold text-white text-xl mb-5">{{ shop.shop_no }}</p>
                      <img class="sm:h-56 h-40 w-full" src="~/assets/img/shutter.png" alt="Image">
                      <p class="w-full text-center font-bold">{{ shop.name }}</p>
                  </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import _ from "lodash"
export default {
    data() {
      return {
        keyword: '',
        shopss: []
      }
    },
    props: ['shops', 'basePath', 'market'],
    methods:{
      searchShopByMarket: _.debounce(function (e) {
            this.$axios.post('/api/shops/search/shops-by-market/', { params: { keyword: this.keyword, id: this.market.id } })
                .then(res => {
                    this.shopss = res.data.data;
                    console.log(this.shopss)
                })
        }, 500),
    }
}
</script>
