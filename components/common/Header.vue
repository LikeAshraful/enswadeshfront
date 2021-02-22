<template>
  <div>
    <div class="w-full lg:py-5">
      <div class="lg:hidden text-center">
        <n-link to="/" class="font-serif text-4xl">Swadesh</n-link>
      </div>
      <div class="max-w-screen-xl xl:px-10 px-2 m-auto grid grid-cols-12 gap-2">
        <div class="lg:col-span-5 col-span-12 lg:text-left text-center font-bold">
          <div class="flex items-center">

            <n-link to="">
              <div class="flex items-center">
                <i class="ri-wallet-3-fill text-lg mr-1"></i>
                <span>S-Wallet</span>
              </div>
            </n-link>
            <n-link to="" class="pl-4">
              <div class="flex items-center">
                <i class="ri-hand-coin-line text-lg mr-1"></i>
                <span>Earn</span>
              </div>
            </n-link>

            <n-link to="/my-shop" class="pl-4">
              <div class="flex items-center" :class="currentRouteName == 'my-shop' ? 'text-orange-1':''">
                <i class="ri-store-fill text-lg mr-1"></i>
                <span>My Shop</span>
              </div>
            </n-link>

          </div>
        </div>
        <div class="col-span-2 lg:contents hidden text-center">
          <n-link to="/" class="font-serif text-4xl lg:pl-8">
            <div :class="currentRouteName == 'index' ? 'text-orange-1':''">
              Swadesh
            </div>
          </n-link>
        </div>

        <div class="lg:col-span-4 lg:col-start-8 md:col-span-5 md:col-start-2 col-span-9">
          <div class="flex lg:justify-end">
            <div class="border border-gray-2 px-2 py-1 rounded-l-full">
              <button class="flex items-center focus:outline-none font-bold">All<img class="h-5" src="~/assets/icons/drop_down.png" alt="Icon">
              </button>
            </div>
            <div style="margin-left: -1px;" class="flex items-center border border-gray-2 px-3 py-1 rounded-r-full overflow-hidden">
              <img class="h-4 mr-1" src="~/assets/icons/search.png" alt="Icon">
              <input class="focus:outline-none w-full font-bold" type="text" placeholder="Search anything">
            </div>
          </div>
        </div>
        <div class="text-right lg:col-span-1 md:col-span-5 col-span-3">
          <div>
            <!-- <button v-tooltip="'Account'" @click.prevent="logout" :class="loginModal || registrationModal ? 'text-orange-1':''" class="focus:outline-none text-xl"><i class="ri-user-fill"></i></button> -->
            <div class="relative inline-block text-left">
              <div>
                <button v-if="$auth.loggedIn" class="focus:outline-none text-xl" id="options-menu" aria-haspopup="true" aria-expanded="true"><i class="ri-user-fill"></i>
                </button>

                <button v-if="!$auth.loggedIn" v-tooltip="'Account'" @click="showLoginModal" :class="loginModal || registrationModal ? 'text-orange-1':''" class="focus:outline-none text-xl"><i class="ri-user-fill"></i></button>

                <button v-tooltip="'Cart'" @click="showCartModal" :class="cart || currentRouteName == 'cart' || currentRouteName == 'checkout' ? 'text-orange-1':''" class="focus:outline-none text-xl ml-2"><i class="ri-shopping-bag-2-fill"></i></button>

              </div>
              <div v-if="$auth.loggedIn" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{{$auth.user.name}}</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                  <button button v-tooltip="'Account'" @click.prevent="logout" :class="loginModal || registrationModal ? 'text-orange-1':''" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl xl:px-10 px-2 m-auto sm:font-bold">
      <div class="m-auto text-center">
        <!-- <n-link to="/cities" :class="currentRouteName == 'cities' ? 'text-orange-1':''">
          <i class="ri-building-4-fill"></i>
          <span>Market</span>
        </n-link> -->
        <n-link to="" class="sm:pl-6 pl-2">
          <i class="ri-flashlight-fill"></i> Flash Sales
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/festivals.png" alt="Icon"> Festivals
        </n-link>
        <!-- <n-link to="" class="sm:pl-6 pl-2">
          <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/discount.png" alt="Icon"> Discount
        </n-link> -->
      </div>
    </div>

    <!-- Cart Modal -->
    <cart v-if="cart" v-on:closeCart="closeCartModal()"></cart>

    <!-- Login Modal -->
    <login v-if="loginModal" v-on:closeLoginModal="closeLoginModal()" v-on:openRegistrationModal="openRegistrationModal()"></login>

    <!-- Registration Modal -->
    <registration v-if="registrationModal" v-on:closeRegistrationModal="closeRegistrationModal()" v-on:openLoginModal="openLoginModal()"></registration>

  </div>
</template>

<script>
import Login from '../auth/Login.vue';
import Cart from '../cart/Short.vue';
import Registration from '../auth/Registration.vue';

export default {
  components: {
    Cart,
    Login,
    Registration,
  },

  data() {
    return {
      cart: false,
      loginModal: false,
      registrationModal: false,
    }
  },
  mounted() {
    //console.log(this.$auth.user);
  },
  methods: {
    showCartModal(){
      this.cart = !this.cart;
    },
    closeCartModal(){
      this.cart = false;
    },
    showLoginModal(){
      this.loginModal = true;
    },
    closeLoginModal(){
      this.loginModal = false;
    },
    openRegistrationModal(){
      this.loginModal = false;
      this.registrationModal = true;
    },
    closeRegistrationModal(){
      this.registrationModal = false;
    },
    openLoginModal(){
      this.loginModal = true;
      this.registrationModal = false;
    },

    async logout() {
      await this.$auth.logout();
      this.$toast.success('Successfully logout from your account!');
      this.$router.push('/')
    }

    // logout() {
    //     this.$auth.logout()
    //     .then(response => {
    //       this.$toast.success('Successfully logout from your account!');
    //       this.$router.push('/')
    //       //location.reload();
    //     });
    // }
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
}
</script>
