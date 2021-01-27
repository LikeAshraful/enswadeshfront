<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        
        <div class="shop market lg:py-6 py-3 grid grid-cols-2 gap-3">
            <!-- Slider -->
            <slider></slider>
            <!-- Shop Details -->
            <shopDetails></shopDetails>
        </div>
        
        <div class="markets">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <dataFilter :filtersData="filtersData" :filterTitle="filterTitle"/>
                <div class="lg:col-span-3 col-span-2">
                    <!-- All Products -->
                    <products></products>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import Slider from '~/components/shop/Slider.vue';
import ShopDetails from '~/components/shop/ShopDetails.vue';
import DataFilter from '~/components/common/Filter.vue';
import Products from '~/components/shop/Products.vue';

export default {
    components: {
        Breadcrumb,
        Slider,
        ShopDetails,
        DataFilter,
        Products,
    },
    data: () => ({
        breadCrumbs: [
            {title: 'Home', url: '/'},
            {title: 'Go To Market', url: '/cities'},
            {title: 'Dhaka', url: '/markets'},
            {title: 'Eastern Plaza Shopping Complex', url: '/market'},
            {title: 'Grand Floor', url: '/market'},
            {title: 'Shop name goes to here', url: ''},
        ],

        filterTitle: 'Categories',
        filtersData: [
            {url: '', name: 'Food'},
            {url: '', name: 'Groceries'},
            {url: '', name: 'Furniture'},
            {url: '', name: 'Toys'},
            {url: '', name: 'Electronics'},
            {url: '', name: 'Fashion'},
        ],
        
    })
}
</script>