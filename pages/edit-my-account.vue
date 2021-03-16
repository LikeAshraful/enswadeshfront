<template lang="">
    <div>
        <p class="h1">My Account</p>
        <div class="min-h-screen grid grid-cols-4 gap-4 py-4">
            <div>
                <!-- User details -->
                <user-details></user-details>
                <div class="list mt-4">
                    <ul>
                        <li v-for="(menu, i) in accountmenu"  :class="$route.path == menu.to ? 'bg-green-3' : ''" class="list-items hover:bg-green-3" :key="'menu'+i"> 
                            <NuxtLink class="block" :to="menu.to" >{{menu.title}}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-3">
                <!-- <NuxtChild  /> -->
                <p class="title">Personal Information</p>
                <div class="p-4 bg-white">
                    <label for="name" class="input-label">Name</label>
                    <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
                        <div>
                            <input type="text" id="name" class="input-field focus:outline-none" placeholder="Adam">
                        </div>
                        <div>
                            <button class="focus:outline-none font-bold text-blue-1">Change name</button>
                        </div>
                    </div>
                    <label for="phone" class="input-label">Mobile phone number</label>
                    <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
                        <div>
                            <input type="text" id="phone" class="input-field focus:outline-none" placeholder="01XXXXXXXXX">
                        </div>
                        <div>
                            <button class="focus:outline-none font-bold text-blue-1">Change phone number</button>
                        </div>
                    </div>
                </div>
                <p class="title mt-4">Profile Photo</p>
                <div class="p-4 bg-white">
                    <div class="grid grid-cols-2 gap-4 items-center justify-center">
                        <div>
                            <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                        </div>
                        <div>
                            <button class="focus:outline-none font-bold text-blue-1">Change photo</button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 items-center justify-center title mt-4">
                    <div>
                        <p>Address</p>
                    </div>
                    <div>
                        <button class="focus:outline-none font-bold text-blue-1">Change address</button>
                    </div>
                </div>
                <div class="p-4 bg-white mb-4">
                    <label for="region" class="input-label">Region</label>
                    <input type="text" id="region" class="input-field focus:outline-none mb-4" placeholder="Dhaka">

                    <label for="city" class="input-label">City</label>
                    <input type="text" id="city" class="input-field focus:outline-none mb-4" placeholder="Dhaka">

                    <label for="area" class="input-label">Area</label>
                    <input type="text" id="area" class="input-field focus:outline-none mb-4" placeholder="Shahbag">

                    <label for="address" class="input-label">Address</label>
                    <input type="text" id="address" class="input-field focus:outline-none mb-4" placeholder="Flat# 3B, Floor# 2nd, House#23, Road#1A">
                </div>
                <p class="title">Password</p>
                <div class="p-4 bg-white">
                    <label for="name" class="input-label">Password</label>
                    <div class="grid grid-cols-2 gap-4 items-center justify-center mb-4">
                        <div>
                            <input type="password" id="name" class="input-field focus:outline-none" placeholder="*****">
                        </div>
                        <div>
                            <button class="focus:outline-none font-bold text-blue-1">Change password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import UserDetails from '~/components/my-account/UserDetails.vue';

export default {
    data() {
        return {
            accountmenu:[
                {title:"My Shopping Friends", to:"/my-account/shoppingfriend"},
                {title:"Shops", to:"/my-account/shops"},
                {title:"My shops", to:"/my-account/myshops"},
                {title:"My orders", to:"/my-account/myorders"},
                {title:"My wishlist", to:"/my-account/mywishlist"},
                {title:"My Reviews", to:"/my-account/myreviews"},
           ]
        }
    },

    components: {
        UserDetails,

    },


}
</script>
