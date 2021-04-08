<template>
  <div>
    <div class="min-h-screen">
      <p class="h1">View Order</p>
      <div class="mb-4 pt-4">
        <div class="bg-gray-3 flex p-3 justify-between">
          <p class="h3">Receipient</p>
          <div class="flex items-center">
            <label class="h3 pr-3">Status :</label>
            <select name="" id="">
              <option value="1">Pending</option>
              <option value="2">Processing</option>
              <option value="3">Delivered</option>
              <option value="4">Completed</option>
              <option value="5">Refund</option>
              <option value="0">Canceled</option>
            </select>
          </div>
        </div>
        <div class="p-4 bg-white">
          <p class="h3 mb-2">Polash</p>
          <p class="mb-2 flex items-center">
            <i class="mr-2 ri-map-pin-fill"></i>Flat# 3B, Floor# 2nd, House#23,
            Road#1A, Shahbag, Dhaka city, Dhaka.
          </p>
          <p class="mb-2 flex items-center">
            <i class="mr-2 ri-bank-card-fill"></i>Bill to the same address
          </p>
          <p class="mb-2 flex items-center">
            <i class="mr-2 ri-phone-fill"></i>01234567890
          </p>
          <p class="mb-2 flex items-center">
            <i class="mr-2 ri-mail-fill"></i>hello@email.com
          </p>
        </div>
      </div>
      <div class="bg-white">
        <p class="title">Order Summary</p>
        <div class="p-4">
          <table class="w-full">
            <thead class="font-bold">
              <tr>
                <td>Product</td>
                <td>Quantity</td>
                <td>Unit Price</td>
                <td>Total Price</td>
              </tr>
            </thead>
            <tbody class="px-4">
              <tr v-for="(item, index) in items" :key="index">
                <td><div class="py-1">Product name gose here</div></td>
                <td>1</td>
                <td>1195</td>
                <td>1195</td>
              </tr>
              <tr
                class="border-t border-gray-3 text-gray-4 text-lg font-semibold"
              >
                <td colspan="3"><div class="pt-1">Subtotal (4 items)</div></td>
                <td>৳ 4,780</td>
              </tr>
              <tr
                class="border-b border-gray-3 text-gray-4 text-lg font-semibold"
              >
                <td colspan="3"><div class="pb-1">Discount</div></td>
                <td>৳ 50</td>
              </tr>
              <tr class="border-gray-3 text-xl font-bold">
                <td colspan="3"><div class="py-1">Total</div></td>
                <td>৳ 4,780</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ['', '', '', '', '', ''],
    }
  },
}
</script>
<style lang=""></style>
