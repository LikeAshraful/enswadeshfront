<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 lg:px-20 px-3">
            <n-link to="/" class="text-blue-500">Home</n-link>
            <img class="px-2" src="~/assets/icons/arrow-right.png" alt="Icon">
            <p>Go To Market</p>
        </div>
        <div class="markets lg:px-20 px-3">
            <p class="title-color text-4xl font-black">Where do you want to go ?</p>
            <div :style="{ backgroundImage: `url(${backgroundImagePath})` }" class="background flex grid grid-cols-6 lg:gap-6 md:gap-3 pt-6 pb-12">
                
                <n-link v-for="(division, i) in divisions" :key="i" :to="division.url">
                    <div class="border-2 division-box rounded-xl">
                        <div :class="division.bg" class="img-box h-32 rounded-xl">
                            <img class="cloud h-10" src="~/assets/img/cloud.png" alt="Image">
                            <img class="building h-12" src="~/assets/img/building.png" alt="Image">
                        </div>
                        <div class="flex flex-wrap items-center justify-center">
                            <p class="font-bold py-3 text-xl">{{ division.name }}</p>
                        </div>
                    </div>
                </n-link>

            </div>
        </div>
    </div>
</template>
<script>
import backgroundImagePath from '~/assets/img/city.png';

export default {
    data:() => ({
        backgroundImagePath,
        divisions: [
            {url: '', bg: 'bg-sky', name: 'DHAKA'},
            {url: '', bg: 'bg-pink', name: 'SYLHET'},
            {url: '', bg: 'bg-blue', name: 'CHITTAGONG'},
            {url: '', bg: 'bg-sky', name: 'BARISHAL'},
            {url: '', bg: 'bg-pink', name: 'MYMENSINGH'},
            {url: '', bg: 'bg-blue', name: 'CHITTAGONG'},
            {url: '', bg: 'bg-blue', name: 'KHULNA'},
            {url: '', bg: 'bg-sky', name: 'RANGPUR'},
        ]
    }) 
}
</script>
<style>
    .markets .title-color {
        color: #163A24;
    }
    .markets .background {
        background-size:  cover;
    }
    .markets .division-box {
        border-color: #163A24;
        -webkit-box-shadow: 3px 3px 1px 2px #163A24; 
        box-shadow: 3px 3px 1px 2px #163A24;
    }
    .markets .division-box .img-box{
        position: relative;
    }
    .markets .division-box .cloud {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    .markets .division-box .building {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .markets .bg-sky {
        background: #DFFCFF;
    }
    .markets .bg-pink {
        background: #FFE6ED;
    }
    .markets .bg-blue {
        background: #E7E6FF;
    }
</style>