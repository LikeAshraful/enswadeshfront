<template lang="">
  <div> 
    <p class="md:h1 h2">My Account</p> 
    <div class="min-h-screen grid md:grid-cols-4 gap-4 py-4">  
      <div> 
        <!-- User details --> 
        <user-details></user-details> 
        <div class="bg-white md:p-4 p-2 mt-4"> 
          <ul> 
            <li v-for="(menu, i) in accountmenu" :class="$route.path == menu.to ? 'bg-green-3' : ''" class="list-items hover:bg-green-3" :key="'menu'+i"> 
              <NuxtLink class="block" :to="menu.to" >{{ menu.title }}</NuxtLink> 
            </li> 
          </ul> 
        </div>
      </div>
      <div class="md:col-span-3">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>
<script>
import UserDetails from '~/components/my-account/UserDetails.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  middleware: ['auth'],
  data() {
    return {}
  },
  created() {
    this.myShopsData()
  },
  components: {
    UserDetails,
  },
  computed: {
    accountmenu() {
      var menuList = [
        { title: 'Shops', to: '/my-account/shops' },
        { title: 'My Shopping Friends', to: '/my-account/shopping-friend' },
        { title: 'My shops (' + this.myshops.length + ')', to: '/my-account/myshops', },
        { title: 'My orders', to: '/my-account/myorders' },
        { title: 'My wishlist', to: '/my-account/mywishlist' },
        { title: 'My Reviews', to: '/my-account/myreviews' },
        { title: 'My Contributions', to: '/my-account/my-contributions' },
      ]
      return menuList
    },
    ...mapGetters('shops', ['myshops']),
  },
  methods: {
    ...mapActions('shops', ['myShopsData']),
  },
}
</script>
