<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <div class="grid sm:grid-cols-2 sm:gap-8 my-4">
            <div class="">
                <p class="title">Contact Information</p>
                <div class="px-2 py-4">
                    <label for="phone" class="font-semibold">Mobile phone number</label>
                    <input id="phone" type="number" class="input-field focus:outline-none mt-1 mb-4" placeholder="Type your mobile phone number">
                    <p class="inline mr-4">I have already an account.</p><button @click="showLoginModal" class="focus:outline-none font-bold text-orange-1">Login</button>
                </div>
                <!-- Shipping Billing Address Input -->
                <shipping-billing-address-input></shipping-billing-address-input>
            </div>
            <div>
                <!-- Order summary -->
                <order-summary :products="products"></order-summary>

                <p class="title">Select Payment Methods</p>
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
                <n-link to="/order-complete" class="bg-green-3 btn block">Place Order</n-link>
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
import OrderSummary from '../components/cart/Order-summary.vue';
import ShippingBillingAddressInput from '../components/cart/Shipping-billing-address-input.vue';
export default {
    data() {
        return {
            loginModal: false,
            registrationModal: false,

            breadCrumbs: [
                {title: 'Shopping bag', url: '/cart'},
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
        OrderSummary,
        ShippingBillingAddressInput,
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