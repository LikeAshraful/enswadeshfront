<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <!-- Markets Section -->
        <div class="">
            <div class="grid lg:grid-cols-4 sm:grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <div>
                    <data-filter :filtersData="filtersData" :filterTitle="filterTitle"></data-filter>
                </div>

                <div class="lg:col-span-3 sm:col-span-2">
                    <!-- Top Markets -->
                    <top-markets></top-markets>
                    <!-- All Markets -->
                    <all-markets></all-markets>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import DataFilter from '~/components/common/Filter.vue';
import TopMarkets from '~/components/markets/Top.vue';
import AllMarkets from '~/components/markets/All.vue';

export default {
    components: {
        Breadcrumb,
        DataFilter,
        TopMarkets,
        AllMarkets
    },
    data (){
        return {
            breadCrumbs: [
                {title: 'Home', url: '/'},
                {title: 'Go To Market', url: '/cities'},
                {title: this.$route.params.city.toUpperCase(), url: ''},
            ],

            filterTitle: 'Filter by Location',
            filtersData: [],
        }
    },

    async fetch() {
      this.filtersData = await fetch(
        'http://localhost:8000/api/areas'
        ).then(res => res.json())
    }
}
</script>
