<template>
    <div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 grid-cols-3 gap-3">
            <div v-for="(floor, i) in floors" :key="i">
                <div :class="floor.active" class="border border-gray-4 hover:bg-green-3 rounded-lg text-center p-2">
                    <p>{{ floor.shop_count }} Shops</p>
                    <p class="font-bold">{{ floor.floor_no }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['floors']
}
</script>
