<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <p class="font-bold text-3xl mb-4">Login your swades account to add your shop</p>
        <div class="bg-green-1">
            <p class="py-2 font-bold max-w-sm m-auto">Account Information</p>
        </div>
        <div class="py-6 max-w-sm m-auto">
            <form @submit.prevent="submitForm">
                <div class="mb-2">
                    <label class="font-bold" for="phone" :class="!$v.phone.$error ? '':'error'">Mobile phone number</label>
                    <input type="text" class="focus:outline-none input-field" id="phone" placeholder="01XXXXXXXXX" v-model.trim="$v.phone.$model" :class="{'is-invalid':$v.phone.$error}">
                    <div class="text-orange-1 font-medium">
                        <small v-if="!$v.phone.required" :class="!$v.phone.$error ? 'hidden':''">Field is required.</small>
                        <small v-if="!$v.phone.minLength">Phone must have at least {{ $v.phone.$params.minLength.min }} digit.</small>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="font-bold" for="password" :class="!$v.password.$error ? '':'error'">Password</label>
                    <div class="relative mb-1">
                        <input class="focus:outline-none input-field pr-6" id="password" :type="show ? 'text':'password' " placeholder="Enter your password" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error}">
                        <i v-if="!show" @click="showPassword" class="ri-eye-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                        <i v-if="show" @click="showPassword" class="ri-eye-off-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                    </div>
                    <div class="text-orange-1 font-medium">
                        <small v-if="!$v.password.required" :class="!$v.password.$error ? 'hidden':''">Password is required.</small>
                        <small v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</small>
                    </div>
                    <n-link to="" class="text-blue-1">Forgot password?</n-link>
                </div>
                <button class="focus:outline-none btn-full">Login your swades account</button>
            </form>
            
            <div class="border-t text-gray-3 mb-6"></div>
            
            <p class="text-center">Don't have an account? <n-link to="/shop-create" class="ml-2 text-orange-1 font-bold">Create account</n-link></p>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
import { required, minLength  } from 'vuelidate/lib/validators';

export default {
    data() {
        return {
            phone: '',
            password: '',
            show: false,
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
        phone:{
            required,
            minLength: minLength(11),
        },
        password:{
            required,
            minLength: minLength(8),
        }
    },
    components:{
        Breadcrumb,
    },
    methods: {
        showPassword(){
            this.show = !this.show;
        },
        submitForm(){
            this.$v.$touch();
            if(!this.$v.$invalid){
                console.log("success"); 
            }else{  
                console.log("error");
            }
        }
    },
}
</script>