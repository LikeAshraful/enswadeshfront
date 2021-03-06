<template>
    <div>
        <p class="rounded-t-lg title">{{ filterTitle }}</p>
        <div class="rounded-b-lg py-2">
          <a @click="filterSearch()" to="javascript:void(0)" class="flex items-center p-2 hover:bg-green-1 duration-300 cursor-pointer">
              <i class="ri-arrow-right-s-fill"></i>
              <p class="font-bold">All</p>
          </a>
          <div v-for="(filter, i) in filtersData.data" :key="i">
            <a @click="filterSearch(filter.id)" to="javascript:void(0)" class="flex items-center p-2 hover:bg-green-1 duration-300 cursor-pointer">
                <i class="ri-arrow-right-s-fill"></i>
                <p class="font-bold">{{ filter.name }}</p>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  props: ['filterTitle','filtersData'],

  methods: {
    filterSearch(id)  {
      this.$emit('filterByArea', id, this.isLoading);
    }
  }
}
</script>
