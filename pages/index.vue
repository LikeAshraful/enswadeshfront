<template>
  <div>
    <div class="lg:px-20 lg:pt-20 p-3">
      <menus></menus>
      <tab></tab>
    </div>
  </div>
</template>
<script>
import Menus from '../components/home/menus.vue'
import Tab from '../components/home/tab.vue'

export default {
  components: {
    Menus,
    Tab,
  },
}
</script>
