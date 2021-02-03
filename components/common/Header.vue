<template>
  <div>
    <div class="w-full lg:py-5">
      <div class="lg:hidden text-center">
        <n-link to="/" class="font-serif text-4xl">Swadesh</n-link>
      </div>
      <div class="max-w-screen-xl xl:px-10 px-2 m-auto grid grid-cols-12 gap-2">
        <div class="lg:col-span-5 col-span-12 lg:text-left text-center font-bold">
          <n-link to="" class="">
            <img class="inline h-5 mr-1" src="~/assets/icons/wallet.png" alt="Icon">S-Wallet
          </n-link>
          <n-link to="" class="pl-3">
            <img class="inline h-5 mr-1" src="~/assets/icons/earn.png" alt="Icon">Earn
          </n-link>
          <n-link to="/my-shop" class="pl-3">
            <img class="inline h-5 mr-1" src="~/assets/icons/shop.png" alt="Icon">My Shop
          </n-link>
        </div>
        <div class="col-span-2 lg:contents hidden text-center">
          <n-link to="/" class="font-serif text-4xl">Swadesh</n-link>
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
          <button @click="showLoginModal" :class="loginModal || registrationModal ? 'text-orange-1':''" class="focus:outline-none text-xl"><i class="ri-user-fill"></i></button>
          <button @click="showCardModal" :class="card ? 'text-orange-1':''" class="focus:outline-none text-xl ml-2"><i class="ri-shopping-bag-2-fill"></i></button>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl xl:px-10 px-2 m-auto sm:font-bold">
      <div class="m-auto text-center">
        <n-link to="/cities">
          <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/market.png" alt="Icon"> Market
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/flash_sales.png" alt="Icon"> Flash Sales
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/festivals.png" alt="Icon"> Festivals
        </n-link>
        <n-link to="" class="sm:pl-6 pl-2">
          <img class="inline sm:h-5 h-4 my-1" src="~/assets/icons/discount.png" alt="Icon"> Discount
        </n-link>
      </div>
    </div>

    <!-- Card Modal -->
    <card v-if="card" v-on:closeCard="closeCardModal()"></card>

    <!-- Login Modal -->
    <login v-if="loginModal" v-on:closeLoginModal="closeLoginModal()" v-on:openRegistrationModal="openRegistrationModal()"></login>
    
    <!-- Registration Modal -->
    <registration v-if="registrationModal" v-on:closeRegistrationModal="closeRegistrationModal()" v-on:openLoginModal="openLoginModal()"></registration>

  </div>
</template>

<script>
import Login from '../auth/Login.vue';
import Card from '../card/Short.vue';
import Registration from '../auth/Registration.vue';

export default {
  components: {
    Card,
    Login,
    Registration,
  },
  data:() => ({
    card: false,
    loginModal: false,
    registrationModal: false,
  }),
  methods: {
    showCardModal(){
      this.card = !this.card;
    },
    closeCardModal(){
      this.card = false;
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
  },
}
</script>
