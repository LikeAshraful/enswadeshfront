<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <div class="lg:py-6 py-3 grid md:grid-cols-2 gap-3">
            <!-- Market Details -->
            <market-details></market-details>
            <!-- Market Floors -->
            <div>
                <floors :floors="floors.data"></floors>
            </div>
        </div>

        <!-- Shops -->
        <shops :shops="shops.data" :basePath="basePath" v-on:pagechanged="testMethod"></shops>

        <!-- Paginate -->
        <div class="pb-8">
            <paginate :totalPages="totalPages" :total="total" :currentPage="currentPage" ></paginate>
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
    data() {
       return {
          basePath: this.$axios.defaults.baseURL,
          floors: [],
          shops: [],
          totalPages:0,
          total:0,
          currentPage:0,

          breadCrumbs: [
              {title: 'Home', url: '/'},
              {title: 'Go To Market', url: '/cities'},
              {title: 'Dhaka', url: '/markets'},
              {title: this.$route.params.slug, url: this.$route.path},
              {title: 'Grand Floor', url: ''},
          ],
       }
    },
    mounted() {
      this.loadFloors();
      this.loadShops();
      this.testMethod();
    },
    methods: {
      async loadFloors() {
        await this.$axios.get(
          '/api/shops/shops-by-market-by-floor/' + this.$route.params.id
        ).then((res) => {
            this.floors = res.data;
        })
      },
      async loadShops() {
        await this.$axios.get(
          '/api/shops/all-shops-by-market/' + this.$route.params.id
        ).then((res) => {
          this.shops = res.data.data;
          this.total = this.shops.total;
          this.totalPages = this.shops.last_page;
          this.currentPage = this.shops.current_page;
        })
      },
      testMethod (value) {
        console.log('page number is ' + value);
      }
    }
}
</script>
