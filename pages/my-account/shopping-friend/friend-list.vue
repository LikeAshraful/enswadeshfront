<template >
    <div>
        <div class="p-4">
            <div class="search">
                <i class="search-icon ri-search-line"></i>
                <input type="text"  v-on:keyup="searchFriendData" class="search-input w-full focus:outline-none" placeholder="Search">
            </div>
        </div>

        <div class="px-4">
            <div v-if="sfriends.length > 0" class="grid grid-cols-4 gap-4">
                <div v-for="(friend, i) in sfriends" :key="i" class="flex flex-col items-center border-2 border-r-4 border-b-4 rounded-lg p-2">
                    <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                    <p class="h3 mt-4">{{friend.name}}</p>
                    <div class="w-full mt-4 flex items-center justify-center gap-4 text-xl">
                        <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-message-2-fill"></i></button>
                        <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-phone-fill"></i></button>
                        <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-video-chat-fill"></i></button>
                    </div>
                    <button class="mt-4 btn-border hover:bg-green-3 focus:outline-none">Unfriend</button>
                </div>
            </div>
            <div v-else class="grid grid-cols-4 gap-4">
                <div v-for="(friend, i) in friends" :key="i" class="flex flex-col items-center border-2 border-r-4 border-b-4 rounded-lg p-2">
                    <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                    <p class="h3 mt-4">{{friend.name}}</p>
                    <div class="w-full mt-4 flex items-center justify-center gap-4 text-xl">
                        <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-message-2-fill"></i></button>
                        <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-phone-fill"></i></button>
                        <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-video-chat-fill"></i></button>
                    </div>
                    <button class="mt-4 btn-border hover:bg-green-3 focus:outline-none">Unfriend</button>
                </div>
            </div>
        </div>
        <div class="p-4 flex justify-center">
            <button class="btn-border hover:bg-green-3 focus:outline-none">View more</button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      sfriends: [],
      friends: []
    }
  },

  mounted(){
    this.loadFriends();
  },

  methods: {
    async searchFriendData(e)
    {
      let keyword = e.target.value;
      if (!keyword) {
        this.$router.push({path: 'friend-list'});
        this.friends = [];
      }else{
        await this.$axios.get('/api/search/shoping-friend/' + keyword)
        .then((response) => {
          this.sfriends = response.data.data;
        })
        .catch((error) => {
          if (error.response.status == 404) {
            this.$nuxt.error({ statusCode: 404, message: 'err message' })
          }
        })
      }
    },
    async loadFriends()
    {
      await this.$axios.get('/api/friend-lists')
      .then((response) => {
        this.friends = response.data.data;
      })
      .catch((error) => {
        if (error.response.status == 404) {
          this.$nuxt.error({ statusCode: 404, message: 'err message' })
        }
      })
    }
  },
}
</script>
