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
        <loader v-if="isLoading"></loader>                
        <shops v-else :shops="shops.data" :basePath="basePath"></shops>

        <!-- Paginate -->
        <div class="pb-8">
            <paginate :totalPages="totalPages" :total="total" :currentPage="currentPage" :perPage="perPage" v-on:pagechanged="loadShops" ></paginate>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import Paginate from '~/components/common/Paginate.vue';
import Floors from '~/components/market/Floors.vue';
import MarketDetails from '~/components/market/Details.vue';
import Shops from '~/components/market/Shops.vue';
import Loader from '~/components/lib/Loader.vue';

export default {
    components: {
        Loader,
        Breadcrumb,
        Paginate,
        Floors,
        MarketDetails,
        Shops,
    },
    data() {
       return {         
          isLoading: true,
          basePath: this.$axios.defaults.baseURL,
          floors: [],
          shops: [],
          totalPages:0,
          total:0,
          currentPage:0,
          perPage:0,

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
    },
    methods: {
      async loadFloors() {
        await this.$axios.get(
          '/api/shops/shops-by-market-by-floor/' + this.$route.params.id
        ).then((res) => {
            this.floors = res.data;
        })
      },
      async loadShops(value) {
        await this.$axios.get(
          '/api/shops/all-shops-by-market/' + this.$route.params.id + '?page=' + value
        ).then((res) => {
          this.shops = res.data.data;
          this.total = this.shops.meta.total;
          this.totalPages = this.shops.meta.last_page;
          this.currentPage = this.shops.meta.current_page;
          this.perPage = this.shops.meta.per_page;
          this.isLoading = false;
        })
      }
    }
}
</script>
