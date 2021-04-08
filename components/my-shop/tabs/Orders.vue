<template>
  <div>
    <div class="bg-white">
      <div class="p-4 grid md:grid-cols-3 gap-4 items-center">
        <div class="flex items-center gap-4">
          <span class="font-bold">Show</span>
          <select
            class="w-16 border border-gray-4 rounded focus:outline-none py-1 px-2"
          >
            <option>5</option>
            <option selected>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
            <option>ALL</option>
          </select>
          <span class="font-bold">entries</span>
        </div>
        <div class="search">
          <i class="search-icon ri-search-line mr-2"></i>
          <input
            @keyup="searchShopByMarket"
            v-model="keyword"
            class="search-input focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div class="flex items-center gap-4">
          <span class="font-bold">Status:</span>
          <select class="input-field focus:outline-none">
            <option disabled selected>Select Any</option>
            <option>Delivered</option>
            <option>Processing</option>
            <option>Canceled</option>
            <option>Refund</option>
          </select>
        </div>
      </div>
      <div class="p-4 mb-4">
        <table class="w-full">
          <thead class="bg-green-1 font-bold">
            <td><div class="py-1">Order No</div></td>
            <td>Payment Method</td>
            <td>Order Status</td>
            <td>Date</td>
            <!-- <td>Change Status</td> -->
            <td>Total</td>
            <td>Action</td>
          </thead>
          <tbody class="px-4">
            <tr v-for="(item, index) in items" :key="index">
              <td>
                <n-link
                  :to="`/shop/control-panel/view-order/${index}`"
                  class="font-bold text-blue-1"
                  >#000{{ index }}</n-link
                >
              </td>
              <td>COD</td>
              <td>Delivered</td>
              <td>25 Mar, 21</td>
              <td>৳ 825.00</td>
              <td>
                <n-link
                  :to="`/shop/control-panel/view-order/${index}`"
                  class="font-bold text-blue-1"
                  ><i class="ri-eye-line"></i
                ></n-link>
              </td>
              <!-- <td>
                <div class="dropdown">
                  <i
                    class="dropbtn border rounded p-2 ri-arrow-down-s-fill"
                  ></i>
                  <div class="dropdown-content font-semibold w-56">
                    <p>Pending payment</p>
                    <p>Failed</p>
                    <p>Processing</p>
                    <p>Completed</p>
                    <p>On hold</p>
                    <p>Canceled</p>
                    <p>Refunded</p>
                    <p>Authentication required</p>
                  </div>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between p-4">
        <p class="font-bold">Showing 1 to 10 of 57 entries</p>
        <!-- <paginate></paginate>
  -->
        <p>Paginate here...</p>
      </div>
    </div>
  </div>
</template>
<script>
import Paginate from '~/components/common/Paginate'
export default {
  data() {
    return {
      items: ['', '', '', '', '', ''],
    }
  },
  components: {
    Paginate,
  },
}
</script>
