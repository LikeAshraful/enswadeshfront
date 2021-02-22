<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        
        <p class="text-3xl font-bold mb-4">Shops (0)</p>

        <div class="p-8 bg-purple-1 text-center mb-4">
            <p>Your shop is under verification.  You will get notification after verified. <br>Your store will appear here once verified. <br>Then you can add pictures of the store, all the information and products.</p>
        </div>
        <p class="title">Shop Information</p>
        <div class="p-2 mb-6">
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
        <div class="flex justify-center mb-6">
            <button class="font-semibold border border-gray-3 py-1 px-8 focus:outline-none hover:bg-green-3 rounded">Cancel Application</button>
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
                {title: 'My Shop', url: '/'},
                {title: 'Own Shop', url: ''},
            ],
        };
    },
}
</script>
