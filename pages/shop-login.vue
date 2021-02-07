<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <p class="font-bold text-3xl mb-4">Login your swades account to add your shop</p>
        <div class="bg-green-1">
            <p class="py-2 font-bold max-w-sm m-auto">Account Information</p>
        </div>
        <div class="py-6 max-w-sm m-auto">
            <div class="mb-2">
                <label class="font-bold" for="name">Mobile phone number</label>
                <input class="focus:outline-none w-full border rounded border-gray-3 px-2 py-1" id="name" type="text" placeholder="01XXXXXXXXX">
            </div>
            <div class="mb-3">
                <label class="font-bold" for="name">Password</label>
                <div class="relative mb-1">
                    <input class="focus:outline-none w-full border rounded border-gray-3 px-2 py-1 pr-6" id="name" :type="show ? 'text':'password' " placeholder="Enter your password">
                    <i v-if="!show" @click="showPassword" class="ri-eye-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                    <i v-if="show" @click="showPassword" class="ri-eye-off-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                </div>
                <n-link to="" class="text-blue-1">Forgot password?</n-link>
            </div>
            <button class="focus:outline-none border border-gray-4 bg-gray-3 text-gray-2 rounded text-center font-bold w-full mb-6 py-1">Login your swades account</button>
            
            <div class="border-t text-gray-3 mb-6"></div>
            
            <p class="text-center">Don't have an account? <n-link to="/shop-create" class="ml-2 text-orange-1 font-bold">Create account</n-link></p>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
export default {
    data:() => ({
        show: false,
        breadCrumbs: [
            {title: 'Home', url: '/'},
            {title: 'Go To Market', url: '/cities'},
            {title: 'Dhaka', url: '/markets'},
            {title: 'Eastern Plaza Shopping Complex', url: '/market'},
            {title: 'Grand Floor', url: '/market'},
            {title: 'Shop name goes to here', url: ''},
        ],
    }),
    components:{
        Breadcrumb,
    },
    methods: {
        showPassword(){
            this.show = !this.show;
        },
    },
}
</script>