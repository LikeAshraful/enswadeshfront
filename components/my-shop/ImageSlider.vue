<template>
    <div>
        <div class="px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5 relative">
                <div v-for="(photo, i) in photos" :key="i">
                    <img class="h-40 rounded-xl" :src="require(`~/assets/img/shops/${photo}.png`)" alt="">
                </div>
                <button style="right: -20px;" class="w-10 h-10 items-center border border-gray-2 bg-white focus:outline-none rounded-full absolute mt-16 ml-2">
                    <i class="ri-arrow-right-line"></i>
                </button>
                <button style="left: -28px;" class="w-10 h-10 items-center border border-gray-2 bg-white focus:outline-none rounded-full absolute mt-16 ml-2">
                    <i class="ri-arrow-left-line"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:() => ({
        photos:[
            'img-1',
            'img-2',
            'img-3',
            'img-4',
        ]
    })
}
</script>