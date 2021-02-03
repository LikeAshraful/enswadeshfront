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
        <shops :shops="shops.data" :basePath="basePath"></shops>

        <!-- Paginate -->
        <div class="pb-8">
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
    data() {
       return {
          basePath: this.$axios.defaults.baseURL,

          breadCrumbs: [
              {title: 'Home', url: '/'},
              {title: 'Go To Market', url: '/cities'},
              {title: 'Dhaka', url: '/markets'},
              {title: 'Eastern Plaza Shopping Complex', url: '/market'},
              {title: 'Grand Floor', url: ''},
          ],
          floors: [],
          shops: [],
       }
    },
    mounted() {
      this.loadData();
    },

    methods: {
        async loadData () {
          await this.$axios.get(
            '/api/shops/shops-by-market-by-floor/' + this.$route.params.id
          ).then((res) => {
              this.floors = res.data;
          }),

          await this.$axios.get(
            '/api/shops/all-shops-by-market/' + this.$route.params.id
          ).then((res) => {
            this.shops = res.data;
          })
        }
    }
}
</script>
