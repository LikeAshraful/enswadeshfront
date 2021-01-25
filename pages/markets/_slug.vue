<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"/>
        <!-- Markets Section -->
        <div class="px-3">
            <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
                <!-- Filter -->
                <dataFilter :filtersData="filtersData" :filterTitle="filterTitle"/>
                <div class="lg:col-span-3 col-span-2">
                    <!-- Top Markets -->
                    <topMarkets/>
                    <!-- All Markets -->
                    <allMarkets/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/breadcrumb.vue';
import DataFilter from '~/components/common/filter.vue';
import TopMarkets from '~/components/markets/top.vue';
import AllMarkets from '~/components/markets/all.vue';

export default {
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
    components: {
        Breadcrumb,
        DataFilter,
        TopMarkets,
        AllMarkets
    }
}
</script>
