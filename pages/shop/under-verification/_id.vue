<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <p class="text-3xl font-bold mb-4">Shops (0)</p>

        <div class="p-8 bg-purple-1 text-center mb-4">
            <p>Your shop is under verification.  You will get notification after verified. <br>Your store will appear here once verified. <br>Then you can add pictures of the store, all the information and products.</p>
        </div>
        <p class="title">Shop Information</p>
        <div class="p-2 mb-6">
            <table class="w-full">
                <tr>
                    <td class="font-bold pt-3">Market Name:</td>
                    <td>{{shop.market ? shop.market.name : ''}}</td>
                </tr>
                <tr>
                    <td class="font-bold pt-3">Floor:</td>
                    <td>{{shop.floor ? shop.floor : '' }}</td>
                </tr>
                <tr>
                    <td class="font-bold pt-3">Shop Name:</td>
                    <td>{{shop.name}}</td>
                </tr>
                <tr>
                    <td class="font-bold pt-3">Shop Number:</td>
                    <td>{{shop.shop_no}}</td>
                </tr>
                <tr>
                    <td class="font-bold pt-3">Block Number:</td>
                    <td>B</td>
                </tr>
            </table>
        </div>
        <div class="flex justify-center mb-6">
            <button class="font-semibold border border-gray-3 py-1 px-8 focus:outline-none hover:bg-green-3 rounded">Cancel Application</button>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import { mapMutations } from 'vuex'

export default {
    middleware: ['auth','shop-verification'],

  components: {
      Breadcrumb,
  },
  data() {
      return {
          breadCrumbs: [
              {title: 'My Shop', url: '/'},
              {title: 'Own Shop', url: ''},
          ],
          shop:'',
      };
  },
  mounted(){
    this.loadShop();
  },
  computed: {
    set() {
      this.$store.commit('shopstatus/add', this.shop.status)
      this.$store.commit('shopstatus/setID', this.$route.params.id)
    }
  },
  methods: {
    async loadShop() {
      await this.$axios.get(
        '/api/my-shops/' + this.$route.params.id
      ).then((res) => {
        this.shop = res.data.data;
        console.log('status = ' + this.shop.status);
      })
      .catch((error) => {
        if(error.response.status == 404){
          this.$nuxt.error({ statusCode: 404, message: 'err message' })
        }
      })
    }

    }
}
</script>
