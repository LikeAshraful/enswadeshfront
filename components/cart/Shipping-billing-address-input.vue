<template>
  <div>
    <p class="title">Shipping Address</p>
    <div class="px-2 py-4">
      <label for="name" class="font-semibold">Your name</label>
      <input
        id="name"
        type="text"
        class="input-field focus:outline-none mb-2 mt-1"
        placeholder="Type your name"
      />

      <label for="region" class="font-semibold">Region</label>
      <select id="region" class="input-field focus:outline-none mb-2 mt-1">
        <option value="" selected disabled>Select your region</option>
        <option value="">...</option>
        <option value="">...</option>
        <option value="">...</option>
      </select>

      <label for="region" class="font-semibold">City</label>
      <select id="region" class="input-field focus:outline-none mb-2 mt-1">
        <option value="" selected disabled>Select your city</option>
        <option value="">...</option>
        <option value="">...</option>
        <option value="">...</option>
      </select>

      <label for="region" class="font-semibold">Area</label>
      <select id="region" class="input-field focus:outline-none mb-2 mt-1">
        <option value="" selected disabled>Select your area</option>
        <option value="">...</option>
        <option value="">...</option>
        <option value="">...</option>
      </select>

      <label for="address" class="font-semibold">Address</label>
      <input
        id="address"
        type="text"
        class="border border-gray-3 rounded focus:outline-none px-2 py-1 mt-1 w-full"
        placeholder="Flat# 3B, Floor# 2nd, House#23, Road#1A"
      />
    </div>
    <p class="title">Billing Address</p>
    <div class="p-2">
      <div class="flex items-center">
        <input
          class="mr-2 w-4 h-4"
          type="radio"
          name="bill"
          id="shipping"
          checked
        />
        <label for="shipping">Same as the shipping address</label>
      </div>
      <div class="flex items-center">
        <input class="mr-2 w-4 h-4" type="radio" name="bill" id="another" />
        <label for="another">Bill to the another address</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style></style>
