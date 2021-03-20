<template>
    <div>
        <div class="flex">
            <img class="h-40 w-2/5 rounded-l-lg" :src="market.icon ? imagepath + '/' + market.icon : require(`~/assets/img/default_market@2x.png`)" alt="Image">
            <div class="pl-3 w-full">
                <p class="h2 lg:text-2xl">{{market.name}}</p>
                <div class="flex justify-around gap-2 text-center font-semibold mt-4">
                    <div class="bg-white rounded-md w-full p-2">
                        <p>{{market.shop_count}}</p>
                        <p class="text-gray-2">Registered Shop</p>
                    </div>
                    <div class="bg-white rounded-md w-full p-2">
                        <p>{{market.total_floor}}</p>
                        <p class="text-gray-2">Total floor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['market', 'basePath'],
  data() {
    return {
      imagepath: this.$axios.defaults.baseURL,
    }
  },
}
</script>
