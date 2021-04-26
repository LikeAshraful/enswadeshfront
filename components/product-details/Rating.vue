<template>
    <div>
        <div @click="ratingModal()" class="fixed inset-0 z-50 flex flex-col justify-center items-center my-12">
            <div @click="wait">
                <div @click="ratingModal()" class="w-full text-right pr-1">
                    <button class="text-2xl text-gray-5 focus:outline-none"><i class="ri-close-line"></i></button>
                </div>
                <div class="focus-in max-w-screen-sm shadow-lg bg-white overflow-auto">
                    <div class="">
                        <p class="title">Rate and review purchased product</p>
                        <div class="p-4">
                            <div class="p-4 flex flex-col items-center justify-center">
                                <p class="font-bold text-xl">How would you rate this product?</p>
                                <div class="flex flex-row gap-2 text-3xl text-gray-4 cursor-pointer">
                                    <i class="ri-star-line"></i> 
                                    <i class="ri-star-line"></i> 
                                    <i class="ri-star-line"></i> 
                                    <i class="ri-star-line"></i> 
                                    <i class="ri-star-line"></i> 
                                </div>
                            </div>
                            <textarea class="input-field" rows="4" placeholder="Please share your feedback about product"></textarea>
                            <div class="flex items-center justify-center pt-4">
                                <button class="border border-gray-4 rounded py-1 px-6 font-semibold hover:bg-green-3 focus:outline-none">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="ratingModal" class="opacity-50 fixed inset-0 z-40 bg-green-4"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            close_modal: 'modal',
        }
    },
    methods: {
      ratingModal()
      {
        if(this.close_modal == 'modal')
        {
            this.$emit('ratingModal');
        }
      },
      wait()
      {
          this.close_modal = 'wait';
          setTimeout(() => this.close_modal = 'modal', 500);
      },

    },
}
</script>
