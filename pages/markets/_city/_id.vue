<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <!-- Markets Section -->
        <div class="">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <data-filter :filtersData="filtersData" :filterTitle="filterTitle"></data-filter>
                <div class="lg:col-span-3 col-span-2">
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
                {title: 'Dhaka', url: ''},
            ],

            filterTitle: 'Filter by Location',
            filtersData: [
                {url: '', name: 'Badda'},
                {url: '', name: 'Bashundhara'},
                {url: '', name: 'Adabor'},
                {url: '', name: 'Uttara'},
                {url: '', name: 'Dhanmondi'},
                {url: '', name: 'Mohammadpur'},
                {url: '', name: 'Malibag'},
                {url: '', name: 'Gulistan'},
                {url: '', name: 'Banani'},
                {url: '', name: 'Demra'},
            ],
        }
    },
}
</script>
