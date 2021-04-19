<template>
  <div>

    <!-- <div class="hidden md:contents">
      <p class="rounded-t-lg title">{{ filterTitle }}</p>
      <div class="rounded-b-lg py-2">
        <a
          @click="filterSearch()"
          to="javascript:void(0)"
          class="flex items-center p-2 hover:bg-green-1 duration-300 cursor-pointer"
        >
          <i class="ri-arrow-right-s-fill"></i>
          <p class="font-bold">All</p>
        </a>
        <div v-for="(filter, i) in filtersData.data" :key="i">
          <a
            @click="filterSearch(filter.id)"
            to="javascript:void(0)"
            class="flex items-center p-2 hover:bg-green-1 duration-300 cursor-pointer"
          >
            <i class="ri-arrow-right-s-fill"></i>
            <p class="font-bold">{{ filter.name }}</p>
          </a>
        </div>
      </div>
    </div>

    <div class="md:hidden">  -->
    <div class=""> 
      <select @change="getFilterName()" v-model="filterId" class="border border-gray-4 px-4 rounded-full font-semibold py-1 w-full focus:outline-none">
        <option value="" selected disabled>Filter by category</option>
        <option value="">All</option>
        <option v-for="(filter, i) in filtersData.data" :key="i" :value="filter.id">{{ filter.name }}</option>
      </select>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterId: '',
      isLoading: true,
    }
  },
  props: ['filterTitle', 'filtersData'],

  methods: {
    getFilterName(){
      this.filterSearch(this.filterId)
    },
    filterSearch(id) {
      this.$emit('filterByData', id, this.isLoading)
    },
  },
}
</script>
