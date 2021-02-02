<template>
    <div>
        <div class="md:my-6 my-4">
            <p class="font-bold text-3xl">Here's what's in your bag.</p>
            <div class="grid md:grid-cols-3 md:gap-12 mb-8">
                <div class="md:col-span-2">
                    <div v-for="(shop,i) in shops" :key="i" class="mt-6">
                        <p class="font-bold text-lg">{{ shop.name }}</p>
                        <table class="w-full mt-2">
                            <tr class="font-semibold">
                                <td>Product</td>
                                <td><div class="w-16">Price</div></td>
                                <td><div class="w-20">Quantity</div></td>
                                <td><div class="w-32">Subtotal <span class="text-gray-4">(vat inc.)</span></div></td>
                            </tr>
                            <tr v-for="(product,i) in shop.products" :key="i" class="border-t border-gray-3">
                                <td>
                                    <div class="my-1">
                                        <div class="flex">
                                            <img class="w-16 h-16 mr-2" :src="require(`~/assets/img/products/${product.img}`)" alt="">
                                            <p><span class="">{{ product.name }}</span><br><span class="text-gray-4">{{ product.qun }} PCS</span></p>
                                        </div>

                                        <div class="flex gap-2 mt-2">
                                            <button class="focus:outline-none border-2 rounded border-gray-3 py-1 px-2 font-medium">Edit</button>
                                            <button class="focus:outline-none border-2 rounded border-gray-3 py-1 px-2 font-medium">Remove</button>
                                            <button class="focus:outline-none border-2 rounded border-gray-3 py-1 px-2 font-medium"><i class="ri-heart-line"></i></button>
                                        </div>
                                    </div>
                                </td>
                                <td class="font-semibold text-orange-1">৳ {{ product.price }}</td>
                                <td><p class="border border-gray-3 rounded inline px-2 py-1">{{ product.qun }}</p></td>
                                <td class="font-semibold text-orange-1">৳ {{ product.price * product.qun }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="mt-6">
                    <p class="font-bold text-lg">Summary</p>
                    <table class="w-full">
                        <tr>
                            <td class="text-gray-4 mt-2">Subtotal (4 items)</td>
                            <td class="text-right mt-2">৳ 4,780</td>
                        </tr>
                        <tr>
                            <td class="text-gray-4 mt-2">Shipping Fee</td>
                            <td class="text-right mt-2">৳ 50</td>
                        </tr>
                        <tr>
                            <td><input class="border border-gray-3 rounded py-1 px-2 w-full mt-2" type="text" placeholder="Enter Coupon Code"></td>
                            <td class="text-right"><button class="bg-orange-1 rounded text-white py-1 px-3 mt-2">Apply</button></td>
                        </tr>
                        <tr>
                            <td><p class="mt-2">Total</p></td>
                            <td class="text-right mt-2">৳ 4,830</td>
                        </tr>
                    </table>
                    <button class="py-1 w-full text-center font-bold bg-green-3 border rounded my-4 focus:outline-none">Checkout Securly</button>
                    <n-link to="/shop" class="text-center font-bold text-blue-1 block">Continue Shopping</n-link>

                    <div class="border-t border-gray-4 my-3"></div>

                    <div class="flex justify-between">
                        <p class="font-bold">Payment Method</p>
                        <div class="flex gap-1">
                            <span class="w-8 h-6 bg-gray-3"></span>
                            <span class="w-8 h-6 bg-gray-3"></span>
                            <span class="w-8 h-6 bg-gray-3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:() => ({
        shops: [
            {
                name: 'Eastern Plaza Shopping Complex',
                products: [
                    {name: 'Ceiling circle black deem lamp', img: 'img-5.png', qun: '2', price: '1195'},
                    {name: 'Ceiling circle black electric', img: 'img-6.png', qun: '3', price: '1195'},
                ]
            },
            {
                name: 'Bashundhara city shopping complex',
                products: [
                    {name: 'Ceiling  deem lamp', img: 'img-4.png', qun: '4', price: '1195'},
                ]
            },
        ]
    })
}
</script>