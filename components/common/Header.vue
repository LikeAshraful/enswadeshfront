<template>
  <div>
    <div class="w-full lg:py-5">
      <div class="max-w-screen-xl xl:px-10 px-2 m-auto grid grid-cols-3 items-center justify-center gap-2">
        <div>
          <n-link to="/" class="text-4xl" :class="currentRouteName == 'index' ? 'text-orange-1':''">Swadesh</n-link>
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="border border-gray-4 px-2 py-1 rounded-l-full">
            <select class="focus:outline-none font-semibold" name="" id="">
              <option value="All" selected>All</option>
              <option value="Market">Market</option>
              <option value="Shop">Shop</option>
              <option value="Product">Product</option>
            </select>
          </div>
          <div style="margin-left: -1px;" class="flex items-center border border-gray-4 px-2 py-1 rounded-r-full overflow-hidden">
            <i class="ri-search-line mr-2"></i>
            <input class="focus:outline-none w-full font-semibold" type="text" placeholder="Search anything">
          </div>
        </div>
        <div class="flex flex-row justify-end">
          <div>
            <button class="focus:outline-none text-xl mr-2" v-tooltip="'Chat'"><i class="ri-chat-4-fill"></i></button>
            <button class="focus:outline-none text-xl mr-2" v-tooltip="'Notification'"><i class="ri-notification-2-fill"></i></button>

            <button v-if="$auth.loggedIn" @click="showAccountOptions" v-tooltip="'Account'" class="focus:outline-none text-xl" id="options-menu" aria-haspopup="true" aria-expanded="true"><i class="ri-user-fill"></i>
            </button>

            <button v-if="!$auth.loggedIn" v-tooltip="'Account'" @click="showLoginModal" :class="loginModal || registrationModal ? 'text-orange-1':''" class="focus:outline-none text-xl"><i class="ri-user-fill"></i></button>

            <button v-tooltip="'Cart'" @click="showCartModal" :class="cart || currentRouteName == 'cart' || currentRouteName == 'checkout' ? 'text-orange-1':''" class="focus:outline-none text-xl ml-2"><i class="ri-shopping-bag-2-fill"></i></button>
          </div>

          <account v-if="accountOptions"  v-on:showAccountOptions="showAccountOptions()"></account>
          <!-- <div v-if="$auth.loggedIn && accountOptions" class="lg:mr-20 absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white border border-gray-4 font-semibold">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <p @click="showAccountOptions" class="text-right font-semibold cursor-pointer text-red-500 mr-2"><i class="ri-close-line"></i></p>
              <a href="#" class="block px-4 py-1 text-gray-700 hover:bg-gray-100" role="menuitem">{{$auth.user.name}}</a>
              <a href="#" class="block px-4 py-1 text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
              <button @click.prevent="logout" :class="loginModal || registrationModal ? 'text-orange-1':''" class="block px-4 py-1 font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none">Sign out</button>
            </div>
          </div> -->
        </div>
        <!-- <div class="flex flex-row justify-end">
          <div class="flex flex-row mr-4">
            <div class="border border-gray-2 px-2 py-1 rounded-l-full">
              <button class="flex items-center focus:outline-none font-bold">All<img class="h-5" src="~/assets/icons/drop_down.png" alt="Icon">
              </button>
            </div>
            <div style="margin-left: -1px;" class="flex items-center border border-gray-2 px-3 py-1 rounded-r-full overflow-hidden">
              <img class="h-4 mr-1" src="~/assets/icons/search.png" alt="Icon">
              <input class="focus:outline-none w-full font-bold" type="text" placeholder="Search anything">
            </div>
          </div>
          <div class="relative inline-block text-left">
            <div>
              <button class="focus:outline-none text-xl mr-2"><i class="ri-chat-4-fill"></i></button>
              <button class="focus:outline-none text-xl mr-2"><i class="ri-notification-2-fill"></i></button>

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
        </div> -->
      </div>
    </div>
    <div class="max-w-screen-xl xl:px-10 px-2 m-auto sm:font-bold">
      <div class="flex flex-row items-center justify-center">
        <n-link to="">
          <div class="flex items-center">
            <i class="ri-wallet-3-fill mr-1"></i>
            <span>S-Wallet</span>
          </div>
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <div class="flex items-center">
            <i class="ri-hand-coin-line mr-1"></i>
            <span>Earn</span>
          </div>
        </n-link>
        <n-link to="/my-shop" class="sm:pl-6 pl-2">
          <div class="flex items-center" :class="currentRouteName == 'my-shop' ? 'text-orange-1':''">
            <i class="ri-store-fill mr-1"></i>
            <span>My Shop</span>
          </div>
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <div class="flex items-center" :class="currentRouteName == 'my-shop' ? 'text-orange-1':''">
            <i class="ri-flashlight-fill"></i> 
            <span>Flash Sales</span>
          </div>
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <div class="flex items-center" :class="currentRouteName == 'my-shop' ? 'text-orange-1':''">
            <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/festivals.png" alt="Icon"> 
            <span>Festivals</span>
          </div>
        </n-link>
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
import Account from './Account.vue';

export default {
  components: {
    Cart,
    Login,
    Registration,
    Account,
  },

  data() {
    return {
      cart: false,
      loginModal: false,
      registrationModal: false,
      accountOptions: false,
    }
  },
  mounted() {
    //console.log(this.$auth.user);
  },
  methods: {
    showAccountOptions()
    {
      this.accountOptions = !this.accountOptions;
    },
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

    // async logout() {
    //   await this.$auth.logout();
    //   this.$toast.success('Successfully logout from your account!');
    //   this.$router.push('/');
    //   this.accountOptions = false;
    // }

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
