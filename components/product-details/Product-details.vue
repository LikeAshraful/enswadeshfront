<template>
    <div>
        <div @click="closeModal" class="fixed inset-0 z-50 flex flex-col justify-center items-center py-12">
            <div @click="wait" class="max-w-screen-sm shadow-lg bg-white overflow-auto">
                <div class="grid sm:grid-cols-2 gap-6 p-6">
                    <div class="">
                        <div class="relative pb-full">
                            <img class="absolute h-full w-full object-cover"  :src="product.thumbnail ? basePath + '/storage/' + product.thumbnail : require(`~/assets/img/products/default.png`)" alt="Image">
                        </div>

                         <div class="grid grid-cols-4 gap-2 mt-2">
                            <div class="relative pb-3/4" v-for="(photo, i) in product.image" :key="i">
                                <img class="absolute h-full w-full object-cover" :src="photo.src ? basePath + '/storage/' + photo.src : require(`~/assets/img/products/default.png`)" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="w-full text-right">
                            <button @click="closeModal" class="text-2xl focus:outline-none"><i class="ri-close-line"></i></button>
                        </div>
                        <p class="font-bold text-2xl mb-2">{{product.name}}</p>


                        <div class="flex items-center gap-8">
                            <p class="bg-green-4 px-2 py-1 text-white inline">
                                4.5<i class="ri-star-fill ml-2 text-yellow-2"></i>
                            </p>
                            <p class="font-semibold text-blue-1">Rate this product</p>
                        </div>
                        <table class="w-full mt-4">
                            <tbody>
                                <tr>
                                    <td>Price:</td>
                                    <td v-if="sizePrice || weightPrice || product.discount_price" class="font-semibold">
                                      <span>{{ sizePrice ? sizePrice : (weightPrice ? weightPrice : product.discount_price) }} {{product.currency_type}}</span>

                                      <span v-if="product.discount" class="text-gray-4 ml-4 line-through">{{product.price}} {{product.currency_type}}</span>
                                    </td>
                                    <td v-if="product.lowsizeprice && !sizePrice" class="font-semibold">
                                      <span>{{ product.lowsizeprice.price }}</span>

                                      <span v-if="product.discount" class="text-gray-4 ml-4 line-through">{{product.price}} {{product.currency_type}}</span>
                                    </td>
                                </tr>
                                <tr v-if="product.sizes.length > 0">
                                    <td>Stock:</td>
                                    <td v-if="product.lowsizeprice.stocks > 0 || sizeStocks > 0" class="font-semibold">Available</td>
                                    <td v-else class="text-red-500 font-semibold">Unavailable</td>
                                </tr>
                                <tr v-else-if="product.weights.length > 0">
                                    <td>Stock:</td>
                                    <td v-if="product.stocks > 0" class="font-semibold">Available</td>
                                    <td v-else class="text-red-500 font-semibold">Unavailable</td>
                                </tr>
                                <tr v-else >
                                    <td>Stock:</td>
                                    <td v-if="product.stocks > 0" class="font-semibold">Available</td>
                                    <td v-else class="text-red-500 font-semibold">Unavailable</td>
                                </tr>

                                <tr>
                                    <td>Brand:</td>
                                    <td class="font-semibold">{{ product.brand ? product.brand.name : '' }}</td>
                                </tr>
                                <tr>
                                    <td>SKU:</td>
                                    <td class="font-semibold">{{ product.sku }}</td>
                                </tr>
                                <tr class="my-3" v-if="product.sizes.length > 0">
                                  <td>Select Size:</td>
                                  <td>
                                    <span  v-for="(size, k) in product.sizes" :key="k">
                                      <span @click="selectSize(size)" :class="size.size == selectedSize ? 'bg-green-3' : '' " class="p-1 text-center cursor-pointer border mr-3">
                                        {{size.size}}
                                      </span>
                                    </span>
                                  </td>
                                </tr>
                                <tr class="my-3" v-if="product.weights.length > 0">
                                  <td>Select Weight:</td>
                                  <td>
                                    <span  v-for="(weight, k) in product.weights" :key="k">
                                      <span @click="selectWeight(weight)" :class="weight.weight == selectedWeight ? 'bg-green-3' : '' " class="p-1 text-center cursor-pointer border mr-3">
                                        {{weight.weight}}
                                      </span>
                                    </span>
                                  </td>
                                </tr>
                            </tbody>
                        </table>

                        <div v-if="product.offers">
                          <p class="font-semibold mt-4">Available Offers</p>
                          <ul>
                              <li>
                                <p>{{product.offers}}</p>
                              </li>
                          </ul>
                        </div>

                        <p class="font-semibold mt-4 mb-2">Quantity</p>
                        <div class="grid grid-cols-2 gap-2 mb-2">
                            <div class="grid grid-cols-4 rounded border border-gray-3 font-bold">
                                <button @click="minus" class="focus:outline-none bg-gray-3 rounded-l text-xl flex items-center justify-center">
                                    <i class="ri-subtract-line"></i>
                                </button>
                                <div class="col-span-2 text-center py-1">
                                    {{ quantity }}
                                </div>
                                <button @click="plus" class="focus:outline-none bg-gray-3 rounded-r text-xl flex items-center justify-center">
                                    <i class="ri-add-fill"></i>
                                </button>

                            </div>
                            <n-link to="" class="border bg-green-3 border-gray-2 rounded py-1 w-full font-bold text-center">Buy now</n-link>
                        </div>
                        <div class="flex gap-2 justify-between">
                            <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold w-full">Add to bag</button>
                            <button v-if="product.can_bargain" class="focus:outline-none border rounded border-gray-3 py-1 font-bold w-full">Bargain</button>
                            <button class="focus:outline-none border rounded border-gray-3 py-1 font-bold px-2"><i class="ri-heart-line"></i></button>
                        </div>
                    </div>
                </div>
                <div class="border-t text-gray-3 mx-6 py-6 text-center">
                    <n-link :to="{name:'product-slug-id', params:{slug: product.slug, id: product.id }}" class="border rounded border-gray-3 py-1 font-bold text-green-4 p-8">Show More Details</n-link>
                </div>
            </div>
        </div>
        <div @click="closeModal" class="opacity-50 fixed inset-0 z-40 bg-green-4"></div>
    </div>
</template>
<script>
export default {
    data(){
      return {
        close_modal: 'closeModal',
        quantity: 0,
        selectedSize: 0,
        selectedWeight: 0,
        sizePrice:'',
        sizeStocks:'',
        weightPrice:'',
        weightStocks:'',
      }
    },
    props:['basePath', 'product'],



    mounted() {
      // this.quantity_ = this.product.sizes
    //   console.log(this.items)
    },

    methods: {
        closeModal()
        {
            if(this.close_modal == 'closeModal')
            {
                this.$emit('product-modal',false);
            }
        },
        wait()
        {
            this.close_modal = 'wait';
            setTimeout(() => this.close_modal = 'closeModal', 500);
        },
        plus()
        {
          this.quantity++
        },
        minus()
        {
        if(this.quantity > 0)
          this.quantity--
        },

        selectSize(size){
          this.selectedSize = size.size;
          this.sizePrice = size.price;
          this.sizeStocks = size.stocks;

          // alert(size.size)
        },
        selectWeight(weight){
          this.selectedWeight = weight.weight;
          this.weightPrice = weight.price;
          this.weightStocks = weight.stocks;
        }
    }
}
</script>
