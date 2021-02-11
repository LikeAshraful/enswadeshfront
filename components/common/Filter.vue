<template>
    <div>
        <p class="rounded-t-lg title">{{ filterTitle }}</p>
        <div class="rounded-b-lg py-2">

          <div v-for="(filter, i) in filtersData.data" :key="i">
            <NuxtLink to="#" class="flex items-center p-2 hover:bg-green-1 duration-300">
                <i class="ri-arrow-right-s-fill"></i>
                <p class="font-bold">{{ filter.name }}</p>
            </NuxtLink>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['filterTitle','filtersData']
}
</script>
