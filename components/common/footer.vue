<template>
  <div>
    <div class="bg-footer w-full p-3 lg:p-20">
      <div class="grid lg:grid-cols-6 grid-cols-2 gap-3 text-white">
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
            <input class="bg-footer w-full focus:outline-none" type="email" placeholder="Email Address">
            <div class="border-2 border-color px-3 mb-2 rounded">
              <img class="h-6" src="~/assets/icons/right_arrow.png" alt="Button">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-copyright w-full p-3 lg:px-20 lg:py-6">
      <div class="grid md:grid-cols-3 gap-3">
        <div class="col-span-2 text-color">
          <span>&copy; 2021 swadesh</span>
          <span class="pl-3">All Rights Reserved</span>
          <span class="pl-3">Privacy Policy</span>
          <span class="pl-3">Terms & Conditions</span>
        </div>
        <div class="flex text-white">
          <n-link to=""><span class="border-b-2 border-color">Facebook</span></n-link>
          <n-link to="" class="pl-3"><span class="border-b-2 border-color">Instagram</span></n-link>
          <n-link to="" class="pl-3"><span class="border-b-2 border-color">Twitter</span></n-link>
          <n-link to="" class="ml-auto"><span class="bg-help py-3 px-5 rounded-3xl"><img class="mr-2 h-5 inline" src="~/assets/icons/icon_help.png" alt="Icon">Help</span></n-link>
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
<style>
  .bg-footer {
    background: #163A24;
  }
  .bg-copyright {
    background: #072914;
  }
  .border-color {
    border-color: #F14F02;
  }
  .text-color {
    color: #889689;
  }
  .bg-help {
    background: #225937;
  }
</style>
