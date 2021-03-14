<template lang="">
    <div>
        <div class="min-h-screen grid grid-cols-4 gap-4 py-4">
            <div>
                <div class="relative list-items-center">
                    <div class="absolute top-0 right-0 mt-2 mr-4">
                        <button class="focus:outline-none"><i class="ri-edit-box-line font-bold text-xl text-blue-1"></i></button>
                    </div>
                    <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                    <p class="text-2xl font-bold mt-2">Adam</p>
                    <p>DOB (dd/mm/yyyy)</p>
                    <p>Blood Group (AB+)</p>
                    <p>example@mail.com</p>
                    <p>Address line show here</p>
                </div>
                <div class="list mt-4">
                    <ul>
                        <li class="list-items hover:bg-green-3">My Shopping Friends</li>
                        <li class="list-items hover:bg-green-3">Shops</li>
                        <li class="list-items hover:bg-green-3">My shops</li>
                        <li class="list-items hover:bg-green-3">My orders</li>
                        <li class="list-items hover:bg-green-3">My wishlist</li>
                    </ul>
                </div>
            </div>
            <div class="col-span-3">
                <p class="head-line">Shops</p>
                <div class="mt-4 bg-white">
                    <div class="p-4 flex">
                        <div class="btn-group border rounded-l">
                            Subscribed shops
                        </div>
                        <div class="btn-group border">
                            Frequently visited
                        </div>
                        <div class="btn-group border rounded-r">
                            Recently visited
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="p-4 flex">
                        <input type="text" class="search" placeholder="Search">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>