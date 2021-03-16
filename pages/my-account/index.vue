<template lang="">
    <div>
        <p class="h1">My Account</p>
        <div class="min-h-screen grid grid-cols-4 gap-4 py-4">
            <div>
                <!-- User details -->
                <user-details></user-details>
                <div class="list mt-4">
                    <ul>
                        <li @click="shoppingFriend" :class="friend ? 'bg-green-3':''" class="list-items hover:bg-green-3">My Shopping Friends</li>
                        <li @click="shopMenu" :class="shop ? 'bg-green-3':''" class="list-items hover:bg-green-3">Shops</li>
                        <li @click="myShops" :class="myShop ? 'bg-green-3':''" class="list-items hover:bg-green-3">My shops</li>
                        <li @click="myOrders" :class="my_orders ? 'bg-green-3':''" class="list-items hover:bg-green-3">My orders</li>
                        <li @click="myWishlist" :class="wishlist ? 'bg-green-3':''" class="list-items hover:bg-green-3">My wishlist</li>
                        <li @click="myReviews" :class="review ? 'bg-green-3':''" class="list-items hover:bg-green-3">My Reviews</li>
                    </ul>
                </div>
            </div>
            <div class="col-span-3">
                <shops v-if="shop"></shops>
                <my-shops v-if="myShop"></my-shops>
                <shopping-friend v-if="friend"></shopping-friend>
                <my-orders v-if="my_orders"></my-orders>
                <my-wishlist v-if="wishlist"></my-wishlist>
                <my-reviews v-if="review"></my-reviews>
            </div>
        </div>
    </div>
</template>
<script>
import UserDetails from '~/components/my-account/UserDetails.vue';
import ShoppingFriend from '~/components/my-account/menus/shopping-friend-items/ShoppingHome.vue';
import Shops from '~/components/my-account/menus/shops-items/ShopHome.vue';
import MyShops from '~/components/my-account/menus/my-shops/MyShops.vue';
import MyOrders from '~/components/my-account/menus/my-orders/MyOrders.vue';
import MyWishlist from '~/components/my-account/menus/my-wishlist/MyWishlist.vue';
import MyReviews from '~/components/my-account/menus/my-reviews/MyReviews.vue';
export default {
    data() {
        return {
            friend: true,
            shop: false,
            myShop: false,
            my_orders: false,
            wishlist: false,
            review: false,
        }
    },
    components: {
        UserDetails,
        ShoppingFriend,
        Shops,
        MyShops,
        MyOrders,
        MyWishlist,
        MyReviews,
    },
    methods: {
        shopMenu() {
            this.shop = true;
            this.myShop = false;
            this.friend = false;
            this.my_orders = false;
            this.wishlist = false;
            this.review = false;
        },
        myShops() {
            this.shop = false;
            this.myShop = true;
            this.friend = false;
            this.my_orders = false;
            this.wishlist = false;
            this.review = false;
        },
        shoppingFriend() {
            this.shop = false;
            this.myShop = false;
            this.friend = true;
            this.my_orders = false;
            this.wishlist = false;
            this.review = false;
        },
        myOrders() {
            this.shop = false;
            this.myShop = false;
            this.friend = false;
            this.my_orders = true;
            this.wishlist = false;
            this.review = false;
        },
        myWishlist() {
            this.shop = false;
            this.myShop = false;
            this.friend = false;
            this.my_orders = false;
            this.wishlist = true;
            this.review = false;
        },
        myReviews() {
            this.shop = false;
            this.myShop = false;
            this.friend = false;
            this.my_orders = false;
            this.wishlist = false;
            this.review = true;
        },
    }
}
</script>