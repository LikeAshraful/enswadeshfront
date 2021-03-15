<template>
    <div>
        <div class="p-4">
            <div class="flex gap-4">
                <div class="search">
                    <i class="search-icon ri-search-line"></i>
                    <input type="text" class="search-input focus:outline-none" placeholder="Search">
                </div>
                <button class="btn-add focus:outline-none"><i class="ri-add-line mr-2"></i> Add New</button>
            </div>
        </div>
        <table class="w-full">
            <thead class="bg-gray-3 font-semibold">
                <tr>
                    <td class="py-1 pl-4">Shops</td>
                    <td>Nick name</td>
                    <td>Notifications</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-3" v-for="(row, i) in rows" :key="i">
                    <td>
                        <div class="pl-4 my-1">
                            <img class="h-16 w-64" src="~/assets/img/banner_green.png" alt="Image">
                            <p class="h3">Shop name gose here</p>
                        </div>
                    </td>
                    <td><p class="h3">Shop nickname</p></td>
                    <td><p class="h3">No notification</p></td>
                    <td>
                        <div class="dropdown">
                            <i class="dropbtn border rounded p-2 ri-arrow-down-s-fill"></i>
                            <div class="dropdown-content font-semibold">
                                <p>Unsubscribe</p>
                                <p>Change nick name</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="p-4 flex justify-center">
            <button class="btn-border hover:bg-green-3 focus:outline-none">View more</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            rows: [
                '',
                '',
                '',
                '',
                '',
            ]
        }
    }
}
</script>