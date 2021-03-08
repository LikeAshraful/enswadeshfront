<template>
  <div>
    <!-- Breadcrumbs -->
    <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
    <div class="lg:py-6 py-3 grid md:grid-cols-2 gap-3">
      <!-- Market Details -->
      <market-details :market="market" :basePath="basePath"></market-details>
      <!-- Market Floors -->
      <div>
        <floors
          :total_floors="this.market.total_floor"
          :floors="floors.data"
          v-on:floorId="loadShops"
        ></floors>
      </div>
    </div>
    <!-- Shops -->
    <loader v-if="isLoading"></loader>
    <shops
      v-else
      :shops="shops.data"
      :basePath="basePath"
      :market="market"
      :floor="floor"
    ></shops>

    <!-- Paginate -->
    <!-- <div class="pb-8">
            <paginate :totalPages="totalPages" :total="total" :currentPage="currentPage" :perPage="perPage" v-on:pagechanged="loadShops" ></paginate>
        </div> -->
  </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
// import Paginate from '~/components/common/Paginate.vue';
import Floors from '~/components/market/Floors.vue'
import MarketDetails from '~/components/market/Details.vue'
import Shops from '~/components/market/Shops.vue'
import Loader from '~/components/lib/Loader.vue'

export default {
  components: {
    Loader,
    Breadcrumb,
    //Paginate,
    Floors,
    MarketDetails,
    Shops,
  },
  data() {
    return {
      isLoading: true,
      basePath: this.$axios.defaults.baseURL,
      floors: [],
      floorId: '',
      floor: '',
      floorName: '',
      shopCountByFloor: [],
      shops: [],
      market: [],
      breadCrumbs: [
        { title: 'Home', url: '/' },
        { title: 'Go To Market', url: '/cities' },
        { title: 'Dhaka', url: '/markets' },
        { title: this.$route.params.slug, url: this.$route.path },
        { title: 'Grand Floor', url: '' },
      ],
    }
  },
  beforeCreate() {},
  mounted() {
    this.loadFloors()
    this.loadMarket()
  },
  methods: {
    async loadFloors() {
      await this.$axios
        .get('/api/shops/shops-by-market-by-floor/' + this.$route.params.id)
        .then((res) => {
          this.floors = res.data
          this.floorId = this.floors.data[0].id
          this.floorName = this.floors.data[0].floor
          this.loadShops()
        })
    },
    async loadFloorsByShop() {
      await this.$axios
        .get('/api/shops/shops-by-market-by-floors/' + this.$route.params.id)
        .then((res) => {
          this.shopCountByFloor = res.data
        })
    },
    async loadShops(value, floor) {
      await this.$axios
        .get(
          value
            ? '/api/shops/shops-by-market-floor/' +
                this.$route.params.id +
                '/' +
                value
            : '/api/shops/shops-by-market-floor/' +
                this.$route.params.id +
                '/' +
                this.floorId
        )
        .then((res) => {
          this.floor = floor ? floor : this.floorName
          this.shops = res.data.data
          this.isLoading = false
        })
    },
    async loadMarket() {
      await this.$axios
        .$get('/api/markets/' + this.$route.params.id)
        .then((res) => {
          this.market = res.data
        })
    },
  },
}
</script>
