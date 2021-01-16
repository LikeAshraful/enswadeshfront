<template>
    <div>
        <div class="h-10 flex flex-wrap justify-center">
            <button class="paginate-btn h-full w-10 mx-2 rounded">
                <img src="~/assets/icons/back.png" alt="Icon">
            </button>
            <button v-for="(button, i) in buttons" :key="i" class="paginate-btn h-full w-10 mx-2 rounded">{{ button }}</button>
            <button class="paginate-btn h-full w-10 mx-2 rounded">
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
<style>
    .paginate-btn {
        color: #163A24;
        border: 1px solid #E5EBE7;
    }
</style>