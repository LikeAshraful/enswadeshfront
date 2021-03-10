<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <p class="text-3xl font-bold mb-4">Shop Edit</p>
        <div class="grid grid-cols-2 gap-8">
            <div>
                <p class="title">Shop Information</p>
                <div class="p-2">
                    <div class="mb-2">
                        <label class="input-label" for="market">Market Name</label>
                        <input class="input-field focus:outline-none" id="market" type="text" placeholder="Eastern Plaza Shopping Complex">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="floor">Floor</label>
                        <input class="input-field focus:outline-none" id="floor" type="text" placeholder="Ground floor">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="name">Shop Name</label>
                        <input class="input-field focus:outline-none" id="name" type="text" placeholder="XYZ varieties store">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="shop_no">Shop Number</label>
                        <input class="input-field focus:outline-none" id="shop_no" type="text" placeholder="123">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="block_no">Block Number (If any)</label>
                        <input class="input-field focus:outline-none" id="block_no" type="text" placeholder="A">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="phone">Shop Phone Number</label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="01*********">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="email">Shop Email</label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="shop@email.com">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="shop_type">Shop Type</label>
                        <select class="input-field focus:outline-none" id="shop_type">
                            <option value="" selected disabled>Select type</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="note">Subscription note</label>
                        <textarea id="note" rows="4" class="input-field focus:outline-none" placeholder="What you do offer for subscribed customer?">
                        </textarea>
                    </div>
                </div>
            </div>
            <div>
                <p class="title">Shop Images</p>
                <div class="p-2">
                    <div class="mb-2">
                        <label class="input-label">Shop name banner</label>
                        <div class="border border-dashed border-gray-3 rounded text-center">
                            <div v-if="!url" class="py-10 flex items-center justify-center">
                                <i class="ri-attachment-line"></i>
                                <label for="thumbnail" class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2">Add file</label>
                                <p class="inline">or drop images here</p> 
                            </div>
                            <label for="thumbnail" class="cursor-pointer">
                                <div v-if="url" style="padding-bottom: 40%;" class="relative flex flex-row justify-center">
                                    <img class="absolute p-2 h-full m-auto" :src="url" />
                                </div>
                            </label>
                            <input class="hidden" type="file" id="thumbnail" @change="onFileChange">
                        </div>
                    </div>
                    <div class="mb-2">
                        <label class="input-label">Slider Image</label>
                        <div class="border border-dashed border-gray-3 rounded text-center">
                            <div class="py-3">
                                <label class="cursor-pointer" for="gallery"><i class="ri-add-line text-blue-1 font-bold text-4xl"></i></label><br>
                                <p class="text-gray-4">Minimum: 4, Maximum: 10</p>
                                <div class="flex flex-row gap-2 justify-center">
                                    <span class="h-10 w-16 bg-gray-3"></span>
                                    <span class="h-10 w-16 bg-gray-3"></span>
                                    <span class="h-10 w-16 bg-gray-3"></span>
                                    <span class="h-10 w-16 bg-gray-3"></span>
                                </div>
                            </div>
                            <input class="hidden" type="file" id="gallery">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center my-8 border-t pt-8 border-gray-3">
            <button class="font-semibold border border-gray-3 py-1 px-16 focus:outline-none bg-gray-3 hover:bg-green-3 rounded">Save Changes</button>
        </div>
    </div>
</template>
<script>
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
                {title: 'Shop name gose here', url: ''},
            ],
            url: null,
        };
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
    }
}
</script>
