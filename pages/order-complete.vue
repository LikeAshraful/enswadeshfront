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
                <!-- Order summary -->
                <order-summary :products="products"></order-summary>
            </div>
            <div>
                <!-- Shipping -->
                <shipping-billing></shipping-billing>
            </div>
        </div>
        <div class="mb-8 text-center">
            <n-link to="/shop" class="py-2 px-20 bg-green-3 font-bold text-center border rounded mt-4">Place Order</n-link>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import OrderSummary from '../components/cart/Order-summary.vue';
import ShippingBilling from '../components/cart/Shipping-billing.vue';
export default {
    data() {
        return {
            breadCrumbs: [
                {title: 'Shopping bag', url: '/cart'},
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
        OrderSummary,
        ShippingBilling,
    }
}
</script>