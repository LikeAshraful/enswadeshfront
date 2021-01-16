<template>
    <div>
        <div class="grid lg:grid-cols-4 grid-cols-3 lg:gap-8 gap-3">
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
        <!-- Paginate -->
        <div class="lg:mx-20 mx-3 lg:mt-8 mt-3">
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
    })
}
</script>
<style>
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