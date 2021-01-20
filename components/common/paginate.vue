<template>
    <div>
        <div class="h-10 flex flex-wrap justify-center">
            <button class="border border-gray-1 h-full w-10 mx-2 rounded">
                <img src="~/assets/icons/back.png" alt="Icon">
            </button>
            <button v-for="(button, i) in buttons" :key="i" class="border border-gray-1 h-full w-10 mx-2 rounded">{{ button }}</button>
            <button class="border border-gray-1 h-full w-10 mx-2 rounded">
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