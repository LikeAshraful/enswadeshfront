<template>
    <div>
        <!-- Breadcrumbs -->
        <div class="flex py-3 px-3">
            <n-link to="/" class="text-blue-1">Home</n-link>
            <img class="px-2" src="~/assets/icons/arrow-right.png" alt="Icon">
            <p>Go To Market</p>
        </div>
        <div class="cities px-3">
            <p class="title-color text-4xl font-black">Where do you want to go ?</p>
            <div style="background-size: cover;" :style="{ backgroundImage: `url(${backgroundImagePath})` }" class="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">

                <div v-for="(city, i) in cities.data" :key="i" :to="city.city_slug">
                  <NuxtLink  :to="{name:'markets', params:{slug: city.city_slug}}">
                    <div class="border-2 border-r-4 border-b-4 border-green-4 rounded-xl">
                        <div :class="city.city_icon" class="px-2 pt-2 rounded-t-xl">
                            <img class="h-24 m-auto" src="~/assets/img/building.png" alt="Image">
                        </div>
                        <div class="flex flex-wrap items-center justify-center">
                            <p class="font-bold py-3 text-xl">{{ city.city_name }}</p>
                        </div>
                    </div>
                  </NuxtLink >
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import backgroundImagePath from '~/assets/img/city.png';

export default {
    data:() => ({
        backgroundImagePath,
        cities: [],
    }),

    async fetch() {
      this.cities = await fetch(
        'http://localhost:8000/api/cities'
      ).then(res => res.json())
    }
}
</script>
