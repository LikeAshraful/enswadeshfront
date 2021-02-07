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
                        <div class="mb-2">
                            <label class="font-bold" for="name">Email or mobile phone number</label>
                            <input class="focus:outline-none w-full border rounded border-gray-3 px-2 py-1" id="name" type="text" placeholder="hello@example.com">
                        </div>
                        <div class="mb-3">
                            <label class="font-bold" for="name">Password</label>
                            <div class="relative mb-1">
                                <input class="focus:outline-none w-full border rounded border-gray-3 px-2 py-1 pr-6" id="name" :type="show ? 'text':'password' " placeholder="Enter your password">
                                <i v-if="!show" @click="showPassword" class="ri-eye-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                                <i v-if="show" @click="showPassword" class="ri-eye-off-fill absolute top-0 right-0 cursor-pointer pr-2 pt-1 text-xl"></i>
                            </div>
                            <n-link to="" class="text-blue-1">Forgot password?</n-link>
                        </div>
                        <button class="focus:outline-none border border-gray-4 bg-gray-3 text-gray-2 rounded text-center font-bold w-full mb-6 py-1">Login your swades account</button>

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
export default {
    data:() => ({
        show: false,
    }),
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
    },
}
</script>