<template>
    <div>
        <div class="fixed inset-0 z-50 flex flex-col items-end max-w-screen-xl xl:px-10 px-2 m-auto mt-24">
            <div class="max-w-sm shadow-lg p-4 border border-gray-3 bg-white">
                <p class="font-bold text-xl mb-6">Here's what's in your bag.</p>
                <table>
                    <tr class="font-semibold">
                        <td>Product</td>
                        <td><div class="mx-2">Quantity</div></td>
                        <td>Price</td>
                        <td></td>
                    </tr>
                    <tr class="border-t border-gray-3">
                        <td>
                            <div class="flex">
                                <img class="w-12 h-12 mr-2" src="~/assets/img/products/img-6.png" alt="">
                                <p><span class="font-semibold">Ceiling circle black...</span><br><span class="text-gray-4">1 PCS</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="flex flex-col rounded border border-gray-3 w-8 text-center m-auto my-1">
                                <button class="focus:outline-none bg-gray-3 rounded-t flex items-center justify-center">
                                    <i class="ri-subtract-line"></i>
                                </button>
                                <p>0</p>
                                <button class="focus:outline-none bg-gray-3 rounded-b flex items-center justify-center">
                                    <i class="ri-add-fill"></i>
                                </button>
                            </div>
                        </td>
                        <td class="font-semibold">1195</td>
                        <td><button class="focus:outline-none text-xl text-gray-4"><i class="ri-delete-bin-2-line"></i></button></td>
                    </tr>
                    <tr class="border-t border-gray-3">
                        <td>
                            <div class="flex">
                                <img class="w-12 h-12 mr-2" src="~/assets/img/products/img-6.png" alt="">
                                <p><span class="font-semibold">Ceiling circle black...</span><br><span class="text-gray-4">1 PCS</span></p>
                            </div>
                        </td>
                        <td>
                            <div class="flex flex-col rounded border border-gray-3 w-8 text-center m-auto my-1">
                                <button class="focus:outline-none bg-gray-3 rounded-t flex items-center justify-center">
                                    <i class="ri-subtract-line"></i>
                                </button>
                                <p>0</p>
                                <button class="focus:outline-none bg-gray-3 rounded-b flex items-center justify-center">
                                    <i class="ri-add-fill"></i>
                                </button>
                            </div>
                        </td>
                        <td class="font-semibold">1195</td>
                        <td><button class="focus:outline-none text-xl text-gray-4"><i class="ri-delete-bin-2-line"></i></button></td>
                    </tr>
                    <tr class="border-t border-gray-3">
                        <td colspan="2"><p class="font-bold my-3">Subtotal</p></td>
                        <td colspan="2"><p class="text-orange-1 font-bold">&#2547; 1195</p></td>
                    </tr>
                    <tr class="border-t border-gray-3">
                        <td colspan="4">
                            <div class="mt-4">
                                <n-link to="/card" class="border-2 border-green-3 rounded py-1 px-4 font-bold">View cart</n-link>
                                <n-link to="" class="border-2 rounded bg-green-3 py-1 px-4 font-bold ml-3">Checkout</n-link>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:() => ({

    })
}
</script>