<template>
    <div>
        <div @click="closeModal" class="fixed inset-0 z-50 flex flex-col justify-center items-center my-12">
            <div @click="wait">
                <div class="focus-in max-w-screen-sm shadow-lg bg-white overflow-auto">
                    <div class="">
                        <p class="title text-center">Add To Festivals</p>
                        <div class="p-6">
                            <div class="mb-4">
                                <p class="h3 mb-2">Select start time:</p>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="input-label" for="start_date">Date (dd/mm/yyyy)</label>
                                        <input type="text" class="input-field focus:outline-none" placeholder="3/12/2021">
                                    </div>
                                    <div>
                                        <label class="input-label" for="start_date">Time (hh:mm am/pm)</label>
                                        <input type="text" class="input-field focus:outline-none" placeholder="12:00 am">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6">
                                <p class="h3 mb-2">Select end time:</p>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="input-label" for="start_date">Date (dd/mm/yyyy)</label>
                                        <input type="text" class="input-field focus:outline-none" placeholder="3/12/2021">
                                    </div>
                                    <div>
                                        <label class="input-label" for="start_date">Time (hh:mm am/pm)</label>
                                        <input type="text" class="input-field focus:outline-none" placeholder="12:00 am">
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <button class="btn-border bg-green-3 focus:outline-none">Save</button>
                            </div>
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
                this.$emit('addFestival');
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
