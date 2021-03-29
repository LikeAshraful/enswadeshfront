<template>
  <div>
    <div class="md:my-6 my-4">
      <p class="font-bold text-3xl">Here's what's in your bag.</p>
      <div class="grid md:grid-cols-3 md:gap-12 mb-8">
        <div v-if="products.length > 0" class="md:col-span-2">
          <table class="w-full mt-2">
            <tr class="font-semibold">
              <td>Product</td>
              <td><div class="w-16">Price</div></td>
              <td><div class="w-20">Quantity</div></td>
              <td>
                <div class="w-32">
                  Subtotal <span class="text-gray-4">(vat inc.)</span>
                </div>
              </td>
            </tr>
            <tr
              v-for="(product, i) in products"
              :key="i"
              class="border-t border-gray-3"
            >
              <td>
                <div class="my-1">
                  <div class="flex">
                    <img
                      class="w-16 h-16 mr-2"
                      :src="
                        product.image
                          ? basePath + '/storage/' + product.image
                          : require(`~/assets/img/products/default.png`)
                      "
                      alt=""
                    />
                    <p>
                      <span class="">{{ product.name }}</span
                      ><br /><span class="text-gray-4"
                        >{{ product.count }} PCS</span
                      >
                    </p>
                  </div>

                  <div class="flex gap-2 mt-2">
                    <button
                      class="focus:outline-none border-2 rounded border-gray-3 py-1 px-2 font-medium"
                    >
                      Remove
                    </button>
                    <button
                      class="focus:outline-none border-2 rounded border-gray-3 py-1 px-2 font-medium"
                    >
                      <i class="ri-heart-line"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td class="font-semibold text-orange-1">৳ {{ product.price }}</td>
              <td>
                <div
                  class="flex justify-between w-20 rounded border border-gray-3 mr-2 my-1"
                >
                  <button
                    @click="removeItemQtn(product)"
                    class="focus:outline-none bg-gray-3 rounded-l flex items-center justify-center px-1"
                  >
                    <i class="ri-subtract-line"></i>
                  </button>
                  <p>{{ product.count }}</p>
                  <button
                    @click="addItemQtn(product)"
                    class="focus:outline-none bg-gray-3 rounded-r flex items-center justify-center px-1"
                  >
                    <i class="ri-add-fill"></i>
                  </button>
                </div>
              </td>
              <td class="font-semibold text-orange-1">
                ৳ {{ product.price * product.count }}
              </td>
            </tr>
          </table>
        </div>
        <div v-else>
          <P class="text-red-500">No Product add to Bag!</P>
        </div>
        <div class="mt-6">
          <p class="font-bold text-lg">Summary</p>
          <table class="w-full">
            <tr>
              <td class="text-gray-4 mt-2">Subtotal ({{ totalCount }})</td>
              <td class="text-right mt-2">৳ {{ totalPrice }}</td>
            </tr>
            <tr>
              <td class="text-gray-4 mt-2">Shipping Fee</td>
              <td class="text-right mt-2">৳ 50</td>
            </tr>
            <tr>
              <td>
                <input
                  class="input-field focus:outline-none mt-2"
                  type="text"
                  placeholder="Enter Coupon Code"
                />
              </td>
              <td class="text-right">
                <button class="bg-orange-1 rounded text-white py-1 px-3 mt-2">
                  Apply
                </button>
              </td>
            </tr>
            <tr>
              <td><p class="mt-2">Total</p></td>
              <td class="text-right mt-2">৳ {{ totalPrice + 50 }}</td>
            </tr>
          </table>

          <n-link
            to="/checkout"
            class="py-1 block text-center font-bold bg-green-3 border rounded my-4"
            >Checkout Securly</n-link
          >

          <n-link to="/shop" class="text-center font-bold text-blue-1 block"
            >Continue Shopping</n-link
          >

          <div class="border-t border-gray-4 my-3"></div>

          <div class="flex justify-between">
            <p class="font-bold">Payment Method</p>
            <div class="flex gap-1">
              <span class="w-8 h-6 bg-gray-3"></span>
              <span class="w-8 h-6 bg-gray-3"></span>
              <span class="w-8 h-6 bg-gray-3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth'],
  data() {
    return {
      basePath: null,
      qtn: 0,
    }
  },

  mounted() {
    this.addToBuy()
    this.basePath = this.$axios.defaults.baseURL
  },

  methods: {
    // add to addtobag option
    ...mapActions({
      addProduct: 'addtobag/addProduct',
      removeProduct: 'addtobag/removeProduct',
    }),

    addToBuy() {
      var productsadd = JSON.parse(localStorage.getItem('addproducts'))
      for (let index = 0; index < productsadd.length; index++) {
        const item = productsadd[index]
        this.addProduct(item)
      }
    },

    addItemQtn(item) {
      console.log(item)
      //this.quantity++
    },
    removeItemQtn(item) {
      //if (this.quantity > 0) this.quantity--
    },
  },

  computed: {
    ...mapGetters({
      addproducts: 'addtobag/addproducts',
    }),

    products() {
      return this.addproducts
    },

    totalCount() {
      let sum = 0
      _.each(this.addproducts, (p) => {
        sum += p.count
      })
      return sum
    },

    totalPrice() {
      let sum = 0
      _.each(this.addproducts, (p) => {
        sum += p.count * p.price
      })
      return sum
    },
  },
}
</script>
