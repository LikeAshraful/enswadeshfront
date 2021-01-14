<template>
  <div>
    <div class="lg:px-20 lg:pt-20 p-3">
      <!-- Section One -->
      <div class="grid grid-cols-4 lg:gap-8 gap-4">
        <div class="col-span-2 -2 box-height border-2 box-border-color box-shadow rounded-xl">
          <div class="bg-market rounded-t-xl">
            <img class="market-img" src="~/assets/img/market.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="button lg:px-10 px-4 lg:py-2 py-1">Go To Market</n-link>
          </div>
        </div>
        <div class="border-2 box-height border-2 box-border-color box-shadow rounded-xl">
          <div class="commingsoon-one rounded-t-xl">
            <img class="comingsoon-img" src="~/assets/img/comingsoon.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="button lg:px-10 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
        <div class="border-2 box-height border-2 box-border-color box-shadow rounded-xl">
          <div class="commingsoon-two rounded-t-xl">
            <img class="comingsoon-img" src="~/assets/img/comingsoon.png" alt="Image">
          </div>
          <div class="flex flex-wrap items-center justify-center">
            <n-link to="" class="button lg:px-10 px-4 lg:py-2 py-1">Coming Soon</n-link>
          </div>
        </div>
      </div>

      <!-- Section Two -->
      <div class="tab-height mt-20">
        <button :class="videosTab ? 'active' : ''" @click="videosBtn" class="focus:outline-none tap-button">Videos</button>
        <button :class="templatesTab ? 'active' : ''" @click="templatesBtn" class="focus:outline-none tap-button">Templates</button>
        <button :class="experiencesTab ? 'active' : ''" @click="experiencesBtn" class="focus:outline-none tap-button">Real Experiences</button>
        <button :class="memesTab ? 'active' : ''" @click="memesBtn" class="focus:outline-none tap-button">Memes</button>
        <button :class="storiesTab ? 'active' : ''" @click="storiesBtn" class="focus:outline-none tap-button">Stories</button>
        
        <div class="h-full tab-content lg:pt-8 pt-4">

          <div v-if="videosTab" class="grid grid-cols-4 lg:gap-8 gap-4">
            <div v-for="(video, i) in videos" :key="i" class="video"> 
              <div class="video-show">
                <img class="video-img" :src="require(`~/assets/videos/${video.url}`)" alt="Image">
                <p class="video-duration">{{ video.duration }}</p>
              </div>
              <div class="p-2">
                <p class="font-bold text-xl video-title-color">{{ video.title }}</p>
                <p class="video-details-color">{{ video.view }} views  •  {{ video.time }} min ago</p>
              </div>
            </div>
          </div>

          <div v-if="templatesTab" class="grid grid-cols-4 lg:gap-8 gap-4">
            <div class="bg-red-200"> 
              Templates Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
            <div class="bg-red-200"> 
              Remplates Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
          </div>

          <div v-if="experiencesTab" class="grid grid-cols-4 lg:gap-8 gap-4">
            <div class="bg-red-200"> 
              Experiences Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
            <div class="bg-red-200"> 
              Experiences Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
          </div>
          
          <div v-if="memesTab" class="grid grid-cols-4 lg:gap-8 gap-4">
            <div class="bg-red-200"> 
              Memes Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
            <div class="bg-red-200"> 
              Memes Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
          </div>

          <div v-if="storiesTab" class="grid grid-cols-4 lg:gap-8 gap-4">
            <div class="bg-red-200"> 
              Stories Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
            <div class="bg-red-200"> 
              Stories Tab <br>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi praesentium accusantium et magnam commodi.
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Section Three -->
    <div class="lg:mx-20 mx-3 lg:my-8 my-3">
      <Paginate />
    </div>

  </div>
</template>

<script>
import Paginate from '~/components/common/paginate.vue';

export default {
  components: {
    Paginate,
  },
  data: () => ({
    videosTab: true,
    templatesTab: false,
    experiencesTab: false,
    memesTab: false,
    storiesTab: false,

    videos: [
      {url: 'img-one.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-two.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-three.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-four.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-five.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-six.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-seven.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
      {url: 'img-eight.png', duration: '10:00', title: 'Video name goes here', view: '512', time: '7'},
    ]
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
  .tab-height {
    height: 550px;
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

  /* Videos */
  .video {
    border: 2px solid #163A24;
  }
  .video-img {
    width: 100%;
    height: 154px;
  }
  .video-title-color {
    color: #163A24;
  }
  .video-details-color {
    color: #6A8173;
  }
  .video-show {
    position: relative;
  }
  .video-duration {
    color: white;
    background: #0A1A10;
    padding: 3px 10px;
    display: inline;
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
</style>


