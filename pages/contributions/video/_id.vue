<template>
    <div>
        <single-video :video="video" :isLoading="isLoading"></single-video>
    </div>
</template>
<script>
import SingleVideo from '~/components/contributions/SingleVideo.vue'
export default {
    components: {
      SingleVideo,
    },
    data() {
      return {
        video:{},
        isLoading: true,
      }
    },
    mounted(){
      this.loadVideo()
    },
    methods: {
      async loadVideo() {
        await this.$axios
          .get('/api/videos/' + this.$route.params.id)
          .then((res) => {
            this.video = res.data.data
            this.isLoading = false;
          })
          .catch((error) => {
            if (error.response.status == 404) {
              this.$nuxt.error({ statusCode: 404, message: 'err message' })
              this.isLoading = false;
            }
          })
      },
  },

}
</script>
