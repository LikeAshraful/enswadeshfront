<template>
    <div>
        <div @click="closeModal" class="fixed inset-0 z-50 flex flex-col justify-center items-center py-12">
            <div @click="wait" class="max-w-screen-sm shadow-lg bg-white overflow-auto">
                <div class="grid sm:grid-cols-2 gap-6 p-6">
                    <div class="">
                        <div class="relative pb-full">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/img-6.png" alt="Image">
                        </div>

                         <div class="grid grid-cols-4 gap-2 mt-2">
                            <div class="relative pb-3/4" v-for="(photo, i) in photos" :key="i">
                                <img class="absolute h-full w-full object-cover" :src="require(`~/assets/img/products/${photo}.png`)" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="w-full text-right">
                            <button @click="closeModal" class="text-2xl focus:outline-none"><i class="ri-close-line"></i></button>
                        </div>
                        <p class="font-bold text-2xl mb-2">{{product.name}}</p>
                        <p class="bg-green-4 px-2 py-1 text-white inline">
                            4.5<i class="ri-star-fill ml-2 text-yellow-2"></i>
                        </p>
                        <p class="font-bold mt-3">{{product.price}} BDT</p>
                        <div class="border-t text-gray-3 my-2"></div>
                        <table class="w-full">
                            <tr>
                                <td class="font-semibold">Availability</td>
                                <td v-if="product.total_stocks >= 1"><strong> In Stock</strong></td>
                                <td v-else class="text-red-500" ><strong> Out Of Stock</strong></td>
                            </tr>
                            <tr>
                                <td class="font-semibold">Brand</td>
                                <td class="">{{product.brand.name}}</td>
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
                        <div class="grid grid-cols-2 gap-2 mb-2">
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
                        <div class="flex gap-2 justify-between">
                            <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold w-full">Add to bag</button>
                            <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold w-full">Bargain</button>
                            <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold px-2"><i class="ri-heart-line"></i></button>
                        </div>
                    </div>
                </div>
                <div class="border-t text-gray-3 mx-6 py-6 text-center">
                    <n-link :to="{name:'product-slug-id', params:{slug: product.slug, id: product.id }}" class="border rounded border-gray-3 py-1 font-bold text-green-4 p-8">Show More Details</n-link>
                </div>
            </div>
        </div>
        <div @click="closeModal" class="opacity-50 fixed inset-0 z-40 bg-green-4"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            photos:[
                'img-6',
                'img-1',
                'img-2',
                'img-3',
            ],
            close_modal: 'closeModal',
        }
    },
    props:['basePath', 'product'],

    methods: {
        closeModal()
        {
            if(this.close_modal == 'closeModal')
            {
                this.$emit('product-modal',false);
            }
        },
        wait()
        {
            this.close_modal = 'wait';
            setTimeout(() => this.close_modal = 'closeModal', 500);
        },
    },
}
</script>
