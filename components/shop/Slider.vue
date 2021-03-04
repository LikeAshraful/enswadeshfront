<template>
    <div>
        <VueSlickCarousel  v-bind="settings">
            <div class="px-1" v-for="(slider, i) in sliders" :key="i">
                <img class="rounded-lg h-40" :src="require(`~/assets/img/shops/${slider}`)" alt="Image">
            </div>
        </VueSlickCarousel>
    </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    data() {
        return {
            settings: {
                "dots": true,
                "infinite": true,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "autoplay": true,
                "autoplaySpeed": 2000,
                "pauseOnDotsHover": true,
                "pauseOnFocus": true,
                "pauseOnHover": true
            },
            sliders: [
                'img-1.png',
                'img-2.png',
                'img-3.png',
                'img-4.png',
                'img-2.png',
                'img-3.png',
                'img-1.png',
                'img-4.png',
                'img-2.png',
                'img-3.png',
            ]
        }
    },
    components: 
    { 
        VueSlickCarousel
    },
  }
</script> 