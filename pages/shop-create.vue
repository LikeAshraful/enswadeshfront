<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <p class="font-bold text-3xl mb-4">Add your shop</p>
        <div class="bg-green-1">
            <p class="py-2 font-bold max-w-sm m-auto">Shop Information</p>
        </div>
        <div class="py-6 max-w-sm m-auto">
            <form @submit.prevent="submitForm">
                <div class="mb-2">
                    <label class="input-label" for="market-name">Market Name <span class="require">*</span></label>
                    <select class="input-field focus:outline-none" id="market-name" v-model.trim="$v.marketName.$model" :class="{'is-invalid':$v.marketName.$error}">
                        <option value="" disabled selected>Select Market</option>
                        <option value="...">...</option>
                        <option value="...">...</option>
                        <option value="...">...</option>
                    </select>
                    <div class="error-message">
                        <small v-if="!$v.marketName.required" :class="!$v.marketName.$error ? 'hidden':''">Field is required.</small>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="floor">Floor</label>
                    <select class="input-field focus:outline-none" id="floor" v-model="floor">
                        <option value="" disabled selected>Select Floor</option>
                        <option value="...">...</option>
                        <option value="...">...</option>
                        <option value="...">...</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="shop-name">Shop Name <span class="require">*</span></label>
                    <input class="input-field focus:outline-none" id="shop-name" type="text" placeholder="XYZ varieties store" v-model.trim="$v.shopName.$model" :class="{'is-invalid':$v.shopName.$error}">
                    <div class="error-message">
                        <small v-if="!$v.shopName.required" :class="!$v.shopName.$error ? 'hidden':''">Field is required.</small>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="shop-number">Shop Number <span class="require">*</span></label>
                    <input class="input-field focus:outline-none" id="shop-number" type="text" placeholder="123" v-model.trim="$v.shopNo.$model" :class="{'is-invalid':$v.shopNo.$error}">
                    <div class="error-message">
                        <small v-if="!$v.shopNo.required" :class="!$v.shopNo.$error ? 'hidden':''">Field is required.</small>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="block">Block Number (If any)</label>
                    <input class="input-field focus:outline-none" id="block" type="text" placeholder="A">
                </div>
                <div class="mb-2">
                    <label class="input-label">Trade License / Verification Document <span class="require">*</span></label>
                    <div class="border border-dashed border-gray-3 rounded text-center">
                        <div class="py-3" v-if="avatar == null">
                            <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                            <p class="inline">Drag & Drop to upload here, or</p> <label for="files" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                            <p class="text-gray-4">Supports: JPG, JPEG, PNG</p>
                        </div>
                        <label for="files" class="cursor-pointer">
                            <div v-if="avatar != null" class="relative pb-1/2">
                                <img class="absolute h-full w-full p-2" :src="avatar" alt="Image">
                            </div>
                        </label>

                        <input class="hidden" type="file" id="files" @change="filesUpload">
                    </div>
                    <n-link to="" class="text-blue-1">Why need Trade License & How to use?</n-link>
                </div>

                <div class="divider my-6"></div>

                <button type="submit" v-if="!btnAction" class="focus:outline-none w-full mb-4" :class="this.$v.$invalid || avatar == null ? 'btn-disabled':'btn-active'">Submit</button>
                <p v-if="btnAction" class="focus:outline-none w-full mb-4 btn-disabled cursor-wait">Please wait...</p>

            </form>
            <p class="text-center">I don't want to Add Shop now. <n-link to="/shop-login" class="ml-2 text-orange-1 font-bold">Go back</n-link></p>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import { required, minLength  } from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            marketName: '',
            floor: '',
            shopName: '',
            shopNo: '',
            file: '',
            avatar: null,
            btnAction: false,
            breadCrumbs: [
                {title: 'Home', url: '/'},
                {title: 'Go To Market', url: '/cities'},
                {title: 'Dhaka', url: '/markets'},
                {title: 'Eastern Plaza Shopping Complex', url: '/market'},
                {title: 'Grand Floor', url: '/market'},
                {title: 'Shop name goes to here', url: ''},
            ],
        }
    },
    validations: {
        marketName:{
            required,
        },
        shopName:{
            required,
        },
        shopNo:{
            required,
        },
    },
    components:{
        Breadcrumb,
    },
    methods: {
        submitForm(){
            this.$v.$touch();
            if(!this.$v.$invalid && this.avatar != null){
                this.$axios.get("api/login")
                .then(response => {
                    this.$toast.success('Success !');
                })
                .catch(error => {
                    this.btnAction = false;
                    this.$toast.error('Oops..! Something wrong...!');
                });
                this.btnAction = true;
                this.$toast.info('Thanks for your submission!');
            }else{  
                this.$toast.error('Please fill the form correctly!')
            }
        },
        filesUpload(e){
            let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                this.avatar = e.target.result;
            }
        }
    },
}
</script>