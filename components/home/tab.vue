<template>
    <div>
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
    </div>
</template>
<script>
import Videos from './tabs/videos.vue';
import Templates from './tabs/templates.vue';
import Experiences from './tabs/experiences.vue';
import Memes from './tabs/memes.vue';
import Stories from './tabs/stories.vue';

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
