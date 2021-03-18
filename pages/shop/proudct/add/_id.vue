<template>
  <div>
    <!-- Breadcrumbs -->
    <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
    <div class="flex justify-between">
      <p class="font-bold text-3xl">Add Product</p>
      <n-link to="#" class="text-blue-1 font-bold">Need help?</n-link>
    </div>
    <p class="title">Choose an appropriate format</p>
    <div class="p-2">
      <div class="flex my-4">
        <button
          v-for="(format, i) in formats"
          :key="i"
          :class="format.item ? 'bg-green-3' : 'bg-white'"
          @click="simpleFormat(format)"
          class="font-bold border border-gray-3 hover:bg-green-3 py-1 px-4 focus:outline-none"
        >
          {{ format.title }}
        </button>
      </div>
      <p class="mb-4">Write here why use this format as a helper text</p>
    </div>
    <div class="bg-white rounded-lg mb-6">
      <p class="title">Similarity</p>
      <div class="p-2">
        <div class="mb-2">
          <label class="input-label" for="similar">Select product</label>
          <select class="input-field focus:outline-none" name="" id="similar">
            <option class="text-gray-4" value="" selected disabled>
              Choose the product (Show product name, code and SKU - Developer)
            </option>
            <option value="">01</option>
            <option value="">02</option>
            <option value="">03</option>
          </select>
          <p>Write here the benefit of similar product check.</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-12 mb-6">
      <div class="">
        <div class="bg-white rounded-lg mb-6">
          <p class="title">Basic Information</p>
          <div class="p-2">
            <div class="mb-2">
              <label class="input-label" for="name">Product Name</label>
              <input
                class="input-field focus:outline-none"
                id="name"
                type="text"
                v-model="name"
                placeholder="Type your product title"
              />
            </div>
            <div class="mb-2">
              <label class="input-label" for="category">Brand Name</label>
              <div class="grid grid-cols-5 gap-4">
                <div class="col-span-3">
                  <select
                    class="input-field focus:outline-none"
                    name=""
                    v-model="brand_id"
                  >
                    <option
                      v-for="brand in brands"
                      :key="brand.id"
                      v-bind:value="brand.id"
                      selected
                    >
                      {{ brand.name }}
                    </option>
                  </select>
                </div>
                <div class="col-span-2">
                  <input
                    type="text"
                    class="input-field focus:outline-none"
                    placeholder="Create new"
                  />
                </div>
              </div>
            </div>
            <div class="mb-2">
              <label class="input-label" for="code">Product code/SKU</label>
              <input
                class="input-field focus:outline-none"
                id="code"
                type="text"
                v-model="product_code_sku"
                placeholder="Type code hear"
              />
            </div>
            <div class="mb-2">
              <label class="input-label" for="category">Category</label>
              <div class="grid grid-cols-5 gap-4">
                <div class="col-span-3">
                  <select
                    class="input-field focus:outline-none"
                    name=""
                    id="category"
                    v-model="category_id"
                  >
                    <option
                      v-for="category in categorys"
                      :key="category.id"
                      v-bind:value="category.id"
                      selected
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <div class="col-span-2">
                  <input
                    type="text"
                    class="input-field focus:outline-none"
                    placeholder="Create new"
                  />
                </div>
              </div>
            </div>
            <div v-if="simple_format" class="mb-2">
              <label class="input-label" for="quantity">Quantity</label>
              <input
                class="input-field focus:outline-none"
                id="quantity"
                type="number"
                v-model="quantity"
                placeholder="Quantity"
              />
            </div>
          </div>
        </div>
        <div v-if="simple_format" class="bg-white rounded-lg mb-6">
          <p class="title">Price</p>
          <div class="p-2">
            <div class="mb-2">
              <label class="input-label" for="price">Price</label>
              <div class="grid grid-cols-5 gap-8">
                <div class="col-span-4">
                  <input
                    class="input-field focus:outline-none"
                    id="price"
                    type="text"
                    v-model="price"
                    placeholder="What is the price for product"
                  />
                </div>
                <div>
                  <select
                    class="input-field focus:outline-none bg-gray-1"
                    name=""
                    id=""
                    v-model="price"
                  >
                    <option value="">BDT</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-2">
              <label class="input-label" for="unit">Price Per Unit</label>
              <div class="grid grid-cols-5 gap-4">
                <div class="col-span-3">
                  <select
                    class="input-field focus:outline-none"
                    name=""
                    id="category"
                  >
                    <option value="" selected disabled>Select</option>
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                  </select>
                </div>
                <div class="col-span-2">
                  <input
                    type="text"
                    class="input-field focus:outline-none"
                    placeholder="Create new"
                  />
                </div>
              </div>
            </div>
            <div class="mb-2">
              <label class="input-label" for="discount">Discount</label>
              <select
                class="input-field focus:outline-none"
                name=""
                id="discount"
                v-model="discount"
              >
                <option value="" selected disabled>Select</option>
                <option value="">...</option>
                <option value="">...</option>
              </select>
            </div>
            <div class="mb-2">
              <label class="input-label" for="discount-price"
                >Discount Price</label
              >
              <input
                class="input-field focus:outline-none"
                id="discount-price"
                type="text"
                placeholder="0"
              />
            </div>
            <div class="mb-2">
              <label class="input-label" for="offer">Offer</label>
              <input
                class="input-field focus:outline-none"
                id="offer"
                type="text"
                v-model="offers"
                placeholder="Type here"
              />
            </div>
          </div>
        </div>
        <div v-if="make_a_list" class="bg-white rounded-lg mb-6">
          <p class="title">Make a list</p>
          <div class="p-2">
            <table class="w-full">
              <thead>
                <tr class="font-bold">
                  <td>Product name</td>
                  <td>Rate</td>
                  <td>Per Unit</td>
                  <td>Discount</td>
                  <td>Offer</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(list, i) in lists" :key="i">
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="Name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <button
                      class="focus:outline-none text-orange-1"
                      v-if="i == lists - 1 && i != 0"
                      @click="removeList"
                    >
                      <i class="ri-close-circle-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              @click="addList"
              class="font-bold text-orange-1 focus:outline-none"
            >
              Add another
            </button>
          </div>
        </div>
        <div v-if="weight_wise" class="bg-white rounded-lg mb-6">
          <p class="title">Weight Wise Price Information</p>
          <div class="p-2">
            <table class="w-full">
              <thead>
                <tr class="font-bold">
                  <td>Weight</td>
                  <td>Quantity</td>
                  <td>Price/Unit</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(weight, i) in weights" :key="i">
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="(kg, litre, cm, mm)"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <button
                      class="focus:outline-none text-orange-1"
                      v-if="i == weights - 1 && i != 0"
                      @click="removeWeight"
                    >
                      <i class="ri-close-circle-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              @click="addWeight"
              class="font-bold text-orange-1 focus:outline-none"
            >
              Add another
            </button>
          </div>
        </div>
        <div v-if="size_wise" class="bg-white rounded-lg mb-6">
          <p class="title">Size Wise Price Information</p>
          <div class="p-2">
            <table class="w-full">
              <thead>
                <tr class="font-bold">
                  <td>Size</td>
                  <td>Quantity</td>
                  <td>Price/Unit</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(size, i) in sizes" :key="i">
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="(S/M/L/4/5/6)"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="1"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="input-field focus:outline-none my-1"
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <button
                      class="focus:outline-none text-orange-1"
                      v-if="sizes.length - 1 && i != 0"
                      @click="removeSize"
                    >
                      <i class="ri-close-circle-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              @click="addSize"
              class="font-bold text-orange-1 focus:outline-none"
            >
              Add another
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg mb-6">
          <p class="title">Services</p>
          <div class="p-2">
            <div class="mb-2">
              <label class="input-label" for="warranty">Warranty</label>
              <textarea
                class="input-field focus:outline-none"
                name=""
                v-model="service_policy"
                id="warranty"
                rows="3"
                placeholder="Write details here about warranty"
              ></textarea>
            </div>
            <div class="mb-2">
              <label class="input-label" for="guarantee">Guarantee</label>
              <textarea
                class="input-field focus:outline-none"
                name=""
                id="guarantee"
                v-model="service_policy"
                rows="3"
                placeholder="Write details here about guarantee"
              ></textarea>
            </div>
            <div class="mb-2">
              <label class="input-label" for="discount-price"
                >Return option</label
              >
              <textarea
                class="input-field focus:outline-none"
                name=""
                id="discount-price"
                rows="3"
                v-model="refund_policy"
                placeholder="Write details here about return policy"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="bg-white rounded-lg mb-6">
          <p class="title">Product Image</p>
          <div class="p-2">
            <div class="mb-2">
              <label class="input-label">Product Thumbnail</label>
              <div
                class="border border-dashed border-gray-3 rounded text-center"
              >
                <div
                  v-if="!thumbnail"
                  class="py-10 flex items-center justify-center"
                >
                  <i class="ri-attachment-line"></i>
                  <label
                    for="thumbnail"
                    class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2"
                    >Add file</label
                  >
                  <p class="inline">or drop images here</p>
                </div>
                <label for="thumbnail" class="cursor-pointer">
                  <div
                    v-if="thumbnail"
                    style="padding-bottom: 40%"
                    class="relative flex flex-row justify-center"
                  >
                    <img
                      class="absolute p-2 h-full m-auto"
                      :src="thumbnail_images"
                    />
                  </div>
                </label>
                <input
                  class="hidden"
                  type="file"
                  multiple
                  id="thumbnail"
                  @change="thumbnailFiles"
                />
              </div>
            </div>
            <div class="col-span-2">
              <label class="input-label">Gallery images</label>
              <div
                class="border border-dashed border-gray-3 rounded text-center"
              >
                <div class="py-3">
                  <label class="cursor-pointer" for="gallery"
                    ><i
                      class="ri-add-line text-blue-1 font-bold text-4xl"
                    ></i></label
                  ><br />
                  <p class="text-gray-4">Minimum: 4, Maximum: 10</p>
                  <div class="flex flex-row gap-2 justify-center">
                    <span
                      class="h-6 w-12 bg-gray-3"
                      v-for="(gallery, i) in gallery_images_url"
                      :key="i"
                    >
                      <img :src="gallery" class="w-100" alt="Image" />
                    </span>
                  </div>
                </div>
                <input
                  class="hidden"
                  type="file"
                  multiple
                  @change="galleryFiles"
                  id="gallery"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg">
          <p class="title">More Information</p>
          <div class="p-2">
            <div class="mb-2">
              <label class="input-label" for="description"
                >Details information</label
              >
              <textarea
                class="input-field focus:outline-none"
                name=""
                id="description"
                rows="4"
                placeholder="Write here product description"
              ></textarea>
            </div>
            <div class="mb-2">
              <label class="input-label" for="feature">Features</label>
              <table class="w-full">
                <tbody>
                  <tr v-for="(feature, i) in features" :key="i">
                    <td>
                      <input
                        class="input-field focus:outline-none my-1"
                        id="feature"
                        v-model="feature.title"
                        type="text"
                        placeholder="Write feature title"
                      />
                    </td>
                    <td>
                      <input
                        class="input-field focus:outline-none my-1"
                        id="feature"
                        v-model="feature.feature"
                        type="text"
                        placeholder="Write details here"
                      />
                    </td>
                    <td>
                      <button
                        class="focus:outline-none text-orange-1"
                        v-if="i === features.length - 1 && i != 0"
                        @click="removeFeature(feature)"
                      >
                        <i class="ri-close-circle-fill"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                @click="addFeature"
                class="font-bold text-orange-1 focus:outline-none"
              >
                Add another
              </button>
            </div>
            <div class="mb-2">
              <label class="input-label">Audio description</label>
              <div
                class="border border-dashed border-gray-3 rounded text-center"
              >
                <div class="py-3 flex items-center justify-center">
                  <i class="ri-attachment-line"></i>
                  <label
                    for="audio"
                    class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2"
                    >Add file</label
                  >
                  <p class="inline">or drop audio files here</p>
                </div>
                <input class="hidden" type="file" id="audio" />
              </div>
            </div>
            <div class="mb-4">
              <label class="input-label">Video description</label>
              <div
                class="border border-dashed border-gray-3 rounded text-center"
              >
                <div class="py-3 flex items-center justify-center">
                  <i class="ri-attachment-line"></i>
                  <label
                    for="video"
                    class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2"
                    >Add file</label
                  >
                  <p class="inline">or drop video files here</p>
                </div>
                <input class="hidden" type="file" id="video" />
              </div>
            </div>
            <div class="mb-2">
              <label class="input-label" for="">Bargain</label> <br />
              <span
                @click="bargainToggle"
                class="input-label cursor-pointer text-3xl"
                :class="can_bargain ? 'text-blue-1' : 'text-gray-2'"
                for="bargain-opt"
                ><i
                  :class="can_bargain ? 'ri-toggle-fill' : 'ri-toggle-line'"
                ></i
              ></span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg">
          <p class="title">Delivery</p>
          <div class="p-2">
            <div class="mb-2">
              <label class="input-label" for="description"
                >Delivery offer</label
              >
              <div class="grid grid-cols-5 gap-8">
                <div class="col-span-4">
                  <input
                    class="input-field focus:outline-none"
                    id="prices"
                    type="text"
                    placeholder="Write here"
                  />
                </div>
                <div>
                  <select
                    class="input-field focus:outline-none bg-gray-1"
                    name=""
                    id=""
                  >
                    <option value="">%</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 my-8 flex justify-center gap-6 mb-6">
      <button class="btn-disabled focus:outline-none">Preview</button>
      <button class="btn-disabled focus:outline-none" @click="addProducts">
        Finish & Publish
      </button>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      formats: [
        { title: 'Simple format', value: 'simple_format', item: true },
        { title: 'Size wise', value: ' size_wise', item: false },
        { title: 'Weight wise', value: 'weight_wise', item: false },
        { title: 'Make a list', value: 'make_a_list', item: false },
      ],
      ref: '',
      name: '',
      title: 'Simple format',
      slug: '',
      shop_id: '',
      user_id: '',
      brand_id: '',
      category_id: '',
      thumbnail: '',
      can_bargain: false,
      product_type: '',
      refund_policy: '',
      service_policy: '',
      description: '',
      offers: '',
      tag: '',
      price: '',
      sale_price: '',
      discount: '',
      stocks: '',
      total_stocks: '',
      vat: '',
      product_code_sku: '',
      quantity: '',
      alert: '',
      thumbnail_images: '',

      url: null,
      bar: '',

      simple_format: true,
      size_wise: false,
      weight_wise: false,
      make_a_list: false,
      features: [{ title: '', feature: '' }],
      sizes: [{ title: '', feature: '' }],
      weights: 1,
      lists: 1,
      gallery_images: [],
      gallery_images_url: [],

      breadCrumbs: [
        { title: 'Home', url: '/' },
        { title: 'My Shop', url: '/my-shop' },
        { title: 'Shop name goes to here', url: '' },
      ],
    }
  },
  created() {
    this.CategoriesData()
    this.BrandData()
  },
  computed: {
    ...mapGetters('category', ['categorys'], 'brand', ['brands']),
    ...mapGetters('brand', ['brands']),
  },
  methods: {
    ...mapActions('category', ['CategoriesData'], 'brand', ['BrandData']),
    ...mapActions('brand', ['BrandData']),

    bargainToggle() {
      this.can_bargain = !this.can_bargain
    },

    galleryFiles(e) {
      this.gallery_images = e.target.files
      for (var i = 0; i < this.gallery_images.length; i++) {
        this.gallery_images_url.push(
          URL.createObjectURL(this.gallery_images[i])
        )
      }
    },
    thumbnailFiles(e) {
      this.thumbnail = e.target.files[0]
      this.thumbnail_images = URL.createObjectURL(e.target.files[0])
    },
    addFeature() {
      this.features.push({
        title: '',
        feature: '',
      })
    },
    removeFeature(feature) {
      let editedIndex = this.features.indexOf(feature)
      this.features.splice(editedIndex, 1)
    },
    addSize() {
      this.sizes.push({
        title: '',
        feature: '',
      })
    },
    removeSize(size) {
      let editedIndex = this.sizes.indexOf(size)
      this.sizes.splice(editedIndex, 1)
    },

    addProducts() {

      var formData = new FormData()
      if(this.size_wise){
          formData.append('sizes[]', this.sizes)
      }else if(this.make_a_list){
          formData.append('make_a_list[]', this.make_a_list)

      }else if(this.weight_wise){
           formData.append('weight_wise[]', this.weight_wise)

      }else{

      }
      formData.append('name', this.name)
      formData.append('product_type', this.title)
      formData.append('slug', this.slug)
      formData.append('shop_id', this.$route.params.id)
      formData.append('user_id', this.$auth.user.id)
      formData.append('brand_id', this.brand_id)
      formData.append('can_bargain', this.can_bargain)
      formData.append('total_stocks', this.total_stocks)
      formData.append('stocks', this.stocks)
      formData.append('category_id', this.category_id)
      formData.append('thumbnail', this.thumbnail)
      formData.append('feature[]', this.features)
      for (const i of Object.keys(this.gallery_images)) {
        formData.append('images[]', this.gallery_images[i])
        console.log(this.gallery_images[i])
      }
      this.$store.dispatch('products/addProducts', formData)
    },

    addWeight() {
      this.weights += 1
    },
    removeWeight() {
      if (this.weights > 1) {
        this.weights -= 1
      }
    },

    addList() {
      this.lists += 1
    },
    removeList() {
      if (this.lists > 1) {
        this.lists -= 1
      }
    },

    simpleFormat(format) {
      this.title = format.title
      this.formats.forEach((element) => {
        if (format.value === element.value) {
          if (format.value == 'simple_format') {
            this.simple_format = true
            this.size_wise = false
            this.weight_wise = false
            this.make_a_list = false
          } else if (format.value == 'weight_wise') {
            this.simple_format = false
            this.size_wise = false
            this.weight_wise = true
            this.make_a_list = false
          } else if (format.value == 'make_a_list') {
            this.simple_format = false
            this.size_wise = false
            this.weight_wise = false
            this.make_a_list = true
          } else {
            this.simple_format = false
            this.size_wise = true
            this.weight_wise = false
            this.make_a_list = false
          }
          return (element.item = true)
        } else {
          return (element.item = false)
        }
      })
    },
  },
}
</script>
