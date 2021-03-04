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
                    <div class="border border-gray-4 px-2 py-1 rounded-l-full">
                      <select class="focus:outline-none font-semibold" name="" id="">
                        <option value="All" selected>All</option>
                        <option value="Shop">Shop</option>
                        <option value="Product">Product</option>
                      </select>
                    </div>
                    <div style="margin-left: -1px;" class="flex items-center border border-gray-4 px-2 py-1 rounded-r-full overflow-hidden">
                      <i class="ri-search-line mr-2"></i>
                      <input class="focus:outline-none w-full font-semibold" type="text" placeholder="Search anything">
                    </div>
                  </div>
                  <!-- <n-link :to="{ name:'shop-create', params:{city_id:market.city.id, city:market.city.name, area_id:market.area.id, area_name:market.area.name, market_id, market_name} }" class="bg-orange-1 text-white rounded-lg py-2 px-4">Add Shop</n-link> -->
                  <button type="button" @click="$router.push({name:'shop-create', params:{city_id:market.city.id,  area_id:market.area.id, market_id:market.id, market_name:market.name}} )" class="bg-orange-1 text-white rounded-full focus:outline-none py-1 px-4">Add Shop</button>
               </div>
            </div>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-4 gap-3 py-8">
                <div v-for="(shop, i) in shops" :key="i" class="">
                  <NuxtLink :to="{name:'shop-slug-id', params:{slug: shop.slug, id: shop.id} }">
                      <img class="h-16 w-full" :src=" shop.logo ? basePath + 'storage/' + shop.logo : require(`~/assets/img/banner_green.png`) " alt="Image">
                      <p style="margin-top: -48px;" class="w-full text-center font-bold text-white text-xl mb-5">{{ shop.shop_no }}</p>
                      <img class="sm:h-56 h-40 w-full" src="~/assets/img/shutter.png" alt="Image">
                      <p class="w-full text-center font-bold lg:text-xl">{{ shop.shop_name }}</p>
                  </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // data(){
    //   return {
    //     market: ''
    //   }
    // },
    props: ['shops', 'basePath', 'market'],

    methods:{
      shopInfo(market) {
        this.$router.push('/shop-create');
        console.log(market);
        if(process.browser){
          localStorage.setItem("shopOrigin", market);
        }
      }
    }
}
</script>
