<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <p class="text-3xl font-bold mb-4">Shop setup</p>
        <p class="title">Shop Information</p>
        <div class="p-2 mb-6">
            <div class="grid grid-cols-2 gap-8">
                <div>
                    <div class="mb-2">
                        <label class="input-label" for="phone">Shop Phone Number <span class="text-orange-1">*</span></label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="01XXXXXXXXX">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="email">Shop Email <span class="text-orange-1">*</span></label>
                        <input class="input-field focus:outline-none" id="email" type="text" placeholder="shop@email.com">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="shop-type">Shop Type <span class="text-orange-1">*</span></label>
                        <select class="input-field focus:outline-none" id="shop-type">
                            <option value="" selected disabled>Select type</option>
                            <option value="">...</option>
                            <option value="">...</option>
                            <option value="">...</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="email">Subscription note</label>
                        <input class="input-field focus:outline-none" id="email" type="text" placeholder="What you do offer for subscribed customer?">
                    </div>
                </div>
                <div>
                    <table class="w-full">
                        <tr>
                            <td class="font-bold pt-3">Market Name:</td>
                            <td>Eastern Plaza Shopping Complex</td>
                        </tr>
                        <tr>
                            <td class="font-bold pt-3">Floor:</td>
                            <td>Ground floor</td>
                        </tr>
                        <tr>
                            <td class="font-bold pt-3">Shop Name:</td>
                            <td>XYZ varieties store</td>
                        </tr>
                        <tr>
                            <td class="font-bold pt-3">Shop Number:</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td class="font-bold pt-3">Block Number:</td>
                            <td>B</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
            <div>
                <p class="title">Shop SEO Information</p>
                <div class="p-2">
                    <div class="mb-2">
                        <label class="input-label" for="phone">Meta Title</label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="@Rana Bhai, write here how to use meta title.">
                        <small class="font-semibold">If need any help text, write here.</small>
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="phone">Meta Keyword</label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="Type and hit enter to add a tag">
                        <small class="font-semibold">If need any help text, write here.</small>
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="phone">Meta Description</label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="Write here">
                    </div>
                    <div class="mb-2">
                        <label class="input-label" for="phone">Meta OG URL</label>
                        <input class="input-field focus:outline-none" id="phone" type="text" placeholder="Write here">
                    </div>
                </div>
            </div>
            <div>
                <p class="title">Shop Images</p>
                <div class="p-2">
                    <div class="mb-2">
                        <label class="input-label">Shop name banner</label>
                        <div class="border border-dashed border-gray-3 rounded text-center">
                            <div class="py-3">
                                <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                                <p class="inline">Drag & Drop to upload here, or</p> <label for="audio" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                                <p class="text-gray-4">Supports: JPG, JPEG, PNG</p>
                            </div>
                            <input class="hidden" type="file" id="audio">
                        </div>
                    </div>
                    <div class="mb-2">
                        <label class="input-label">Thumbnail</label>
                        <div class="border border-dashed border-gray-3 rounded text-center">
                            <div class="py-3">
                                <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                                <p class="inline">Drag & Drop to upload here, or</p> <label for="audio" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                                <p class="text-gray-4">Supports: JPG, JPEG, PNG</p>
                            </div>
                            <input class="hidden" type="file" id="audio">
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
            <button class="font-semibold border border-gray-3 py-1 px-16 focus:outline-none bg-gray-3 hover:bg-green-3 rounded">Submit</button>
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
                {title: 'Shop Setup', url: ''},
            ],
        };
    },
}
</script>
