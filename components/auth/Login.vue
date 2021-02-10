<template>
    <div>
        <div class="fixed inset-0 z-50 flex flex-col  justify-center items-center">
            <div class="w-full max-w-screen-sm text-right">
                <button @click="closeLoginModal" class="text-gray-1 text-2xl focus:outline-none"><i class="ri-close-line"></i></button>
            </div>
            <div class="max-w-screen-sm shadow-lg bg-white">
                <div class="grid sm:grid-cols-7">
                    <div class="sm:col-span-3 bg-green-4 text-white p-6 flex flex-col justify-between">
                        <div>
                            <p class="font-bold text-3xl">Login account</p>
                            <p class="font-bold text-gray-4">Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy</p>
                        </div>

                        <div class="relative pb-2/3">
                            <img class="absolute bottom-0 object-cover" src="~/assets/img/auth.png" alt="">
                        </div>
                    </div>
                    <div class="sm:col-span-4 p-8">
                        <form @submit.prevent="submitForm">
                            <div class="mb-2">
                                <label class="font-bold" for="phone">Email or Mobile phone number</label>
                                <input class="focus:outline-none input-field" id="phone" type="text" placeholder="hello@example.com"  v-model.trim="$v.phone.$model" :class="{'is-invalid':$v.phone.$error}">
                                <div class="error-message">
                                    <small v-if="!$v.phone.required" :class="!$v.phone.$error ? 'hidden':''">Field is required.</small>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="font-bold" for="name">Password</label>
                                <div class="relative">
                                    <input class="focus:outline-none input-field pr-6" id="name" :type="show ? 'text':'password' " placeholder="At least 8 characters" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error}">
                                    <i v-if="!show" @click="showPassword" class="ri-eye-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                                    <i v-if="show" @click="showPassword" class="ri-eye-off-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                                </div>
                                <div class="error-message">
                                    <small v-if="!$v.password.required" :class="!$v.password.$error ? 'hidden':''">Password is required.</small>
                                    <small v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</small>
                                </div>
                            </div>
                            <button type="submit" v-if="!btnAction" class="focus:outline-none w-full mb-6" :class="this.$v.$invalid ? 'btn-disabled':'btn-active'">Login your swades account</button>
                            <p v-if="btnAction" class="focus:outline-none w-full mb-2 btn-disabled cursor-wait">Please wait...</p>
                        </form>
                        <div class="border-t text-gray-3 mb-3"></div>

                        <div class="flex items-center mb-3">
                            <p>Quick access with</p>
                            <n-link to="">
                                <i class="ri-facebook-circle-fill text-2xl ml-4"></i>
                            </n-link>
                            <n-link to="">
                                <i class="ri-google-fill text-2xl ml-4"></i>
                            </n-link>
                        </div>

                        <div class="border-t text-gray-3 mb-6"></div>
                        
                        <p>Don't have an account? <button @click="openRegistrationModal" class="focus:outline-none ml-2 text-orange-1 font-bold">Create account</button></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="opacity-50 fixed inset-0 z-40 bg-green-4"></div>
    </div>
</template>
<script>
import { required, minLength  } from 'vuelidate/lib/validators';
export default {
    data() {
        return {
            phone: '',
            password: '',
            btnAction: false,
            show: false,
        }
    },
    validations: {
        phone:{
            required,
        },
        password:{
            required,
            minLength: minLength(8),
        },
    },
    methods: {
        closeLoginModal(){
            this.$emit('closeLoginModal');
        },
        openRegistrationModal(){
            this.$emit('openRegistrationModal');
        },
        showPassword(){
            this.show = !this.show;
        },
        submitForm(){
            this.$v.$touch();
            if(!this.$v.$invalid){
                this.$axios.get("api/login")
                .then(response => {
                    this.$toast.success('Success !');
                    this.closeLoginModal();
                })
                .catch(error => {
                    this.btnAction = false;
                    this.$toast.error('Something wrong..!');
                });
                this.btnAction = true;
                this.$toast.info('Thanks for your submission!');
            }else{  
                this.$toast.error('Please fill the form correctly!')
            }
        },
    },
}
</script>