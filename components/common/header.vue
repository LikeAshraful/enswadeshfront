<template>
  <div>
    <div class="w-full lg:px-20 lg:py-5 p-3">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-5">
          <n-link to="" class="">
            <img class="inline h-5 mx-2" src="~/assets/icons/wallet.png" alt="Icon">S-Wallet
          </n-link>
          <n-link to="" class="pl-3">
            <img class="inline h-5 mx-2" src="~/assets/icons/earn.png" alt="Icon">Earn
          </n-link>
          <n-link to="" class="pl-3">
            <img class="inline h-5 mx-2" src="~/assets/icons/shop.png" alt="Icon">My Shop
          </n-link>
        </div>
        <div class="col-span-2 text-center">
          <n-link to="/" class="font-serif text-4xl">Swadesh</n-link>
        </div>
        <div class="">
          <!-- Offset -->
        </div>
        <div class="col-span-3">
          <div class="flex justify-end">
            <div class="border search-border px-2 py-1 rounded-l-full">
              <button class="flex items-center focus:outline-none dropdown">All<img class="h-5" src="~/assets/icons/drop_down.png" alt="Icon">
                <div class="searchOptions">
                  <ul>
                    <li v-for="(search, i) in searchs" :key="i"><n-link :to="search.url">{{ search.name }}</n-link></li>
                  </ul>
                </div>
              </button>
            </div>
            <div class="flex items-center border search-border px-2 py-1 -ml1 rounded-r-full">
              <img class="h-5" src="~/assets/icons/search.png" alt="Icon">
              <input class="focus:outline-none w-full" type="text" placeholder="Search anything">
            </div>
          </div>
        </div>
        <div class="text-right">
          <n-link to="">
            <img class="inline h-5 mr-2" src="~/assets/icons/user.png" alt="Icon">
          </n-link>
          <n-link to="">
            <img class="inline h-5" src="~/assets/icons/shopping.png" alt="Icon">
          </n-link>
        </div>
      </div>
    </div>
    <div class="w-full lg:px-20 p-3 text-center">
      <n-link to="/cities">
        <img class="inline h-5 mx-2" src="~/assets/icons/market.png" alt="Icon"> Market
      </n-link>
      <n-link to="" class="pl-6">
        <img class="inline h-5 mx-2" src="~/assets/icons/flash_sales.png" alt="Icon"> Flash Sales
      </n-link>
      <n-link to="" class="pl-6">
        <img class="inline h-5 mx-2" src="~/assets/icons/festivals.png" alt="Icon"> Festivals
      </n-link>
      <n-link to="" class="pl-6">
        <img class="inline h-5 mx-2" src="~/assets/icons/discount.png" alt="Icon"> Discount
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    searchs: [
      {url: '', name: 'Help Desk Software'},
      {url: '', name: 'Collaboration Tools'},
      {url: '', name: 'Web and Video Conferencing Software'},
      {url: '', name: 'Business Intelligence (BI) Tools'},
      {url: '', name: 'Accounting Software'},
      {url: '', name: 'Applicant Tracking Systems (ATS)'},
    ]
  })
}
</script>

<style>
.bg {
  background: #FFFBF5;
}
.search-border {
  border-color: #B4BDB2;
}
.-ml1 {
  margin-left: -1px;
}
.searchOptions {
  display: none;
  padding: 5px;
  border: 1px solid #B4BDB2;
  border-radius: 5px;
  z-index: 9999;
}
.dropdown:hover .searchOptions {
  display: block;
  position: absolute;
  background: white;
  margin-left: -12px;
  margin-top: 227px;
}
.dropdown:hover .searchOptions ul {
  display: block;
}
.dropdown:hover .searchOptions ul li {
  text-align: left;
  padding: 3px;
}
.dropdown:hover .searchOptions ul li:hover {
  background: #B4BDB2;
  border-radius: 3px;
}
.dropdown:hover .searchOptions ul li:last-child {
  border-bottom: none;
}
</style>
