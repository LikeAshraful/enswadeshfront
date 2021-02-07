<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <p class="text-center items-center my-6">
            <i class="ri-service-fill bg-green-1 p-3 rounded-full text-2xl mr-2 text-gray-2"></i>
            <span class="py-1 sm:text-3xl text-xl font-bold ">Thank you, your order has been received.</span>
        </p>

        <div class="grid grid-cols-5 justify-around text-center mb-6">
            <div>
                <p class="font-bold">1195</p>
                <p class="text-gray-4">Order number</p>
            </div>
            <div>
                <p class="font-bold">Processing</p>
                <p class="text-gray-4">Status</p>
            </div>
            <div>
                <p class="font-bold">Feb 3, 2021</p>
                <p class="text-gray-4">Date</p>
            </div>
            <div>
                <p class="font-bold">৳ 1195</p>
                <p class="text-gray-4">Total</p>
            </div>
            <div>
                <p class="font-bold">Cash on delivery</p>
                <p class="text-gray-4">Payment method</p>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
                <p class="p-2 bg-green-1 font-bold">Order Summary</p>
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
                            <td class="text-center">{{ product.quan }}</td>
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
            <div>
                <p class="p-2 bg-green-1 font-bold">Shipping & Billing</p>
                <div class="p-2 font-semibold">
                    <p class="p-2 font-bold">Shafiq</p>
                    <p class="mb-2"><i class="ri-map-pin-fill mr-3"></i>Flat# 3B, Floor# 2nd, House#23, Road#1A, Shahbag, Dhaka city, Dhaka.</p>
                    <p class="mb-2"><i class="ri-bill-fill mr-3"></i>Bill to the same address</p>
                    <p class="mb-2"><i class="ri-phone-fill mr-3"></i>01234567890</p>
                    <p class="mb-2"><i class="ri-mail-fill mr-3"></i>hello@email.com</p>
                </div>
            </div>
        </div>
        <div class="mb-8 text-center">
            <n-link to="/shop" class="py-2 px-20 bg-green-3 font-bold text-center border rounded mt-4">Place Order</n-link>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
export default {
    data() {
        return {
            breadCrumbs: [
                {title: 'Shopping bag', url: '/card'},
                {title: 'Checkout', url: '/checkout'},
                {title: 'Order complete', url: ''},
            ],
            products: [
                {img: 'img-6.png', name: 'Ceiling circle black...', quan: '1', price: '1195'},
                {img: 'img-6.png', name: 'Ceiling circle black...', quan: '1', price: '1195'},
                {img: 'img-6.png', name: 'Ceiling circle black...', quan: '1', price: '1195'},
                {img: 'img-6.png', name: 'Ceiling circle black...', quan: '1', price: '1195'},
            ]
        }
    },
    components: {
        Breadcrumb,
    }
}
</script>