<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <p class="text-3xl font-bold mb-4">Shop setup</p>
        <p class="title">Shop Information</p>
        <form @submit.prevent="submitForm">
          <div class="p-2 mb-6">
              <div class="grid grid-cols-2 gap-8">
                  <div>
                      <div class="mb-2">
                          <label class="input-label" for="phone">Shop Phone Number <span class="text-orange-1">*</span></label>
                          <input class="input-field focus:outline-none" id="phone" type="text" v-model="getMyShop.phone" placeholder="01XXXXXXXXX">
                      </div>
                      <div class="mb-2">
                          <label class="input-label" for="email">Shop Email <span class="text-orange-1">*</span></label>
                          <input class="input-field focus:outline-none" id="email" type="text" v-model="getMyShop.email" placeholder="shop@email.com">
                      </div>
                      <div class="mb-2">
                          <label class="input-label" for="shop-type">Shop Type <span class="text-orange-1">*</span></label>
                          <select class="input-field focus:outline-none" v-model="shop_type" id="shop-type">
                              <option value="" disabled>Select type</option>
                              <option v-for="(type, i) in shop_types" :key="i" :value="type.id">{{type.name}}</option>
                          </select>
                      </div>
                      <div class="mb-2">
                          <label class="input-label" for="email">Subscription note</label>
                          <input class="input-field focus:outline-none" id="email" type="text" v-model="getMyShop.subscription_note" placeholder="What you do offer for subscribed customer?">
                      </div>
                  </div>
                  <div>
                      <table class="w-full">
                        <!-- {{getMyShop}} -->
                          <tr>
                              <td class="font-bold pt-3">Market Name:</td>
                              <td>{{ getMyShop.market ? getMyShop.market.name : ''}}</td>
                          </tr>
                          <tr>
                              <td class="font-bold pt-3">Floor:</td>
                              <td>{{getMyShop.floor ? getMyShop.floor.floor : ''}}</td>
                          </tr>
                          <tr>
                              <td class="font-bold pt-3">Shop Name:</td>
                              <td>{{getMyShop.name}}</td>
                          </tr>
                          <tr>
                              <td class="font-bold pt-3">Shop Number:</td>
                              <td>{{getMyShop.shop_no}}</td>
                          </tr>
                          <tr>
                              <td class="font-bold pt-3">Block Number:</td>
                              <td>{{getMyShop.block}}</td>
                          </tr>
                      </table>
                  </div>
              </div>
          </div>
          <div class="grid grid-cols-2 gap-8">
              <div>
                  <p class="title">Shop SEO Information</p>
                  <div class="p-2">
                      <div class="mb-2">
                          <label class="input-label" for="meta_title">Meta Title</label>
                          <input class="input-field focus:outline-none" id="meta_title" type="text" v-model="getMyShop.meta_title" placeholder="@Rana Bhai, write here how to use meta title.">
                          <small class="font-semibold">If need any help text, write here.</small>
                      </div>
                      <div class="mb-2">
                          <label class="input-label" for="meta_keywords">Meta Keyword</label>
                          <input class="input-field focus:outline-none" id="meta_keywords" type="text"  v-model="getMyShop.meta_keywords"  placeholder="Type and hit enter to add a tag">
                          <small class="font-semibold">If need any help text, write here.</small>
                      </div>
                      <div class="mb-2">
                          <label class="input-label" for="meta_description">Meta Description</label>
                          <input class="input-field focus:outline-none" id="meta_description" type="text"  v-model="getMyShop.meta_description" placeholder="Write here">
                      </div>
                      <div class="mb-2">
                          <label class="input-label" for="meta_url">Meta OG URL</label>
                          <input class="input-field focus:outline-none" id="meta_url" type="text" v-model="getMyShop.meta_og_url" placeholder="Write here">
                      </div>
                  </div>
              </div>
              <div>{{selectedShopType}}
                  <p class="title">Shop Images</p>
                  <div class="p-2">
                      <div class="mb-2">
                          <label class="input-label">Shop Banner</label>
                          <div class="border border-dashed border-gray-3 rounded text-center">
                              <div v-if="!bannerUrl" class="py-10 flex items-center justify-center">
                                    <i class="ri-attachment-line"></i>
                                    <label for="shop_banner" class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2">Add file</label>
                                    <p class="inline">or drop images here</p>
                                </div>
                                <label for="shop_banner" class="cursor-pointer">
                                    <div v-if="bannerUrl" style="padding-bottom: 40%;" class="relative flex flex-row justify-center">
                                        <img class="absolute p-2 h-full m-auto" :src="bannerUrl" />
                                    </div>
                                </label>
                              <input class="hidden" @change="bannerFile" type="file" id="shop_banner">
                          </div>
                      </div>
                      <div class="mb-2">
                          <label class="input-label">Thumbnail</label>
                          <div class="border border-dashed border-gray-3 rounded text-center">
                              <div v-if="!thumbnailUrl" class="py-10 flex items-center justify-center">
                                    <i class="ri-attachment-line"></i>
                                    <label for="thumbnail" class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2">Add file</label>
                                    <p class="inline">or drop images here</p>
                                </div>
                                <label for="thumbnail" class="cursor-pointer">
                                    <div v-if="thumbnailUrl" style="padding-bottom: 40%;" class="relative flex flex-row justify-center">
                                        <img class="absolute p-2 h-full m-auto" :src="thumbnailUrl" />
                                    </div>
                                </label>
                              <input class="hidden" type="file" @change="thumbnailFile" id="thumbnail">
                          </div>
                      </div>
                      <div class="mb-2">
                          <label class="input-label">Slider Image</label>
                          <div class="border border-dashed border-gray-3 rounded text-center">
                              <div class="py-3">
                                  <label class="cursor-pointer" for="gallery"><i class="ri-add-line text-blue-1 font-bold text-4xl"></i></label><br>
                                  <p class="text-gray-4">Minimum: 4, Maximum: 8</p>
                                  <div class="grid grid-cols-4 gap-2 justify-center">
                                      <div style="padding-bottom: 50%;" v-for="(gallery_image_url, i) in gallery_images_url" :key="i" class="relative">
                                        <!-- {{gallery_images_url}} -->
                                        <img class="absolute w-full h-full object-cover"  :src="gallery_image_url" />
                                      </div>
                                  </div>
                              </div>
                              <input class="hidden" type="file" multiple @change="galleryFiles" id="gallery">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="flex justify-center my-8 border-t pt-8 border-gray-3">
              <button class="font-semibold border border-gray-3 py-1 px-16 focus:outline-none bg-gray-3 hover:bg-green-3 rounded">Submit</button>
          </div>
        </form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '~/components/common/Breadcrumb.vue';

