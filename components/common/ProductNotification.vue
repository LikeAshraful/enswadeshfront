<template>
    <div>
        <div @click="closeNotifyBox" class="fixed inset-0 z-50 flex flex-col items-end max-w-screen-xl xl:px-10 px-2 m-auto mt-24">
            <div @click="wait" class="focus-in max-w-sm shadow-lg p-4 border border-gray-3 bg-white overflow-y-scroll">
                <p class="font-bold text-xl mb-6 text-center">Here's You've Unread Notifications.</p>
                <div v-if="isLoading" class="text-center">
                  <loader></loader>
                </div>
                <div v-else class="">
                    <div class="border-b p-2" v-for="(notification, i) in notifications" :key="i">
                        <div v-if="notification.data.data">
                            <h2 class="text-xl font-semibold pb-3">{{notification.data.data.name}}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="closeNotifyBox" class="fixed inset-0"></div>
    </div>
</template>
<script>
import Loader from '~/components/lib/Loader.vue'

export default {
    data() {
      return {
        isLoading: true,
        close_modal: 'closeModal',
        notifications:{},
      }
    },
    components: {
      Loader
    },
    mounted() {
      this.loadNotifications();
    },
    methods: {
      closeNotifyBox()
      {
        if(this.close_modal == 'closeModal')
        {
          this.$emit('closeNotify');
        }
      },
      wait()
      {
        this.close_modal = 'wait';
        setTimeout(() => this.close_modal = 'closeModal', 500);
      },

      async loadNotifications() {
        await this.$axios.get('/api/notifications/product-notification')
        .then((res) => {
          this.notifications = res.data.data;
          this.isLoading = false;
        })
      },

      readNotification(event)
      {
        const id = event.target.getAttribute('data-id');
        const readData = {id: id };
        this.$axios.post('/api/notifications/read', readData)
        .then( respons => {
          this.loadNotifications();
          this.$toast.success('Your Shop setup is done')
        })
      }
    },
}
</script>
