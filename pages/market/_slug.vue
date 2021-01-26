<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <div class="px-3 lg:py-6 py-3 grid grid-cols-2 gap-3">
            <!-- Market Details -->
            <market-details></market-details>
            <!-- Market Floors -->
            <div>
                <floors :floors="floors"></floors>
            </div>
        </div>

        <!-- Shops -->
        <shops :shops="shops"></shops>

        <!-- Paginate -->
        <div class="px-3 pb-8">
            <paginate></paginate>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import Paginate from '~/components/common/Paginate.vue';
import Floors from '~/components/market/Floors.vue';
import MarketDetails from '~/components/market/Details.vue';
import Shops from '~/components/market/Shops.vue';

export default {
    components: {
        Breadcrumb,
        Paginate,
        Floors,
        MarketDetails,
        Shops,
    },
    data: () => ({
        breadCrumbs: [
            {title: 'Home', url: '/'},
            {title: 'Go To Market', url: '/cities'},
            {title: 'Dhaka', url: '/markets'},
            {title: 'Eastern Plaza Shopping Complex', url: '/market'},
            {title: 'Grand Floor', url: ''},
        ],
        floors: [
            {url: '', active: 'border-green-4 bg-green-3', shops:'86', name: 'Grand'},
            {url: '', active: '', shops:'86', name: '1st'},
            {url: '', active: '', shops:'50', name: '2nd'},
            {url: '', active: '', shops:'45', name: '3rd'},
            {url: '', active: '', shops:'40', name: '4th'},
            {url: '', active: '', shops:'30', name: '5th'},
        ],
        shops: [
            {url: '/shop', banner: 'banner_blue', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_green', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_green', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_green', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_maroon', shop_no:'Shop', name: 'Shop name goes to here'},
            {url: '', banner: 'banner_paste', shop_no:'Shop', name: 'Shop name goes to here'},
        ],
    })
}
</script>
