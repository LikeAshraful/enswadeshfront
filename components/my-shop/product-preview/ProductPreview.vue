<template>
  <div>
    <div
      @click="closeModal"
      class="fixed inset-0 z-50 flex flex-col justify-center items-center xl:m-10 m-2"
    >
      <div @click="wait" class="focus-in max-w-screen-xl shadow-lg bg-white overflow-auto">
        <div class="md:col-span-4">
            <div class="w-full text-right pr-1 md:bg-white bg-green-4 md:text-green-4 text-white">
              <button
                @click="closeModal"
                class="text-2xl focus:outline-none"
              >
                <i class="ri-close-line"></i>
              </button>
            </div>
            <div class="md:p-6 p-2">
              
              





              
              <div class="grid sm:grid-cols-7 lg:gap-12 md:gap-4 sm:gap-2 py-4">
                <div class="sm:col-span-2">
                    <div class="relative pb-full">
                        <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                    </div>

                        <div class="grid grid-cols-4 gap-2 mt-2">
                        <div class="relative pb-3/4" v-for="(photo, i) in photos" :key="i">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-3 sm:mt-0 mt-4">
                    <p class="font-bold text-2xl mb-2">Product name gose here</p>
                    <!-- <div class="flex items-center gap-8">
                        <p class="bg-green-4 px-2 py-1 text-white inline">
                            4.5<i class="ri-star-fill ml-2 text-yellow-2"></i>
                        </p>
                        <p class="font-semibold text-blue-1">Rate this product</p>
                    </div> -->
                    Product type
                    <table class="w-full mt-4">
                        <tbody>
                            <tr>
                                <td>Price:</td>
                                <td class="font-semibold">
                                  <span>100 TK</span>
                                  <span class="text-gray-4 ml-4 line-through">90 TK</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Stock:</td>
                                <td class="font-semibold">Available</td>
                                <!-- <td v-else class="text-red-500 font-semibold">Unavailable</td> -->
                            </tr>
                            <tr>
                                <td>Brand:</td>
                                <td class="font-semibold">Brand Name</td>
                            </tr>
                            <tr>
                                <td>SKU:</td>
                                <td class="font-semibold">SKU</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                      <p class="font-semibold mt-4">Available Offers</p>
                      <ul>
                          <li><p>Offers</p></li>
                      </ul>
                    </div>
                    <p class="font-semibold mt-4 mb-2">Quantity</p>

                    <div class="grid grid-cols-2 gap-3 mb-3">
                        <div class="grid grid-cols-4 rounded border border-gray-3 font-semibold">
                            <button @click="minus" class="focus:outline-none bg-gray-3 rounded-l text-xl flex items-center justify-center">
                                <i class="ri-subtract-line"></i>
                            </button>
                            <div class="col-span-2 text-center py-1">
                                {{ quantity }}
                            </div>
                            <button @click="plus" class="focus:outline-none bg-gray-3 rounded-r text-xl flex items-center justify-center">
                                <i class="ri-add-fill"></i>
                            </button>
                        </div>
                        <n-link to="" class="border bg-green-3 border-gray-2 rounded py-1 w-full font-semibold text-center">Buy now</n-link>
                    </div>
                    <div class="flex gap-3 justify-between">
                        <button class="focus:outline-none border rounded border-gray-3 py-1 font-semibold w-full">Add to bag</button>
                        <button @click="bargainModal" class="focus:outline-none border rounded border-gray-3 py-1 font-semibold w-full">Bargain</button>
                        <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold px-2"><i class="ri-heart-line"></i></button>
                    </div>
                    <p class="font-semibold text-purple-2 mt-4">Delivery offer shows here</p>
                </div>
                <div class="sm:col-span-2 sm:mt-0 mt-4">
                    <p class="font-bold">Audio Description</p>
                    <div class="flex items-center">
                        <i class="ri-play-circle-fill mr-2 text-orange-1 text-xl"></i>
                        <p>Audio file name goes to here</p>
                    </div>
                    <p class="font-bold mt-4">Video Description</p>
                    <div class="border-2 border-green-4">
                        <div class="relative pb-3/5">
                            <img class="absolute h-full w-full object-cover" src="~/assets/videos/img-two.png" alt="Image">
                            <p class="absolute bottom-0 mb-2 ml-2 text-white bg-green-5 px-3 py-1 inline">10:00</p>
                        </div>
                        <div class="p-2">
                            <p class="font-bold lg:text-lg">Video name goes here</p>
                            <p class="text-gray-2">512 views  •  7 min ago </p>
                        </div>
                    </div>
                    <button class="block font-semibold py-2 bg-blue-2 text-white rounded w-full mt-4 focus:outline-none">
                        <div class="flex items-center justify-center">
                            <i class="ri-facebook-fill mr-2"></i>
                            Share on Facebook
                        </div>
                    </button>
                </div>
              </div>
              
              <!-- Tabs -->
              <tab :showTab="showTab" :tabs="tabs"></tab>





            </div>
        </div>
      </div>
    </div>
    <div
      @click="closeModal"
      class="opacity-50 fixed inset-0 z-40 bg-green-4"
    ></div>
  </div>
</template>
<script>
import Tab from '~/components/common/Tab.vue';
export default {
  data() {
    return {
      close_modal: 'closeModal',
      quantity: 1,
      photos: [
        '',
        '',
        '',
        '',
      ],
      showTab: 'Informations',
      tabs:[
        {name: 'Informations',view: 'Informations'},
        {name: 'Feature',view: 'Feature'},
      ],
    }
  },
  components: {
    Tab,
  },
  methods: {
    closeModal() {
      if (this.close_modal == 'closeModal') {
        this.$emit('closePreviewModal')
      }
    },
    wait() {
      this.close_modal = 'wait'
      setTimeout(() => (this.close_modal = 'closeModal'), 500)
    },
    plus(){
        this.quantity += 1;
    },
    minus(){
        if(this.quantity > 0)
            this.quantity -= 1;
    },
  }
}
</script>
