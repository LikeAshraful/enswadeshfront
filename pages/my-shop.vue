<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <div class="flex flex-row gap-6 mb-4">
            <button @click="shopOwner" :class="owner ? 'bg-green-3':''" class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">Shop Owner</button>
            <button @click="shopSubscriptions" :class="subscrip ? 'bg-green-3':''"  class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">My subscrip</button>
            <button @click="shopRecently" :class="recent ? 'bg-green-3':''"  class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">Recently Visited</button>
            <button @click="shopFrequently" :class="frequent ? 'bg-green-3':''"  class="font-semibold py-1 px-6 border border-gray-3 rounded hover:bg-green-3 delay-100 focus:outline-none">Frequently Visited</button>
        </div>
        <div v-if="owner">
            <shop-owner></shop-owner>
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
import ShopOwner from '~/components/my-shop/options/Shop-Owner.vue';
import Subscriptions from '~/components/my-shop/options/Subscriptions.vue';

export default {
    components: {
        Breadcrumb,
        Frequently,
        Recently,
        Subscriptions,
        ShopOwner,
    },
    data() {
        return {
            breadCrumbs: [
                {title: 'Home', url: '/'},
                {title: 'My Shop', url: ''},
            ],
            owner: true,
            subscrip: false,
            recent: false,
            frequent: false,
        };
    },
    methods: {
        shopOwner()
        {
            console.log('clicked')
            this.owner = true;
            this.subscrip = false;
            this.recent = false;
            this.frequent = false;
        },
        shopSubscriptions()
        {
            this.owner = false;
            this.subscrip = true;
            this.recent = false;
            this.frequent = false;
        },
        shopRecently()
        {
            this.owner = false;
            this.subscrip = false;
            this.recent = true;
            this.frequent = false;
        },
        shopFrequently()
        {
            this.owner = false;
            this.subscrip = false;
            this.recent = false;
            this.frequent = true;
        },
    }
}
</script>
