<template>
    <div>
        <div class="md:my-6 my-3 sm:h-10 h-8 flex flex-wrap justify-center">
            <button class="border border-gray-1 h-full sm:w-10 w-8 sm:mx-2 mx-1 rounded">
                <img src="~/assets/icons/back.png" alt="Icon">
            </button>
            <button v-for="(button, i) in buttons" :key="i" class="border border-gray-1 h-full sm:w-10 w-8 sm:mx-2 mx-1 rounded">{{ button }}</button>
            <button class="border border-gray-1 h-full sm:w-10 w-8 sm:mx-2 mx-1 rounded">
                <img src="~/assets/icons/next.png" alt="Icon">
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        buttons: [
            '1',
            '2',
            '3',
            '4',
            '...',
            '16',
        ]
    })
}
</script>