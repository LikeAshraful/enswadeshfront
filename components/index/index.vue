<template>
  <div>
    <div class="lg:px-20 lg:pt-20 p-3">
      <!-- Section One -->
      <div class="grid lg:grid-cols-4 grid-cols-3 lg:gap-8 gap-4">
        <div class="lg:col-span-2 -2 box-height border-2 box-border-color box-shadow rounded-xl">
          <div class="bg-market rounded-t-xl">
            <img class="market-img" src="~/assets/img/market.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="/cities" class="button lg:px-8 px-4 lg:py-2 py-1">Go To Market</n-link>
          </div>
        </div>
        <div class="border-2 box-height box-border-color box-shadow rounded-xl">
          <div class="commingsoon-one rounded-t-xl">
            <img class="comingsoon-img" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="button lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
        <div class="border-2 box-height box-border-color box-shadow rounded-xl">
          <div class="commingsoon-two rounded-t-xl">
            <img class="comingsoon-img" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="button lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
      </div>

      <!-- Section Two -->
      <div class="mt-20">
        <button :class="videosTab ? 'active' : ''" @click="videosBtn" class="focus:outline-none tap-button">Videos</button>
        <button :class="templatesTab ? 'active' : ''" @click="templatesBtn" class="focus:outline-none tap-button">Templates</button>
        <button :class="experiencesTab ? 'active' : ''" @click="experiencesBtn" class="focus:outline-none tap-button">Real Experiences</button>
        <button :class="memesTab ? 'active' : ''" @click="memesBtn" class="focus:outline-none tap-button">Memes</button>
        <button :class="storiesTab ? 'active' : ''" @click="storiesBtn" class="focus:outline-none tap-button">Stories</button>
        
        <div class="h-full tab-content lg:py-8 py-3">

          <div v-if="videosTab">
            <Videos />
          </div>

          <div v-if="templatesTab">
            <Templates />
          </div>

          <div v-if="experiencesTab">
            <Experiences />
          </div>

          <div v-if="memesTab">
            <Memes />
          </div>

          <div v-if="storiesTab">
            <Stories />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Videos from '~/components/index/tabs/videos.vue';
import Templates from '~/components/index/tabs/templates.vue';
import Experiences from '~/components/index/tabs/experiences.vue';
import Memes from '~/components/index/tabs/memes.vue';
import Stories from '~/components/index/tabs/stories.vue';

export default {
  components: {
    Videos,
    Templates,
    Experiences,
    Memes,
    Stories,
  },
  data: () => ({
    videosTab: true,
    templatesTab: false,
    experiencesTab: false,
    memesTab: false,
    storiesTab: false,
  }),
  methods: {
    videosBtn(){
      this.videosTab = true;
      this.templatesTab = false;
      this.experiencesTab = false;
      this.memesTab = false;
      this.storiesTab = false;
    },
    templatesBtn(){
      this.videosTab = false;
      this.templatesTab = true;
      this.experiencesTab = false;
      this.memesTab = false;
      this.storiesTab = false;
    },
    experiencesBtn(){
      this.videosTab = false;
      this.templatesTab = false;
      this.experiencesTab = true;
      this.memesTab = false;
      this.storiesTab = false;
    },
    memesBtn(){
      this.videosTab = false;
      this.templatesTab = false;
      this.experiencesTab = false;
      this.memesTab = true;
      this.storiesTab = false;
    },
    storiesBtn(){
      this.videosTab = false;
      this.templatesTab = false;
      this.experiencesTab = false;
      this.memesTab = false;
      this.storiesTab = true;
    },
  },
}
</script>

<style>
  /* Section One */
  .box-shadow {
    -webkit-box-shadow: 5px 5px 2px 3px #163A24; 
    box-shadow: 5px 5px 2px 3px #163A24;
  }
  .box-border-color {
    border-color: #163A24;
  }
  .box-height {
    height: 399px;
  }
  .img-height {
    height: 201px;
  }
  .bg-market {
    position: relative;
    height: 251px;
    background: #DFFCFF;
  }
  .market-img {
    height: 220px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .commingsoon-one {
    position: relative;
    height: 251px;
    background: #FFE6ED;
  }
  .commingsoon-two {
    position: relative;
    height: 251px;
    background: #E7E6FF;
  }
  .comingsoon-img {
    height: 230px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .button {
    background: #BAFFD8;
    border: 2px solid #153923;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 54px;
  }

  /* Section Two */
  .tap-button {
    font-weight: bold;
    padding: 5px 15px;
  }
  .active {
    border-top: 2px solid #163A24;
    border-left: 2px solid #163A24;
    border-right: 2px solid #163A24;
    border-bottom: 3px solid white;
    border-radius: 6px 6px 0 0;
    background: white;
    padding-bottom: 6px;
  }
  .tab-content {
    border-top: 2px solid #163A24;
    margin-top: -2px;
    overflow: auto;
  }
</style>


