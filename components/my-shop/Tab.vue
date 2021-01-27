<template>
    <div>
        <!-- Tabs -->
        <div class="">
            <button @click="getProducts" :class="products ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" class="focus:outline-none font-bold px-6 py-2">Products</button>
            <button @click="getOrders" :class="orders ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''"  class="focus:outline-none font-bold px-6 py-2">Orders</button>
            <button @click="getTutorials" :class="tutorials ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''"  class="focus:outline-none font-bold px-6 py-2">Tutorials</button>
            <button @click="getCalculate" :class="calculator ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''"  class="focus:outline-none font-bold px-6 py-2">Calculator</button>
            
            <div style="margin-top: -2px;" class="border-t-2 border-green-4 py-2">
                <div class="" v-if="products">
                    <products></products>
                </div>
                <div class="" v-if="orders">
                    <orders></orders>
                </div>
                <div class="" v-if="tutorials">
                    <tutorials></tutorials>
                </div>
                <div class="" v-if="calculator">
                    <calculator></calculator>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Calculator from '~/components/my-shop/tabs/Calculator.vue';
import Orders from '~/components/my-shop/tabs/Orders.vue';
import Products from '~/components/my-shop/tabs/TabProducts.vue';
import Tutorials from '~/components/my-shop/tabs/Tutorials.vue';

export default {
    components: {
        Calculator,
        Orders,
        Products,
        Tutorials,
    },
    
    data: () => ({
        products: true,
        orders: false,
        tutorials: false,
        calculator: false,
    }),
    methods: {
        getProducts(){
            this.products = true
            this.orders = false
            this.tutorials = false
            this.calculator = false
        },
        getOrders(){
            this.products = false
            this.orders = true
            this.tutorials = false
            this.calculator = false
        },
        getTutorials(){
            this.products = false
            this.orders = false
            this.tutorials = true
            this.calculator = false
        },
        getCalculate(){
            this.products = false
            this.orders = false
            this.tutorials = false
            this.calculator = true
        },
    },
}
</script>
