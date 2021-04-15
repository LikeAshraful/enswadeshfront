<template>
    <div>
        <div v-for="(item, i) in items" :key="i" class="flex justify-between items-center bg-gray-5 p-4 mb-4">
            <strong>Video topics title will be here</strong>
            <button @click="uploadModal" class="bg-green-3 font-semibold py-1 px-4 focus:outline-none">Upload</button>
        </div>
        <div v-if="modal">
            <div @click="uploadModal" class="fixed inset-0 z-50 flex flex-col justify-center items-center my-12">
                <div @click="wait">
                    <div @click="uploadModal" class="w-full text-right pr-1">
                        <button class="text-2xl text-gray-5 focus:outline-none"><i class="ri-close-line"></i></button>
                    </div>
                    <div class="focus-in max-w-screen-sm shadow-lg bg-white overflow-auto">
                        <div class="">
                            <p class="title">Upload your video</p>
                            <p class="p-4 font-semibold"><strong>Topics:</strong> Topics title goes to be here.</p>
                            <div class="p-4 grid md:grid-cols-2 gap-4">
                                <div>
                                    <div class="mb-4">
                                        <label class="input-label" for="file">Upload File (MP4, up to 100 MB)</label>
                                        <input id="file" type="file"/>
                                    </div>
                                    <nuxt-link class="font-bold text-blue-1" to="">Read guideline and instructions.</nuxt-link>
                                </div>
                                <div>
                                    <div class="mb-4">
                                        <label class="input-label" for="title">Title</label>
                                        <input class="input-field focus:outline-none" id="title" type="text"  placeholder="Write video title here" />
                                    </div>
                                    <div class="mb-4">
                                        <label class="input-label" for="description">Description</label>
                                        <textarea class="input-field focus:outline-none" id="description" rows="4" placeholder="Write here video description"></textarea>
                                    </div>
                                    <div class="mb-4">
                                        <label class="input-label" for="references">References</label>
                                        <textarea class="input-field focus:outline-none" id="references" rows="4" placeholder="Share main video link or others here"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="p-4 flex items-center justify-center">
                                <button class="btn-disabled">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="uploadModal" class="opacity-50 fixed inset-0 z-40 bg-green-4"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modal: false,
            close_modal: 'modal',
            items: [
                '',
                '',
                '',
                '',
                '',
            ]
        }
    },
    methods: {
        uploadModal()
        {
            if(this.close_modal == 'modal')
            {
                this.modal = !this.modal;
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