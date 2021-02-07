<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <div class="grid sm:grid-cols-2 sm:gap-8 my-4">
            <div class="">
                <p class="p-2 bg-green-1 font-bold">Contact Information</p>
                <div class="px-2 py-4">
                    <label for="phone" class="font-semibold">Mobile phone number</label>
                    <input id="phone" type="number" class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 mb-4 w-full" placeholder="Type your mobile phone number">
                    <p class="inline mr-4">I have already an account.</p><button @click="showLoginModal" class="focus:outline-none font-bold text-orange-1">Login</button>
                </div>
                <p class="p-2 bg-green-1 font-bold">Shipping Address</p>
                <div class="px-2 py-4">
                    <label for="name" class="font-semibold">Your name</label>
                    <input id="name" type="text" class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 mb-2 w-full" placeholder="Type your name">

                    <label for="region" class="font-semibold">Region</label>
                    <select id="region" class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 mb-2 w-full">
                        <option value="" selected disabled>Select your region</option>
                        <option value="">...</option>
                        <option value="">...</option>
                        <option value="">...</option>
                    </select>

                    <label for="region" class="font-semibold">City</label>
                    <select id="region" class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 mb-2 w-full">
                        <option value="" selected disabled>Select your city</option>
                        <option value="">...</option>
                        <option value="">...</option>
                        <option value="">...</option>
                    </select>

                    <label for="region" class="font-semibold">Area</label>
                    <select id="region" class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 mb-2 w-full">
                        <option value="" selected disabled>Select your area</option>
                        <option value="">...</option>
                        <option value="">...</option>
                        <option value="">...</option>
                    </select>

                    <label for="address" class="font-semibold">Address</label>
                    <input id="address" type="text" class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 w-full" placeholder="Flat# 3B, Floor# 2nd, House#23, Road#1A">
                </div>
                <p class="p-2 bg-green-1 font-bold">Billing Address</p>
                <div class="p-2">
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" type="radio" name="bill" id="shipping" checked>
                        <label for="shipping">Same as the shipping address</label>
                    </div>
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" type="radio" name="bill" id="another">
                        <label for="another">Bill to the another address</label>
                    </div>
                </div>
            </div>
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
                <p class="p-2 bg-green-1 font-bold">Select Payment Methods</p>
                <div class="p-2">
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" type="radio" name="payment" id="cash" checked>
                        <label for="cash">Cash on delivery</label>
                    </div>
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" type="radio" name="payment" id="bkash">
                        <label for="bkash">bKash</label>
                    </div>
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" type="radio" name="payment" id="rocket">
                        <label for="rocket">Rocket</label>
                    </div>
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" type="radio" name="payment" id="geteway">
                        <label for="geteway">Payment gateway</label>
                    </div>
                </div>
                <n-link to="/order-complete" class="p-2 bg-green-3 font-bold text-center block border rounded mt-4">Place Order</n-link>
            </div>
        </div>
        
        <!-- Login Modal -->
        <login v-if="loginModal" v-on:closeLoginModal="closeLoginModal()" v-on:openRegistrationModal="openRegistrationModal()"></login>
        
        <!-- Registration Modal -->
        <registration v-if="registrationModal" v-on:closeRegistrationModal="closeRegistrationModal()" v-on:openLoginModal="openLoginModal()"></registration>

    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import Login from '~/components/auth/Login.vue';
import Registration from '~/components/auth/Registration.vue';
export default {
    data() {
        return {
            loginModal: false,
            registrationModal: false,

            breadCrumbs: [
                {title: 'Shopping bag', url: '/card'},
                {title: 'Checkout', url: ''},
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
        Login,
        Registration,
    },
    methods: {
        showLoginModal(){
            this.loginModal = true;
        },
        closeLoginModal(){
            this.loginModal = false;
        },
        openRegistrationModal(){
            this.loginModal = false;
            this.registrationModal = true;
        },
        closeRegistrationModal(){
            this.registrationModal = false;
        },
        openLoginModal(){
            this.loginModal = true;
            this.registrationModal = false;
        },
    },
}
</script>