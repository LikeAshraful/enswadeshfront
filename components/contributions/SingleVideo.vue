<template>
  <div>
    <div class="min-h-screen">
      <div class="grid md:grid-cols-2 gap-6 py-6">
        <div class="relative pb-3/5">
          <img class="absolute h-full w-full" src="~/assets/img/video.png" alt="Image">
        </div>
        <div class="relative">
          <p class="text-gray-4">05 Mar, 2021 | 1.3K views</p>
          <p class="h2">Video title will be show here</p>
          <div class="flex items-center py-2">
            <img class="w-16 h-16 rounded-full mr-3" src="~/assets/img/products/default.png" alt="Image">
            <strong>Profile name</strong>
          </div>
          <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt obcaecati commodi dolorem nobis, veritatis, eveniet nisi fugiat nam vel aut mollitia, repellat expedita aperiam itaque in aspernatur sed temporibus.</p>
          <nuxt-link class="font-bold text-blue-1" to="">Read more</nuxt-link>

          <div class="flex absolute bottom-0">
            <button class="px-6 py-1 font-bold text-gray-4 bg-gray-3 flex items-center mr-3 hover:bg-blue-1 hover:text-white focus:outline-none"><i class="ri-thumb-up-fill mr-2"></i>Like</button>
            <button class="px-6 py-1 font-bold text-gray-4 bg-gray-3 flex items-center hover:bg-blue-1 hover:text-white focus:outline-none"><i class="ri-share-forward-fill mr-2"></i>Share</button>
          </div>
        </div>
      </div>


      <div class="flex items-center gap-6 border-t border-gray-3 pt-3">
        <img class="w-12 h-12 rounded-full" src="~/assets/img/products/default.png" alt="Image">
        <input class="w-full bg-white py-1 px-2 border border-gray-3 focus:outline-none" type="text" placeholder="Add a public comment">
        <button class="px-4 py-1 font-bold text-gray-4 bg-gray-3 flex items-center hover:bg-blue-1 hover:text-white focus:outline-none">Submit</button>
      </div>


      <div v-for="(comment, i) in comments" :key="i" class="border-b border-gray-3 py-3">
        <div class="flex justify-between items-center">
          <strong>John Doe</strong>
          <small class="text-gray-4">05 Mar, 2021</small>
        </div>
        <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt obcaecati commodi dolorem nobis, veritatis, eveniet nisi fugiat nam vel aut mollitia, repellat expedita aperiam itaque in aspernatur sed temporibus.</p>
        <button class="px-3 py-1 font-bold text-gray-4 bg-gray-3 flex items-center mr-3 hover:bg-blue-1 hover:text-white focus:outline-none"><i class="ri-thumb-up-fill mr-2"></i>Approve</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    data() {
      return {
        comments: [
          '',
          '',
          '',
          '',
        ]
      }
    }
}
</script>