export default {
  components: {
      Breadcrumb,
  },
  data() {
    return {
        breadCrumbs: [
            {title: 'My Shop', url: '/my-shop'},
            {title: 'Own Shop', url: '/my-shop'},
            {title: 'Shop Setup', url: ''},
        ],
        phone: '',
        email:'',
        shop_type:'',
        subscription_note:'',
        meta_title:'',
        meta_keywords:'',
        meta_description:'',
        meta_og_url:'',
        shop_banner:'',
        thumbnail: '',
        gallery_images: [],
        bannerUrl:null,
        thumbnailUrl:null,
        gallery_images_url: [],
        shop_types:[],
    };
  },
  created() {
    this.loadShopTypes();
    this.setMySingleShop();
  },
  methods: {
    bannerFile(event) {
      console.log(event.target.files[0]);
      this.shop_banner = event.target.files[0];
      const file = event.target.files[0];
      this.bannerUrl = URL.createObjectURL(file);
    },
    thumbnailFile(event) {
      console.log(event.target.files[0]);
      this.thumbnail = event.target.files[0];
      this.thumbnailUrl = URL.createObjectURL(this.thumbnail);
    },
    galleryFiles(e) {
      console.log(e.target.files);
      this.gallery_images = e.target.files;
      for (var i=0; i < this.gallery_images.length; i++){
          this.gallery_images_url.push(URL.createObjectURL(this.gallery_images[i]));
      }
    },
    async loadShopTypes() {
      await this.$axios
      .get('/api/shops/shop-types')
      .then((res) => {
        this.shop_types = res.data.data
      })
      .catch((error) => {
        if (error.response.status == 404) {
          this.$nuxt.error({ statusCode: 404, message: 'err message' })
        }
      })
    },
    setMySingleShop() {
        this.$store.dispatch('shops/setMyShop', this.$route.params.id)
    },
    submitForm(){
      var formData = new FormData();
      formData.append("phone", this.phone);
      formData.append("email", this.email);
      formData.append("shop_type_id", this.shop_type);
      formData.append("subscription_note", this.subscription_note);
      formData.append('meta_title', this.meta_title);
      formData.append("meta_keywords", this.meta_keywords);
      formData.append("meta_description", this.meta_description);
      formData.append("meta_og_url", this.meta_og_url);
      formData.append("logo", this.shop_banner);
      formData.append("cover_image", this.thumbnail);

      //save shop gallery images
      for (const i of Object.keys(this.gallery_images)) {
        formData.append("image[]", this.gallery_images[i]);
      }

      this.$axios.post(`/api/my-shops/update/${this.$route.params.id}`, formData)
      .then(response => {
          console.log(response.data.data.id);
          this.$router.push(`/shop/self/${this.$route.params.id}`);
          this.$toast.success('Your shop is Setup successfully !');
      })
      .catch(error => {
          this.btnAction = false;
          this.$toast.error('Oops..! Something wrong...!');
      });
      // this.btnAction = true;
    },
  },
  computed: {
    ...mapGetters(
      'shops', ['getMyShop']
    )
  }
}
</script>
