<template>
    <div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-4 gap-2">
            <div v-for="(video, i) in videos" :key="i" class="border-2 border-green-4"> 
                <div class="relative pb-2/3">
                    <img class="absolute h-full w-full object-cover" src="~/assets/videos/img-one.png" alt="Image">
                    <p class="absolute bottom-0 mb-2 ml-2 text-white bg-green-5 px-3 py-1 inline">{{ video.duration }}</p>
                </div>
                <div class="p-2">
                    <p class="font-bold lg:text-lg">{{ video.title }}</p>
                    <p class="text-gray-2">{{ video.view }} views  •  {{ video.time }} min ago</p>
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
import Paginate from '~/components/common/Paginate.vue';

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