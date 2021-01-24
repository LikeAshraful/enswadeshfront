<template>
  <div>
    <div class="bg-green-4 w-full p-3 lg:py-20">
      <div class="lg:w-11/12 xl:w-10/12 w-full m-auto grid lg:grid-cols-6 grid-cols-2 gap-3 text-white">
        <div class="">
          <p class="block">Menu Name</p>
          <n-link :to="menu.url" class="block" v-for="(menu, i) in menus" :key="i">{{ menu.name }}</n-link>
        </div>
        <div class="">
          <p class="block">About Company</p>
          <n-link :to="about.url" class="block" v-for="(about, i) in abouts" :key="i">{{ about.name }}</n-link>
        </div>
        <div class="">
          <p class="block">Contact us</p>
          <n-link :to="contact.url" class="block" v-for="(contact, i) in contacts" :key="i">{{ contact.name }}</n-link>
        </div>
        <div class="">
        </div>
        <div class="col-span-2">
          <p class="block">Stay in touch</p>
          <div class="flex border-b-2 border-white">
            <input class="bg-green-4 w-full focus:outline-none" type="email" placeholder="Email Address">
            <div class="border-2 border-orange-1 px-3 mb-2 rounded">
              <img class="h-6" src="~/assets/icons/right_arrow.png" alt="Button">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-green-5 w-full p-3 lg:py-6">
      <div class="lg:w-11/12 xl:w-10/12 w-full m-auto grid md:grid-cols-3 gap-3 items-center">
        <div class="col-span-2 text-gray-2">
          <span>&copy; 2021 swadesh</span>
          <span class="pl-3">All Rights Reserved</span>
          <span class="pl-3">Privacy Policy</span>
          <span class="pl-3">Terms & Conditions</span>
        </div>
        <div class="flex text-white items-center">
          <n-link to=""><span class="border-b-2 border-orange-1">Facebook</span></n-link>
          <n-link to="" class="pl-3"><span class="border-b-2 border-orange-1">Instagram</span></n-link>
          <n-link to="" class="pl-3"><span class="border-b-2 border-orange-1">Twitter</span></n-link>
          <n-link to="" class="ml-auto bg-green-3 text-green-4 font-bold py-2 px-5 rounded-3xl">
            <div class="flex">
              <i class="ri-question-line"></i>
              <span class="pl-2">Help</span>
            </div>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    menus: [
      {name: 'Additional Menu', url: ''},
      {name: 'About Company', url: ''},
      {name: 'FAQ', url: ''},
      {name: 'Media', url: ''},
    ],
    abouts: [
      {name: 'FAQ', url: ''},
      {name: 'Media', url: ''},
      {name: 'Menu Name', url: ''},
      {name: 'Additional Menu', url: ''},
    ],
    contacts: [
      {name: 'hello@email.com', url: ''},
      {name: 'support@email.com', url: ''},
      {name: '+880 01XXXXXXXXX', url: ''},
    ],
  })
}
</script>
