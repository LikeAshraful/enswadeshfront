<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        
        <div class="shop market grid grid-cols-2 gap-3">
            <!-- Add photo -->
            <add-photo></add-photo>

            <!-- Shop details -->
            <my-shop-details></my-shop-details>
        </div>
        
        <!-- Photos -->
        <image-slider></image-slider>

        <!-- Tabs -->
        <tab :showTab="showTab" :tabs="tabs"></tab>
        
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import ImageSlider from '~/components/my-shop/ImageSlider.vue';
import AddPhoto from '~/components/my-shop/AddPhoto.vue';
import MyShopDetails from '~/components/my-shop/MyShopDetails.vue';
import Tab from '~/components/common/Tab.vue';

export default {
    components: {
        Breadcrumb,
        ImageSlider,
        AddPhoto,
        MyShopDetails,
        Tab,
    },
    
    data: () => ({
        breadCrumbs: [
            {title: 'Home', url: '/'},
            {title: 'My Shop', url: '/my-shop'},
            {title: 'Shop name goes to here', url: ''},
        ],
        showTab: 'Products',
        tabs:[
            {name: 'Products',view: 'Products'},
            {name: 'Orders',view: 'Orders'},
            {name: 'Tutorials',view: 'Tutorials'},
            {name: 'Calculator',view: 'Calculator'},
        ],
    }),
}
</script>
