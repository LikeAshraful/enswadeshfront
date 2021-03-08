<template>
    <div>
        <markets :cols="cols" :markets="markets" :isLoading="isLoading"></markets>
    </div>
</template>
<script>
import Markets from '~/components/markets/Market.vue';
export default {
    data(){
        return {
            cols: 'lg:grid-cols-4',
            isLoading:false,
            markets: [
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
                {shop_count: '12', name: 'Search market name'},
            ],
        }
    },
    components: {
        Markets
    }
}
</script>
