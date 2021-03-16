<template>
  <div>
    <div class="w-full lg:py-5">
      <div
        class="max-w-screen-xl xl:px-10 px-2 m-auto grid grid-cols-3 items-center justify-center gap-2"
      >
        <div>
          <n-link
            to="/"
            class="text-4xl"
            :class="currentRouteName == 'index' ? 'text-orange-1' : ''"
            >Swadesh</n-link
          >
        </div>
        <div class="flex flex-row items-center justify-center">
          <div class="border border-gray-4 px-2 py-1 rounded-l-full">
            <select
              class="focus:outline-none font-semibold"
              v-model="selectType"
              name=""
              id=""
            >
              <option
                v-for="(searchdata, keysearchdata) in searchdatas"
                :key="keysearchdata"
                :value="searchdata.value"
                selected
              >
                {{ searchdata.title }}
              </option>
            </select>
          </div>
          <div
            style="margin-left: -1px"
            class="flex items-center border border-gray-4 px-2 py-1 rounded-r-full overflow-hidden"
          >
            <i class="ri-search-line mr-2"></i>
            <input
              @keyup="mainSearchInHearder"
              v-model="keyword"
              class="focus:outline-none w-full font-semibold"
              type="text"
              placeholder="Search anything"
            />
          </div>
        </div>
        <div class="flex flex-row justify-end">
          <div>
            <button class="focus:outline-none text-xl mr-2" v-tooltip="'Chat'">
              <i class="ri-chat-4-fill"></i>
            </button>

            <span class="relative">
                <button
                  class="focus:outline-none text-xl mr-2" v-tooltip="'Notification'" @click="showNotifyModal">
                  <i class="ri-notification-2-fill"></i>
                </button>
                <span v-if="notify_count > 0" class="bg-orange-1 text-white absolute notify-tooltip rounded-full">{{notify_count}}</span>
            </span>

            <button
              v-if="$auth.loggedIn"
              @click="showAccountOptions"
              v-tooltip="'Account'"
              class="focus:outline-none text-xl"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <i class="ri-user-fill"></i>
            </button>

            <button
              v-if="!$auth.loggedIn"
              v-tooltip="'Account'"
              @click="showLoginModal"
              :class="loginModal || registrationModal ? 'text-orange-1' : ''"
              class="focus:outline-none text-xl"
            >
              <i class="ri-user-fill"></i>
            </button>

            <button
              v-tooltip="'Cart'"
              @click="showCartModal"
              :class="
                cart ||
                currentRouteName == 'cart' ||
                currentRouteName == 'checkout'
                  ? 'text-orange-1'
                  : ''
              "
              class="focus:outline-none text-xl ml-2"
            >
              <i class="ri-shopping-bag-2-fill"></i>
            </button>
          </div>

          <account
            v-if="accountOptions"
            v-on:showAccountOptions="showAccountOptions()"
          ></account>
        </div>
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
          <div
            class="flex items-center"
            :class="currentRouteName == 'my-shop' ? 'text-orange-1' : ''"
          >
            <i class="ri-store-fill mr-1"></i>
            <span>My Shop</span>
          </div>
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <div
            class="flex items-center"
            :class="currentRouteName == 'flash-sales' ? 'text-orange-1' : ''"
          >
            <i class="ri-flashlight-fill"></i>
            <span>Flash Sales</span>
          </div>
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <div
            class="flex items-center"
            :class="currentRouteName == 'festivals' ? 'text-orange-1' : ''"
          >
            <img
              class="inline sm:h-5 h-4 my-1"
              src="~/assets/icons/festivals.png"
              alt="Icon"
            />
            <span>Festivals</span>
          </div>
        </n-link>
      </div>
    </div>

    <!-- Cart Modal -->
    <cart v-if="cart" v-on:closeCart="closeCartModal()"></cart>
    <!-- Notification Modal  -->
    <notification v-if="notify"  v-on:closeNotify="closeNotifyModal()"></notification>

    <!-- Login Modal -->
    <login
      v-if="loginModal"
      v-on:closeLoginModal="closeLoginModal()"
      v-on:openRegistrationModal="openRegistrationModal()"
    ></login>

    <!-- Registration Modal -->
    <registration
      v-if="registrationModal"
      v-on:closeRegistrationModal="closeRegistrationModal()"
      v-on:openLoginModal="openLoginModal()"
    ></registration>
  </div>
</template>

<script>
import _ from 'lodash'
import Login from '../auth/Login.vue'
import Cart from '../cart/Short.vue'
import Notification from '../common/Notification.vue'
import Registration from '../auth/Registration.vue'
import Account from './Account.vue'

export default {
  components: {
    Cart,
    Notification,
    Login,
    Registration,
    Account,
  },

  data() {
    return {
      alls: [],
      markets: [],
      shops: [],
      products: [],
      searchdatas: [
        { value: 0, title: 'All' },
        { value: 1, title: 'Market' },
        { value: 2, title: 'Shop' },
        { value: 3, title: 'Product' },
      ],
      cart: false,
      notify:false,
      loginModal: false,
      registrationModal: false,
      accountOptions: false,
      selectType: 0,
      keyword: '',
      notify_count:0,
    }
  },
  mounted() {
    //console.log(this.$auth.user);
    this.loadNotifications();
  },
  methods: {
    showAccountOptions() {
      this.accountOptions = !this.accountOptions
    },
    showCartModal() {
      this.cart = !this.cart
    },
    closeCartModal() {
      this.cart = false
    },
    showNotifyModal() {
      this.notify = !this.notify
    },
    closeNotifyModal(value) {
      this.notify = false
    },
    showLoginModal() {
      this.loginModal = true
    },
    closeLoginModal() {
      this.loginModal = false
    },
    openRegistrationModal() {
      this.loginModal = false
      this.registrationModal = true
    },
    closeRegistrationModal() {
      this.registrationModal = false
    },
    openLoginModal() {
      this.loginModal = true
      this.registrationModal = false
    },
    mainSearchInHearder: _.debounce(function (e) {
      let data = {
        keyword: e.target.value,
        selectType: this.selectType,
      }
      this.$store.dispatch('search/loadSearch', data)
    }, 500),

    async loadNotifications() {
      await this.$axios.get('/api/notifications')
      .then((res) => {
        this.notify_count = res.data.data.length;
      })
    }
  },

  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
}
</script>
