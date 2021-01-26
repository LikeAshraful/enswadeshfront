<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        
        <div class="shop market px-3 grid grid-cols-2 gap-3">
            <!-- Add photo -->
            <add-photo></add-photo>

            <!-- Shop details -->
            <my-shop-details></my-shop-details>
        </div>
        
        <!-- Photos -->
        <image-slider></image-slider>

        <!-- Tabs -->
        <tab></tab>
        
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import ImageSlider from '~/components/my-shop/ImageSlider.vue';
import AddPhoto from '~/components/my-shop/AddPhoto.vue';
import MyShopDetails from '~/components/my-shop/MyShopDetails.vue';
import Tab from '~/components/my-shop/Tab.vue';

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
    }),
}
</script>
