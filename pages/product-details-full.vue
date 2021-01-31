<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <!-- Product Details -->
        <div class="grid sm:grid-cols-7 gap-12 py-4">
            <div class="col-span-2">
                <div class="relative pb-full">
                    <img class="absolute h-full w-full object-cover" src="~/assets/img/products/img-6.png" alt="Image">
                </div>

                    <div class="grid lg:grid-cols-4 gap-2 mt-2">
                    <div class="relative pb-3/4" v-for="(photo, i) in photos" :key="i">
                        <img class="absolute h-full w-full object-cover" :src="require(`~/assets/img/products/${photo}.png`)" alt="">
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <p class="font-bold text-2xl mb-2">Ceiling circle black electric deem lamp</p>
                <p class="bg-green-4 px-2 py-1 text-white inline">
                    4.5<i class="ri-star-fill ml-2 text-yellow-2"></i>
                </p>
                <p class="font-bold mt-3">1195 BDT</p>
                <div class="border-t text-gray-3 my-2"></div>
                <table class="w-full">
                    <tr>
                        <td class="font-semibold">Availability</td>
                        <td>In stock</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Brand</td>
                        <td>zxy</td>
                    </tr>
                    <tr>
                        <td><div class="border-t text-gray-3 my-2"></div></td>
                        <td><div class="border-t text-gray-3 my-2"></div></td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Select color</td>
                        <td>
                            <i class="ri-checkbox-blank-circle-fill text-yellow-2"></i>
                            <i class="ri-checkbox-blank-circle-fill text-green-4"></i>
                            <i class="ri-checkbox-blank-circle-fill text-red-500"></i>
                            <i class="ri-checkbox-blank-circle-fill text-blue-1"></i>
                            <i class="ri-checkbox-blank-circle-fill text-purple-2"></i>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Size</td>
                        <td>XS</td>
                    </tr>
                </table>
                <div class="border-t text-gray-3 my-2"></div>
                <p class="font-semibold mb-2">Quantity</p>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div class="grid grid-cols-4 rounded border border-gray-3 font-bold">
                        <button class="focus:outline-none bg-gray-3 rounded-l text-xl flex items-center justify-center">
                            <i class="ri-subtract-line"></i>
                        </button>
                        <div class="col-span-2 text-center py-1">
                            0
                        </div>
                        <button class="focus:outline-none bg-gray-3 rounded-r text-xl flex items-center justify-center">
                            <i class="ri-add-fill"></i>
                        </button>
                    </div>
                    <n-link to="" class="border bg-green-3 border-gray-2 rounded py-1 w-full font-bold text-center">Buy now</n-link>
                </div>
                <div class="flex gap-3 justify-between">
                    <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold w-full">Add to bag</button>
                    <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold w-full">Bargain</button>
                    <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold px-2"><i class="ri-heart-line"></i></button>
                </div>
            </div>
            <div class="col-span-2">
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
        <div class="border-t text-gray-3 mb-4"></div>

        <!-- Tabs -->
        <tab></tab>

    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import Tab from '~/components/common/commonTab.vue';

export default {
    components: {
        Breadcrumb,
        Tab,
    },
    data:() => ({
        photos:[
            'img-6',
            'img-1',
            'img-2',
            'img-3',
        ],
        breadCrumbs: [
            {title: 'Home', url: '/'},
            {title: '...', url: '/'},
            {title: 'Shop name goes to here', url: '/shop'},
            {title: 'Product name goes to here', url: ''},
        ],
    })
}
</script>