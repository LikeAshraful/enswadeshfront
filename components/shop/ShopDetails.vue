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
          id="show-modal"
          @click="showModal = true"
          v-tooltip="'Subscribe'"
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
    <!-- use the modal component, pass in the prop -->
    <div v-if="showModal" @close="showModal = false">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-body">
                <form @submit.prevent="subscribeShop(shop.id)">
                  <input
                    type="text"
                    class="focus:outline-none input-field pr-6"
                    placeholder="Enter nickname"
                    v-model="nickname"
                  />
                  <button
                    type="submit"
                    :disabled="disable"
                    :class="
                      subscribeCheck == null ? ' bg-green-3' : ' bg-green-1'
                    "
                    class="md:px-6 px-3 md:py-1 py-1 font-semibold md:text-xl rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: ['shop'],

  data() {
    return {
      showModal: false,
      disable: false,
      subscribeCheck: null,
      count: 0,
      nickname: '',
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
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
