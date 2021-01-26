<template>
  <div>
    <div class="lg:pt-20 p-3">
      <menus></menus>
      <tab></tab>
    </div>
  </div>
</template>
<script>
import Menus from '~/components/home/Menus.vue'
import Tab from '~/components/home/HomeTab.vue'

export default {
  components: {
    Menus,
    Tab,
  },
}
</script>
