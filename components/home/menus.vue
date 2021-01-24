<template>
  <div>
    <!-- Section One -->
      <div class="grid lg:grid-cols-4 grid-cols-3 lg:gap-8 gap-4">
        <div class="lg:col-span-2 -2 h-96 border-2 border-green-4 border-r-8 border-b-8 rounded-xl">
          <div class="bg-gray-1 pt-12 rounded-t-xl">
            <img class="h-56 m-auto" src="~/assets/img/market.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="/cities" class="bg-green-3 border-2 border-green-4 rounded-xl font-bold my-10 lg:px-8 px-4 lg:py-2 py-1">Go To Market</n-link>
          </div>
        </div>
        <div class="border-2 h-96 border-green-4 border-r-8 border-b-8 rounded-xl">
          <div class="bg-pink-1 pt-12 rounded-t-xl">
            <img class="h-56 m-auto" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="bg-green-3 border-2 border-green-4 rounded-xl font-bold my-10 lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
        <div class="border-2 h-96 border-green-4 border-r-8 border-b-8 rounded-xl">
          <div class="bg-purple-1 pt-12 rounded-t-xl">
            <img class="h-56 m-auto" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="bg-green-3 border-2 border-green-4 rounded-xl font-bold my-10 lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
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
