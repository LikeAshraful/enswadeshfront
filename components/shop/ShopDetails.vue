<template>
  <div>
    <div>
      <p class="font-bold text-xl">{{ shop.name }}</p>
      <p class="text-gray-2">{{ count }} Subscribers</p>
      <p class="text-gray-2">55 Active Customers</p>
      <div class="flex text-yellow-2">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>
        <p class="text-gray-2 ml-2">(4.5)</p>
      </div>
      <div class="flex text-center gap-4 pt-2">
        <n-link to="">
          <i class="rounded-lg bg-green-1 p-2 ri-message-2-fill"></i>
          <p>Text us</p>
        </n-link>
        <n-link to="">
          <i class="rounded-lg bg-green-1 p-2 ri-phone-fill"></i>
          <p>Call us</p>
        </n-link>
        <n-link to="">
          <i class="rounded-lg bg-green-1 p-2 ri-video-chat-fill"></i>
          <p>Video call</p>
        </n-link>
      </div>
      <div class="md:my-4">
        <a
          href="javascript:void(0);"
          @click="subscribeShopLogin"
          v-if="!$auth.loggedIn"
          class="w-full md:px-6 px-3 md:py-1 py-1 font-semibold md:text-xl rounded-lg bg-green-3"
          >Subscribe</a
        >
        <button
          @click="subscribeShop(shop.id)"
          v-if="$auth.loggedIn"
          :disabled="disable"
          :class="subscribeCheck == null ? ' bg-green-3' : ' bg-green-1'"
          class="md:px-6 px-3 md:py-1 py-1 font-semibold md:text-xl rounded-lg"
        >
          {{ subscribeCheck ? 'Subscribed' : 'Subscribe' }}
        </button>
        <n-link
          to=""
          class="w-full md:px-6 px-3 md:py-1 py-1 font-semibold md:text-xl rounded-lg border border-orange-1 md:ml-3 ml-1"
          >Invite Friend</n-link
        >
      </div>
      <div>
        <div class="text-purple-2 border border-purple-2 rounded-lg md:p-2 p-1">
          <p>
            <strong>Note:</strong> Subscribe us & get 5% discount on every
            product
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['shop'],

  data() {
    return {
      disable: false,
      subscribeCheck: null,
      count: 0,
      nickname: 'Sanwarul',
    }
  },

  mounted() {
    this.getSubscribeCount()
    this.checkSubscribe()
  },
  methods: {
    async subscribeShop(id) {
      var formData = new FormData()
      formData.append('nickname', this.nickname)
      formData.append('shop_id', id)
      await this.$axios
        .post('api/subscribe-request', formData)
        .then((response) => {
          this.getSubscribeCount()
          this.checkSubscribe()
          this.$toast.success('Success Subscribe!')
        })
        .catch((error) => {
          this.$toast.error('Oops..!-' + error.response.data.message)
        })
    },
    subscribeShopLogin() {
      this.$router.push({ name: 'login' })
    },

    async getSubscribeCount() {
      await this.$axios
        .$get('/api/subscribe-count-by-shop/' + this.$route.params.id)
        .then((res) => {
          this.count = res.data
        })
    },
    async checkSubscribe() {
      await this.$axios
        .$get(
          this.$auth.loggedIn
            ? '/api/subscribe-check-by-shop-customer/' + this.$route.params.id
            : '/api/shops/' + this.$route.params.id
        )
        .then((res) => {
          this.subscribeCheck = res.data
          if (this.subscribeCheck != null) {
            this.disable = true
          }
        })
    },
  },
}
</script>
