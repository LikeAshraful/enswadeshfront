<template>
    <div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 xl:gap-8 lg:gap-4 gap-2">
            <div v-for="(template, i) in templates" :key="i" class="md:border-2 border border-green-4">
                <div class="relative pb-2/3">
                    <img class="absolute h-full w-full object-cover" src="~/assets/img/products/default.png" alt="Image">
                </div>
                <div class="p-2">
                    <p class="font-bold lg:text-lg">Templates name goes here</p>
                    <p class="text-gray-2">512 views  •  7 min ago </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            templates: [
                '',
                '',
                '',
            ],
        }
    }
}
</script>