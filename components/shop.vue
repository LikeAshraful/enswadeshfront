<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 lg:px-20 px-3">
            <n-link to="/" class="text-blue-1">Home</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/cities" class="text-blue-1">Go To Market</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/markets" class="text-blue-1">Dhaka</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="/market" class="text-blue-1">Eastern Plaza Shopping Complex</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <n-link to="" class="text-blue-1">Grand Floor</n-link>
                <i class="px-2 ri-arrow-right-s-fill"></i>
            <p>Shop name goes to here</p>
        </div>
        <!-- End Breadcrumbs -->
        <!-- Shop Details -->
        <div class="shop market lg:px-20 px-3 lg:py-6 py-3 grid grid-cols-2 gap-3">
            <div>
                <img class="h-64 w-full rounded-lg" src="~/assets/img/shopping-mall.png" alt="Image">
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
                <div class="my-5">
                    <n-link to="" class="w-full px-6 py-2 font-bold text-xl rounded-lg bg-green-3">Subscribe</n-link>
                    <n-link to="" class="w-full px-6 py-2 font-bold text-xl rounded-lg border-2 border-orange-1 ml-3">Invite Friend</n-link>
                </div>
                <div class="">
                    <div class="text-purple-2 border-2 border-purple-2 rounded-lg p-2">
                        <p><strong>Note:</strong> Subscribe us & get 5% discount on every product</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Shop Details -->
        <!-- Products Section -->
        <div class="markets lg:px-20 px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <div>
                    <p class="rounded-t-lg p-2 bg-green-1 font-bold text-lg">Categories</p>
                    <div class="rounded-b-lg py-2">
                        <n-link :to="categorie.url" v-for="(categorie, i) in categories" :key="i" class="flex items-center p-2 hover:bg-green-1 duration-300">
                            <p class="font-bold">{{ categorie.name }}</p>
                        </n-link>
                    </div>
                </div>
                <!-- End Filter -->
                <div class="lg:col-span-3 col-span-2">
                    <!-- All Products -->
                    <p class="text-2xl font-black">All Products</p>
                    <div class="grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
                        <n-link v-for="(product, i) in products" :key="i" :to="product.url">
                            <div class="">
                                <div class="">
                                    <img class="h-52 w-full" :src="require(`~/assets/img/products/${product.photo}.png`)" alt="Image">
                                </div>
                                <p class="font-bold pt-2">{{ product.name }}</p>
                                <p class="">{{ product.color }}</p>
                                <p class="font-bold">{{ product.price }}</p>
                            </div>
                        </n-link>
                    </div>
                    <!-- End All Products -->
                    <!-- Paginate -->
                    <div class="lg:px-20 px-3 pb-8">
                        <Paginate/>
                    </div>
                    <!-- End Paginate -->
                </div>
            </div>
        </div>
        <!-- End Products Section -->
    </div>
</template>
<script>
import Paginate from '~/components/common/paginate.vue';
export default {
    components: {
        Paginate
    },
    data: () => ({
        categories: [
            {url: '', name: 'Badda'},
            {url: '', name: 'Bashundhara'},
            {url: '', name: 'Adabor'},
            {url: '', name: 'Uttara'},
            {url: '', name: 'Dhanmondi'},
            {url: '', name: 'Mohammadpur'},
            {url: '', name: 'Malibag'},
            {url: '', name: 'Gulistan'},
            {url: '', name: 'Banani'},
            {url: '', name: 'Demra'},
        ],
        products: [
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-2', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-3', color: 'Black & White', price:'1195 BDT', name: 'Ceiling circle black electric  deem lamp'},
            {url: '', photo: 'img-4', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-5', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Table lamp'},
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-2', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-3', color: 'Black & White', price:'1195 BDT', name: 'Ceiling circle black electric  deem lamp'},
            {url: '', photo: 'img-4', color: 'Black & White', price:'1195 BDT', name: 'Bedside white stand electric  deem lamp'},
            {url: '', photo: 'img-5', color: 'Black & White', price:'1195 BDT', name: 'Ceiling pendanent red light'},
            {url: '', photo: 'img-1', color: 'Black & White', price:'1195 BDT', name: 'Table lamp'},
        ],
    })
}
</script>