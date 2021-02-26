<template>
  <div class="nuxt-error relative h-screen">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from '~/components/error/404.vue';
import error500 from '~/components/error/500.vue';

export default {
  name: 'nuxt-error',
  layout: 'default',

  props: {
    error: {
      type: Object,
      default: () => {},
    }
  },

  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error500;
    }
  }
}
</script>


<style>
  .error-page {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    padding: 3em;
    text-align: center;
    line-height: 3.5em;
  }
  .error-page h1 {
      font-size: 3.5em;
      line-height: 1.2em;
      font-weight: bold;
      color:rgb(121, 6, 6);
  }
  .error-page p {
      font-size: 1.2em;
  }
</style>


