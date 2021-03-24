<template>
  <div>
    <!-- Section One -->
      <div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-4 gap-2">
        <div class="lg:col-span-2 sm:col-span-1 col-span-2 border-2 border-green-4 md:border-r-8 md:border-b-8 border-r-4 border-b-4 rounded-xl">
          <div class="bg-gray-1 pt-12 rounded-t-xl">
            <img class="lg:h-56 md:h-40 h-24 m-auto" src="~/assets/img/market.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center bg-white rounded-b-lg">
            <n-link to="/cities" class="bg-green-3 border-2 border-green-4 rounded-lg font-bold lg:my-10 md:my-6 sm:my-4 my-3 lg:px-8 px-4 lg:py-2 py-1">Go To Market</n-link>
          </div>
        </div>
        <div class="border-2 border-green-4 md:border-r-8 md:border-b-8 border-r-4 border-b-4 rounded-xl">
          <div class="bg-pink-1 pt-12 rounded-t-xl">
            <img class="lg:h-56 md:h-40 h-24 m-auto" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center bg-white rounded-b-lg">
            <n-link to="" class="bg-green-3 border-2 border-green-4 rounded-lg font-bold lg:my-10 md:my-6 sm:my-4 my-3 lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
        <div class="border-2 border-green-4 md:border-r-8 md:border-b-8 border-r-4 border-b-4 rounded-xl">
          <div class="bg-purple-1 pt-12 rounded-t-xl">
            <img class="lg:h-56 md:h-40 h-24 m-auto" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center bg-white rounded-b-lg">
            <n-link to="" class="bg-green-3 border-2 border-green-4 rounded-lg font-bold lg:my-10 md:my-6 sm:my-4 my-3 lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "menus"
}
</script>
