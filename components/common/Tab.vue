<template>
    <div>
        <!-- Tabs -->
        <div class="">
            <span v-for="(tab, i) in tabs" :key="i">
                <button @click="changeTab(tab.name)" :class="active == tab.name ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white':''" class="focus:outline-none sm:font-bold lg:px-6 md:px-4 sm:px-2 px-1 md:py-2 py-1">{{ tab.name }}</button>
            </span>
            
            <div style="margin-top: -2px;" class="border-t-2 border-green-4 xl:py-8 lg:pt-4 md:pt-2 pt-1">
                <span v-for="(tab, i) in tabs" :key="i" :class="active == tab.name ? '':'hidden'">
                    
                    <!-- Home Tabs -->
                    <div v-if="tab.view == 'Videos'">
                        <videos></videos>
                    </div>
                    <div v-if="tab.view == 'Templates'">
                        <templates></templates>
                    </div>
                    <div v-if="tab.view == 'Experiences'">
                        <experiences></experiences>
                    </div>
                    <div v-if="tab.view == 'Memes'">
                        <memes></memes>
                    </div>
                    <div v-if="tab.view == 'Stories'">
                        <stories></stories>
                    </div>

                    <!-- My shop tabs components -->
                    <div v-if="tab.view == 'Products'">
                        <products></products>
                    </div>
                    <div v-if="tab.view == 'Orders'">
                        <orders></orders>
                    </div>
                    <div v-if="tab.view == 'Tutorials'">
                        <tutorials></tutorials>
                    </div>
                    <div v-if="tab.view == 'Calculator'">
                        <calculator></calculator>
                    </div>
                    
                    <!-- Product details component -->
                    <div v-if="tab.view == 'Information'">
                        <information></information>
                    </div>
                    <div v-if="tab.view == 'Features'">
                        <features></features>
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
// Home tabs components
import Videos from '~/components/home/tabs/Videos.vue';
import Templates from '~/components/home/tabs/Templates.vue';
import Experiences from '~/components/home/tabs/Experiences.vue';
import Memes from '~/components/home/tabs/Memes.vue';
import Stories from '~/components/home/tabs/Stories.vue';
// My shop tabs component
import Calculator from '~/components/my-shop/tabs/Calculator.vue';
import Orders from '~/components/my-shop/tabs/Orders.vue';
import Products from '~/components/my-shop/tabs/TabProducts.vue';
import Tutorials from '~/components/my-shop/tabs/Tutorials.vue';
// Product Details tabs component
import Information from '../product-details/tabs/Information.vue';
import Features from '../product-details/tabs/Features.vue';
import Reviews from '../product-details/tabs/Reviews.vue';

export default {
    data() {
        return {
            active: this.showTab,
        }
    },
    components: {
        // Home Tabs
        Videos,
        Templates,
        Experiences,
        Memes,
        Stories,
        // My Shops tabs
        Calculator,
        Orders,
        Products,
        Tutorials,
        // Product Details
        Information,
        Features,
        Reviews,
    },
    props: ['showTab','tabs'],
    methods: {
        changeTab(name){
            this.active = name;
        }
    },
}
</script>
