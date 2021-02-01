<template>
    <div>
        <!-- Tabs -->
        <div class="">
            <span v-for="(tab, i) in tabs" :key="i">
                <button @click="tabShow(tab.name)" :class="showTab == tab.name ? 'border-l-2 border-t-2 border-r-2 rounded-t-lg border-green-4 bg-white':''" class="focus:outline-none sm:font-bold lg:px-6 md:px-4 sm:px-2 px-1 md:py-2 py-1">{{ tab.name }}</button>
            </span>
            
            <div style="margin-top: -2px;" class="border-t-2 border-green-4 xl:pt-8 lg:pt-4 md:pt-2 pt-1">
                <span v-for="(tab, i) in tabs" :key="i" :class="showTab == tab.name ? '':'hidden'">
                    <div class="" >
                        {{ tab.view }}
                    </div>
                </span>
            </div>
        </div>
        
    </div>
</template>

<script>
import Information from '~/components/product-details/Information.vue';
export default {
    components: {
        Information
    },
    data: () => ({
        showTab: 'Information',
        tabs:[
            {name: 'Information', view: 'Information'},
            {name: 'Features', view: 'Features'},
            {name: 'Images', view: 'Images'},
            {name: 'Reviews', view: 'Reviews'},
        ],
    }),
    methods: {
        tabShow(name){
            this.showTab = name;
        }
    },
}
</script>
