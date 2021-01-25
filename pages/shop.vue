<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"/>
        
        <div class="shop market px-3 lg:py-6 py-3 grid grid-cols-2 gap-3">
            <!-- Slider -->
            <slider/>
            <!-- Shop Details -->
            <shopDetails/>
        </div>
        
        <div class="markets px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <dataFilter :filtersData="filtersData" :filterTitle="filterTitle"/>
                <div class="lg:col-span-3 col-span-2">
                    <!-- All Products -->
                    <products/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from '~/components/shop/slider.vue';
import shopDetails from '~/components/shop/details.vue';
import DataFilter from '~/components/common/filter.vue';
import Products from '~/components/shop/products.vue';

export default {
    components: {
        Slider,
        shopDetails,
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