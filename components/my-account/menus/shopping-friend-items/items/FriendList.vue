<template lang="">
    <div>
        <div class="p-4">
            <div class="search">
                <i class="search-icon ri-search-line"></i>
                <input type="text"  v-on:keyup.enter="SearchFriendData" v-model="keyword"  class="search-input w-full focus:outline-none" placeholder="Search">
            </div>
        </div>

        <div class="px-4">
            <div class="grid grid-cols-4 gap-4">
                <div v-for="(item, i) in followers" :key="i" class="flex flex-col items-center border-2 border-r-4 border-b-4 rounded-lg p-2">
                    <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                    <p class="h3 mt-4">{{item.name}}</p>
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
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      keyword:null
    }
  },
  created() {
    this.FriendData()
  },
  computed: {
    ...mapGetters('friend', ['followers']),
  },
  methods: {
    ...mapActions('friend', ['FriendData']),
    SearchFriendData(){
     this.$store.dispatch('friend/SearchFriendData', this.keyword);
    }
  },
}
</script>
