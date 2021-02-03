<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <!-- All Cities -->
        <div class="cities">
            <p class="title-color md:text-4xl text-2xl font-black">Where do you want to go ?</p>
            <div style="background-size: cover;" :style="{ backgroundImage: `url(${backgroundImagePath})` }" class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
                <div v-for="(city, i) in cities.data" :key="i">
                    <NuxtLink :to="{name:'markets-city-id', params:{city: city.city_slug, id: city.id }}">
                        <div class="border-2 border-r-4 border-b-4 border-green-4 rounded-xl">
                            <div class="px-2 pt-2 bg-pink-1 rounded-t-xl">
                                <img class="h-24 m-auto" src="~/assets/img/building.png" alt="Image">
                            </div>
                            <div class="flex flex-wrap items-center justify-center">
                                <p class="font-bold py-3 text-xl">{{ city.city_name }}</p>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import backgroundImagePath from '~/assets/img/city.png';

export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
          cities: [],
          basePath: this.$axios.defaults.baseURL,
          breadCrumbs: [
              {title: 'Home', url: '/'},
              {title: 'Go To Market', url: ''},
          ],
          backgroundImagePath,
        };
      },

    async fetch() {
      this.cities = await fetch(
        this.basePath + '/api/cities'
      ).then(res => res.json())
    }
}
</script>
