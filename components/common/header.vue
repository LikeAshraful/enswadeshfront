<template>
  <div>
    <div class="w-full lg:py-5 p-3">
      <div class="lg:w-11/12 xl:w-10/12 w-full m-auto grid grid-cols-12 gap-2">
        <div class="col-span-5 font-bold">
          <n-link to="" class="">
            <img class="inline h-5 mx-2" src="~/assets/icons/wallet.png" alt="Icon">S-Wallet
          </n-link>
          <n-link to="" class="pl-3">
            <img class="inline h-5 mx-2" src="~/assets/icons/earn.png" alt="Icon">Earn
          </n-link>
          <n-link to="/my-shop" class="pl-3">
            <img class="inline h-5 mx-2" src="~/assets/icons/shop.png" alt="Icon">My Shop
          </n-link>
        </div>
        <div class="col-span-2 text-center">
          <n-link to="/" class="font-serif text-4xl">Swadesh</n-link>
        </div>
        <div class="">
          <!-- Offset -->
        </div>
        <div class="col-span-3">
          <div class="flex justify-end">
            <div class="border border-gray-2 px-2 py-1 rounded-l-full">
              <button class="flex items-center focus:outline-none font-bold">All<img class="h-5" src="~/assets/icons/drop_down.png" alt="Icon">
              </button>
            </div>
            <div style="margin-left: -1px;" class="flex items-center border border-gray-2 px-2 py-1 rounded-r-full">
              <img class="h-4 mr-1" src="~/assets/icons/search.png" alt="Icon">
              <input class="focus:outline-none w-full font-bold" type="text" placeholder="Search anything">
            </div>
          </div>
        </div>
        <div class="text-right">
          <n-link to="">
            <img class="inline h-5 mr-2" src="~/assets/icons/user.png" alt="Icon">
          </n-link>
          <n-link to="">
            <img class="inline h-5" src="~/assets/icons/shopping.png" alt="Icon">
          </n-link>
        </div>
      </div>
    </div>
    <div class="lg:w-11/12 xl:w-10/12 w-full m-auto p-3 font-bold text-center">
      <n-link to="/cities">
        <img class="inline h-5 mx-2" src="~/assets/icons/market.png" alt="Icon"> Market
      </n-link>
      <n-link to="" class="pl-6">
        <img class="inline h-5 mx-2" src="~/assets/icons/flash_sales.png" alt="Icon"> Flash Sales
      </n-link>
      <n-link to="" class="pl-6">
        <img class="inline h-5 mx-2" src="~/assets/icons/festivals.png" alt="Icon"> Festivals
      </n-link>
      <n-link to="" class="pl-6">
        <img class="inline h-5 mx-2" src="~/assets/icons/discount.png" alt="Icon"> Discount
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
