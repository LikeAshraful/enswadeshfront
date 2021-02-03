<template>
    <div>
        <!-- Tabs -->
        <div class="">
            <span v-for="(tab, i) in tabs" :key="i">
                <button @click="changeTab(tab.name)" :class="showTab == tab.name ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white':''" class="focus:outline-none sm:font-bold lg:px-6 md:px-4 sm:px-2 px-1 md:py-2 py-1">{{ tab.name }}</button>
            </span>
            
            <div style="margin-top: -2px;" class="border-t-2 border-green-4 xl:py-8 lg:pt-4 md:pt-2 pt-1">
                <span v-for="(tab, i) in tabs" :key="i" :class="showTab == tab.name ? '':'hidden'">
                    
                    <div v-if="tab.view == 'Information'">
                        <information></information>
                    </div>
                    <div v-if="tab.view == 'Features'">
                        <features></features>
                    </div>
                    <div v-if="tab.view == 'Images'">
                        <images></images>
                    </div>
                    <div v-if="tab.view == 'Reviews'">
                        <reviews></reviews>
                    </div>

                </span>
            </div>
        </div>
        
    </div>
</template>

<script>
import Information from '../product-details/tabs/Information.vue';
import Features from '../product-details/tabs/Features.vue';
import Images from '../product-details/tabs/Images.vue';
import Reviews from '../product-details/tabs/Reviews.vue';

export default {
    components: {
        Information,
        Features,
        Images,
        Reviews,
    },
    props: ['showTab','tabs'],
    methods: {
        changeTab(name){
            this.showTab = name;
        }
    },
}
</script>
