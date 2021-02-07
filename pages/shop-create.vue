<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <p class="font-bold text-3xl mb-4">Add your shop</p>
        <div class="bg-green-1">
            <p class="py-2 font-bold max-w-sm m-auto">Shop Information</p>
        </div>
        <div class="py-6 max-w-sm m-auto">
            <div class="mb-2">
                <label class="input-label" for="market-name">Market Name</label>
                <input class="input-field focus:outline-none" id="market-name" type="text" placeholder="Eastern Plaza Shopping Complex">
            </div>
            <div class="mb-2">
                <label class="input-label" for="floor">Floor</label>
                <input class="input-field focus:outline-none" id="floor" type="text" placeholder="Ground floor">
            </div>
            <div class="mb-2">
                <label class="input-label" for="shop-name">Shop Name <span class="text-orange-1">*</span></label>
                <input class="input-field focus:outline-none" id="shop-name" type="text" placeholder="XYZ varieties store">
            </div>
            <div class="mb-2">
                <label class="input-label" for="shop-number">Shop Number <span class="text-orange-1">*</span></label>
                <input class="input-field focus:outline-none" id="shop-number" type="text" placeholder="123">
            </div>
            <div class="mb-2">
                <label class="input-label" for="block">Block Number (If any)</label>
                <input class="input-field focus:outline-none" id="block" type="text" placeholder="A">
            </div>
            <div class="mb-2">
                <label class="input-label">Trade License / Verification Document <span class="text-orange-1">*</span></label>
                <div class="border border-dashed border-gray-3 rounded text-center py-3">
                    <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                    <p class="inline">Drag & Drop to upload here, or</p> <label for="files" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                    <p class="text-gray-4">Supports: JPG, JPEG, PNG</p>
                    <input class="hidden" type="file" id="files">
                </div>
                <n-link to="" class="text-blue-1">Why need Trade License & How to use?</n-link>
            </div>
            
            <div class="divider my-6"></div>
            <button class="focus:outline-none btn-full mb-6">Submit</button>
            <p class="text-center">I don't want to Add Shop now. <n-link to="/shop-login" class="ml-2 text-orange-1 font-bold">Go back</n-link></p>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
export default {
    data() {
        return {
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
    components:{
        Breadcrumb,
    }
}
</script>