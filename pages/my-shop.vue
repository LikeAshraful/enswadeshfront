<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <div class="flex flex-row gap-6 mb-4">
            <button @click="shopSubscriptions" :class="subscrip ? 'bg-green-3':''"  class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">My subscrip</button>
            <button @click="shopRecently" :class="recent ? 'bg-green-3':''"  class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">Recently Visited</button>
            <button @click="shopFrequently" :class="frequent ? 'bg-green-3':''"  class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">Frequently Visited</button>
        </div>
        <subscriptions v-if="subscrip"></subscriptions>
        <recently v-if="recent"></recently>
        <frequently v-if="frequent"></frequently>
    </div>
</template>
<script>

import Breadcrumb from '~/components/common/Breadcrumb.vue';
import Frequently from '~/components/my-shop/options/Frequently.vue';
import Recently from '~/components/my-shop/options/Recently.vue';
import Subscriptions from '~/components/my-shop/options/Subscriptions.vue';

export default {
    components: {
        Breadcrumb,
        Frequently,
        Recently,
        Subscriptions,
    },
    data() {
        return {
            breadCrumbs: [
                {title: 'Home', url: '/'},
                {title: 'My Shop', url: ''},
            ],
            subscrip: true,
            recent: false,
            frequent: false,
        };
    },
    methods: {
        shopSubscriptions()
        {
            this.subscrip = true;
            this.recent = false;
            this.frequent = false;
        },
        shopRecently()
        {
            this.subscrip = false;
            this.recent = true;
            this.frequent = false;
        },
        shopFrequently()
        {
            this.subscrip = false;
            this.recent = false;
            this.frequent = true;
        },
    }
}
</script>
