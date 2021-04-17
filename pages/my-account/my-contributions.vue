<template>
    <div>
        <div>
            <p class="title">My Videos (5)</p>
            <div class="p-4 bg-white mb-4">
                <div class="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                    <div v-for="(video, i) in videos" :key="i" class="md:border-2 border border-green-4">
                        <div class="relative pb-2/3">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                            <small class="absolute bottom-0 mb-2 ml-2 text-white bg-green-5 px-3 py-1 inline">10:00</small>
                        </div>
                        <div class="p-2">
                            <p class="font-bold lg:text-lg">Video name goes here</p>
                            <p class="text-gray-2">512 views  •  7 min ago </p>
                        </div>
                    </div>
                </div>
                <!-- When no videos yet -->
                <!-- <div class="py-10 text-center">
                    <p class="h2">You have no videos</p>
                </div> -->
            </div>
            <p class="title">My Templates (3)</p>
            <div class="p-4 bg-white mb-4">
                <div class="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                    <div v-for="(template, i) in templates" :key="i" class="md:border-2 border border-green-4">
                        <div class="relative pb-2/3">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                        </div>
                        <div class="p-2">
                            <p class="font-bold lg:text-lg">Templates name goes here</p>
                            <p class="text-gray-2">512 views  •  7 min ago </p>
                        </div>
                    </div>
                </div>
                <!-- When no templates yet -->
                <!-- <div class="py-10 text-center">
                    <p class="h2">You have no templates</p>
                </div> -->
            </div>
            <p class="title">My Real Experiences (2)</p>
            <div class="p-4 bg-white mb-4">
                <div class="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                    <div v-for="(experience, i) in experiences" :key="i" class="md:border-2 border border-green-4">
                        <div class="relative pb-2/3">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                        </div>
                        <div class="p-2">
                            <p class="font-bold lg:text-lg">Real experiences name goes here</p>
                            <p class="text-gray-2">512 views  •  7 min ago </p>
                        </div>
                    </div>
                </div>
                <!-- When no real experiences yet -->
                <!-- <div class="py-10 text-center">
                    <p class="h2">You have no real experiences</p>
                </div> -->
            </div>
            <p class="title">My Memes (3)</p>
            <div class="p-4 bg-white mb-4">
                <!-- <div class="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                    <div v-for="(meme, i) in memes" :key="i" class="md:border-2 border border-green-4">
                        <div class="relative pb-2/3">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                        </div>
                        <div class="p-2">
                            <p class="font-bold lg:text-lg">Memes name goes here</p>
                            <p class="text-gray-2">512 views  •  7 min ago </p>
                        </div>
                    </div>
                </div> -->
                <!-- When no memes yet -->
                <div class="py-10 text-center">
                    <p class="h2">You have no memes</p>
                </div>
            </div>
            <p class="title">My Stories (2)</p>
            <div class="p-4 bg-white mb-4">
                <div class="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
                    <div v-for="(storie, i) in stories" :key="i" class="md:border-2 border border-green-4">
                        <div class="relative pb-2/3">
                            <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                        </div>
                        <div class="p-2">
                            <p class="font-bold lg:text-lg">Stories name goes here</p>
                            <p class="text-gray-2">512 views  •  7 min ago </p>
                        </div>
                    </div>
                </div>
                <!-- When no stories yet -->
                <!-- <div class="py-10 text-center">
                    <p class="h2">You have no stories</p>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            videos: [
                '',
                '',
                '',
                '',
                '',
            ],
            templates: [
                '',
                '',
                '',
            ],
            experiences: [
                '',
                '',
            ],
            memes: [
                '',
                '',
                '',
            ],
            stories: [
                '',
                '',
            ],
        }
    }
}
</script>