<template lang="">
    <div>
        <p class="h1">My Account</p>
        <div class="min-h-screen grid grid-cols-4 gap-4 py-4">
            <div>
                <!-- User details -->
                <user-details></user-details>
                <div class="list mt-4">
                    <ul>
                        <li v-for="(menu, i) in accountmenu"  :class="$route.path == menu.to ? 'bg-green-3' : ''" class="list-items hover:bg-green-3" :key="'menu'+i"> <NuxtLink   :to="menu.to" >{{menu.title}}</NuxtLink></li>

                    </ul>
                </div>
            </div>
            <div class="col-span-3">
                   <NuxtChild  />
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
           ]
        }
    },

    components: {
        UserDetails,

    },


}
</script>
<style>
.nuxt-link-active{
  background: #BAFFD8;
}
</style>
