<template>
  <div>
    <div class="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 pt-6 pb-12">
      <div
        class="mb-8 cursor-pointer"
        v-for="(item, i) in products"
        :key="i"
      >
        <div @click="showModal(item.product)" class="cursor-pointer h-full mb-10">
          <div class="h-full">
            <div class="">
              <img
                class="h-52 w-full"
                :src="
                  item.product.thumbnail
                    ? basePath + '/storage/' + item.product.thumbnail
                    : require(`~/assets/img/products/default.png`)
                "
                alt="Image"
              />
            </div>
            <p class="font-bold pt-2">{{ item.product.name }}</p>
            <p class="">{{ item.product.color }}</p>
            <p class="font-bold">{{ item.product.price }} BDT</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Details -->
    <product-details
      v-if="modal"
      :product="productm"
      :basePath="basePath"
      v-on:product-modal="closeModal($event)"
    ></product-details>
  </div>
</template>

<script>
  import ProductDetails from '~/components/product-details/Product-details.vue'
  export default ({
    components: {
      ProductDetails,
    },
    data() {
      return {
        modal: false,
      }
    },
    props:['products', 'basePath'],

    methods: {
      showModal(product) {
        this.productm = Object.assign({}, product)
        this.modal = true
      },
      closeModal(e) {
        this.modal = e
      },
    }

  })
</script>

