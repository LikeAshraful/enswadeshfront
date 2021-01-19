<template>
  <div>
    <div class="lg:px-20 lg:pt-20 p-3">
      <!-- Section One -->
      <div class="grid lg:grid-cols-4 grid-cols-3 lg:gap-8 gap-4">
        <div class="lg:col-span-2 -2 h-96 border-2 border-green-4 border-r-8 border-b-8 rounded-xl">
          <div class="bg-gray-1 pt-12 rounded-t-xl">
            <img class="h-56 m-auto" src="~/assets/img/market.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="/cities" class="bg-green-3 border-2 border-green-4 rounded-xl font-bold my-10 lg:px-8 px-4 lg:py-2 py-1">Go To Market</n-link>
          </div>
        </div>
        <div class="border-2 h-96 border-green-4 border-r-8 border-b-8 rounded-xl">
          <div class="bg-pink-1 pt-12 rounded-t-xl">
            <img class="h-56 m-auto" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="bg-green-3 border-2 border-green-4 rounded-xl font-bold my-10 lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
        <div class="border-2 h-96 border-green-4 border-r-8 border-b-8 rounded-xl">
          <div class="bg-purple-1 pt-12 rounded-t-xl">
            <img class="h-56 m-auto" src="~/assets/img/full-building.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="bg-green-3 border-2 border-green-4 rounded-xl font-bold my-10 lg:px-8 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
      </div>

      <!-- Tab Section -->
      <div class="mt-20">
        <button :class="videosTab ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" @click="videosBtn" class="focus:outline-none font-bold px-6 py-2">Videos</button>
        <button :class="templatesTab ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" @click="templatesBtn" class="focus:outline-none font-bold px-6 py-2">Templates</button>
        <button :class="experiencesTab ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" @click="experiencesBtn" class="focus:outline-none font-bold px-6 py-2">Real Experiences</button>
        <button :class="memesTab ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" @click="memesBtn" class="focus:outline-none font-bold px-6 py-2">Memes</button>
        <button :class="storiesTab ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white' : ''" @click="storiesBtn" class="focus:outline-none font-bold px-6 py-2">Stories</button>
        
        <div style="margin-top: -2px;" class="h-full border-t-2 border-green-4 lg:py-8 py-3">

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
      <!-- End Tab Section -->
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


