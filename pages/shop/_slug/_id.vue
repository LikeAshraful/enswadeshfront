<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <div class="lg:py-6 py-3 grid sm:grid-cols-2 gap-3">
            <!-- Slider -->
            <slider></slider>
            <!-- Shop Details -->
            <shopDetails :shop="shop"></shopDetails>
        </div>
        <div class="">
            <div class="grid lg:grid-cols-4 sm:grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <dataFilter :filtersData="filtersData" :filterTitle="filterTitle"/>
                <div class="lg:col-span-3 sm:col-span-2">
                    <!-- All Products -->
                    <products :products="products" :basePath="basePath"></products>
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
    data() {
        return {
          basePath: this.$axios.defaults.baseURL,

          breadCrumbs: [
            {title: 'Home', url: '/'},
            {title: 'Go To Market', url: '/cities'},
            {title: 'Dhaka', url: '/markets'},
            {title: 'Eastern Plaza Shopping Complex', url: '/market'},
            {title: 'Grand Floor', url: '/market'},
            {title: 'Shop name goes to here', url: ''},
          ],

          filterTitle: 'Categories',
          filtersData: [],
          shop: {},
          products: []
        }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      async loadData () {
        await this.$axios.get(
          '/api/categories'
        ).then((res) => {
          this.filtersData = res.data;
        }),
        await this.$axios.get(
          '/api/products-by-shop/' + this.$route.params.id
        ).then((res) => {
          this.products = res.data;
        }),
         await this.$axios.get(
          '/api/shops/' + this.$route.params.id
        ).then((res) => {
          this.shop = res.data.data;
        })
      }
    }
}
</script>
