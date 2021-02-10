<template>
    <div>
        <div>
            <p class="font-bold text-xl">{{shop.name}}</p>
            <p class="text-gray-2">111 Subscribers</p>
            <p class="text-gray-2">55 Active Customers</p>
            <div class="flex text-yellow-2">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-half-line"></i>
                <p class="text-gray-2 ml-2">(4.5)</p>
            </div>
            <div class="flex text-center gap-4 pt-2">
                <n-link to="">
                    <i class="rounded-lg bg-green-1 p-2 ri-message-2-fill"></i>
                    <p>Text us</p>
                </n-link>
                <n-link to="">
                    <i class="rounded-lg bg-green-1 p-2 ri-phone-fill"></i>
                    <p>Call us</p>
                </n-link>
                <n-link to="">
                    <i class="rounded-lg bg-green-1 p-2 ri-video-chat-fill"></i>
                    <p>Video call</p>
                </n-link>
            </div>
            <div class="md:my-5 pt-2">
                <n-link to="" class="w-full md:px-6 px-3 md:py-2 py-1 font-bold md:text-xl rounded-lg bg-green-3">Subscribe</n-link>
                <n-link to="" class="w-full md:px-6 px-3 md:py-2 py-1 font-bold md:text-xl rounded-lg border-2 border-orange-1 md:ml-3 ml-1">Invite Friend</n-link>
            </div>
            <div class="pt-3">
                <div class="text-purple-2 border-2 border-purple-2 rounded-lg md:p-2 p-1">
                    <p><strong>Note:</strong> Subscribe us & get 5% discount on every product</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props : ['shop']

}
</script>
