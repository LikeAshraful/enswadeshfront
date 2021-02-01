<template>
    <div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            <n-link v-for="(floor, i) in floors" :key="i" :to="floor.url">
                <div :class="floor.active" class="border-2 border-gray-2 hover:bg-green-3 rounded-lg text-center p-2">
                    <p>{{ floor.shops }} Shops</p>
                    <p class="font-bold">{{ floor.name }} Floor</p>
                </div>
            </n-link>
        </div>
    </div>
</template>
<script>

export default {
    props: ['floors']
}
</script>