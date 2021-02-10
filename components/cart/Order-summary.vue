<template>
    <div>
        <p class="title">Order Summary</p>
        <div class="p-2">
            <table class="w-full">
                <tr class="font-semibold">
                    <td>Product</td>
                    <td><p class="mr-2">Quantity</p></td>
                    <td><p class="w-16">Price</p></td>
                </tr>
                <tr v-for="(product, i) in products" :key="i" class="border-t border-gray-3">
                    <td>
                        <div class="flex my-1">
                            <img class="w-12 h-12 mr-2" :src="require(`~/assets/img/products/${product.img}`)" alt="">
                            <p><span class="font-semibold">{{ product.name }}</span></p>
                        </div>
                    </td>
                    <td>
                        <div class="flex justify-between w-20 rounded border border-gray-3 mr-2 my-1">
                            <button class="focus:outline-none bg-gray-3 rounded-t flex items-center justify-center px-1">
                                <i class="ri-subtract-line"></i>
                            </button>
                            <p>{{ product.quan }}</p>
                            <button class="focus:outline-none bg-gray-3 rounded-b flex items-center justify-center px-1">
                                <i class="ri-add-fill"></i>
                            </button>
                        </div>
                    </td>
                    <td>{{ product.price }}</td>
                </tr>
                <tr class="border-t border-gray-3">
                    <td colspan="2" class="text-gray-2"><p class="mt-2">Subtotal (4 items)</p></td>
                    <td><p class="mt-2">৳ 4,780</p></td>
                </tr>
                <tr>
                    <td colspan="2" class="text-gray-2"><p class="mb-2">Shipping Fee</p></td>
                    <td><p class="mb-2">৳ 50</p></td>
                </tr>
                <tr class="border-t border-b border-gray-3 font-semibold">
                    <td colspan="2"><p class="my-2">Total</p></td>
                    <td><p class="my-2">৳ 4,830</p></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: ['products'],
}
</script>