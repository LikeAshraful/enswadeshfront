<template>
    <div>
        <div @click="closeModal" class="fixed inset-0 z-50 flex flex-col justify-center items-center py-12">
            <div @click="wait" class="max-w-screen-sm w-2/5 shadow-lg bg-white overflow-auto">
                <div class="w-full text-right pr-1">
                    <button @click="closeModal" class="text-2xl focus:outline-none"><i class="ri-close-line"></i></button>
                </div>
                <p class="title"><span class="pl-4">Bargain for this product</span></p> 
                <div class="p-6">
                    <label class="input-label" for="price">Price</label>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="price" type="text" placeholder="What is the price you pay for this product">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-gray-1" name="" id="">
                                <option value="">BDT</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex justify-center my-3">
                        <button class="btn-active">Send</button>
                    </div>
                    <div class="border-t text-gray-3 mb-3"></div>
                    <p>You can call to us</p>
                    <div class="grid grid-cols-2">
                        <div class="flex items-center mb-2">
                            <i class="rounded-lg bg-green-1 p-1 ri-phone-fill mr-2"></i>
                            01*********
                        </div>
                        <div class="flex items-center w-full mb-2">
                            <i class="rounded-lg bg-green-1 p-1 ri-phone-fill mr-2"></i>
                            01*********
                        </div>
                        <div class="flex items-center w-full mb-2">
                            <i class="rounded-lg bg-green-1 p-1 ri-phone-fill mr-2"></i>
                            01*********
                        </div>
                        <div class="flex items-center w-full mb-2">
                            <i class="rounded-lg bg-green-1 p-1 ri-phone-fill mr-2"></i>
                            01*********
                        </div>
                    </div>
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
        }
    },
    methods: {
        closeModal()
        {
            if(this.close_modal == 'closeModal')
            {
                this.$emit('bargainModal',false);
            }
        },
        wait()
        {
            this.close_modal = 'wait';
            setTimeout(() => this.close_modal = 'closeModal', 500);
        },
    },
}
</script>