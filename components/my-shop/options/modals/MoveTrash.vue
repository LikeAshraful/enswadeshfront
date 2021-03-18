<template>
    <div>
        <div @click="closeModal" class="fixed inset-0 z-50 flex flex-col justify-center items-center my-12">
            <div @click="wait">
                <div class="focus-in max-w-screen-sm shadow-lg bg-white overflow-auto">
                    <!-- <div class="w-full text-right pr-1">
                        <button @click="closeLoginModal" class="text-2xl focus:outline-none"><i class="ri-close-line"></i></button>
                    </div> -->
                    <div class="cart-tems-center text-center">
                        <p class="title">Move to trash</p>
                        <div class="p-6">
                            <p class="mb-6">Are you sure you want to move this product to trash?</p>
                            <button class="btn-border bg-green-3 focus:outline-none">Confirm</button>
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
    data() {
        return {
            close_modal: 'modal',
        }
    },
    methods: {
        closeModal()
        {
            if(this.close_modal == 'modal')
            {
                this.$emit('moveTrash');
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
