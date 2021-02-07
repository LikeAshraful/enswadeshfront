<template>
    <div>
        <p class="rounded-t-lg p-2 bg-green-1 font-bold">{{ filterTitle }}</p>
        <div class="rounded-b-lg py-2">
          <div :v-if="filtersData" v-for="(filter, i) in filtersData" :key="i">
            <NuxtLink to="#" class="flex items-center p-2 hover:bg-green-1 duration-300">
                <i class="ri-arrow-right-s-fill"></i>
                <p class="font-bold">{{ filter.name }}</p>
            </NuxtLink>
          </div>
          <div :v-if="filtersArea" v-for="(filter, i) in filtersArea" :key="i">
            <NuxtLink to="#" class="flex items-center p-2 hover:bg-green-1 duration-300">
                <i class="ri-arrow-right-s-fill"></i>
                <p class="font-bold">{{ filter.area_name }}</p>
            </NuxtLink>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['filterTitle','filtersData', 'filtersArea']
}
</script>
