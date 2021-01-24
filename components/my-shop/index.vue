<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 px-3">
            <n-link to="/" class="text-blue-1">Home</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/my-shop" class="text-blue-1">My Shop</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <p>Shop name goes to here</p>
        </div>
        <!-- End Breadcrumbs -->
        <!-- Shop Details -->
        <div class="shop market px-3 grid grid-cols-2 gap-3">
            <div>
                <img class="h-56 w-full rounded-lg relative" src="~/assets/img/shopping-mall.png" alt="Image">
                <button style="margin-top: -48px;" class="w-10 h-10 items-center border border-white bg-white opacity-50 focus:outline-none rounded-full absolute ml-2">
                    <i class="ri-image-add-fill"></i>
                </button>
            </div>
            <div>
                <p class="font-bold text-xl">Shop name goes to here</p>
                <p class="text-gray-2">111 Subscribers</p>
                <p class="text-gray-2">55 Active Customers</p>
                <div class="flex text-yellow-2">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line"></i>
                    <p class="text-gray-2 ml-2">(4.5)</p>
                </div>
                <div class="flex text-center gap-4 py-2">
                    <n-link to="">
                        <i class="rounded-lg bg-green-1 p-2 ri-message-2-fill"></i>
                        <p>Text us</p>
                    </n-link>
                    <n-link to="">
                        <i class="rounded-lg bg-green-1 p-2 ri-phone-fill"></i>
                        <p>Call us</p>
                    </n-link>
                    <n-link to="">
                        <i class="rounded-lg bg-green-1 p-2 ri-video-chat-fill"></i>
                        <p>Video call</p>
                    </n-link>
                </div>
                <div class="">
                    <div class="mt-3">
                        <p class="font-bold text-purple-2 border-2 border-purple-2 rounded-lg p-2 inline px-4"><i class="ri-edit-2-fill pr-3"></i>Edit</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Shop Details -->
        <!-- Photos -->
        <div class="px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5 relative">
                <div v-for="(photo, i) in photos" :key="i">
                    <img class="h-40 rounded-xl" :src="require(`~/assets/img/shops/${photo}.png`)" alt="">
                </div>
                <button style="right: -20px;" class="w-10 h-10 items-center border border-gray-2 bg-white focus:outline-none rounded-full absolute mt-16 ml-2">
                    <i class="ri-arrow-right-line"></i>
                </button>
                <button style="left: -28px;" class="w-10 h-10 items-center border border-gray-2 bg-white focus:outline-none rounded-full absolute mt-16 ml-2">
                    <i class="ri-arrow-left-line"></i>
                </button>
            </div>
        </div>
        <!-- End Photos -->
        <!-- Tabs -->
        <div class="px-3">
            <button @click="getProducts" :class="products ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" class="focus:outline-none font-bold px-6 py-2">Products</button>
            <button @click="getOrders" :class="orders ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''"  class="focus:outline-none font-bold px-6 py-2">Orders</button>
            <button @click="getTutorials" :class="tutorials ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''"  class="focus:outline-none font-bold px-6 py-2">Tutorials</button>
            <button @click="getCalculate" :class="calculator ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''"  class="focus:outline-none font-bold px-6 py-2">Calculator</button>
            
            <div style="margin-top: -2px;" class="border-t-2 border-green-4 py-2">
                <div class="" v-if="products">
                    <Products/>
                </div>
                <div class="" v-if="orders">
                    Orders Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium ea. Ad reprehenderit iure, provident itaque accusantium eius possimus fugiat eveniet aliquam dolor id quas hic officiis veniam obcaecati necessitatibus.
                </div>
                <div class="" v-if="tutorials">
                    Tutorials Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium ea. Ad reprehenderit iure, provident itaque accusantium eius possimus fugiat eveniet aliquam dolor id quas hic officiis veniam obcaecati necessitatibus.
                </div>
                <div class="" v-if="calculator">
                    Calculator Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, praesentium ea. Ad reprehenderit iure, provident itaque accusantium eius possimus fugiat eveniet aliquam dolor id quas hic officiis veniam obcaecati necessitatibus.
                </div>
            </div>
        </div>
        <!-- End Tabs -->
    </div>
</template>
<script>
import Products from '~/components/my-shop/tabs/products.vue';
export default {
    components: {
        Products,
    },
    data: () => ({
        products: true,
        orders: false,
        tutorials: false,
        calculator: false,

        photos:[
            'img-1',
            'img-2',
            'img-3',
            'img-4',
        ]
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
