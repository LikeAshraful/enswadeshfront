<template>
    <div>
        <label class="font-bold" for="name">Mobile phone number</label>
        <input type="text" class="focus:outline-none input-field" id="name" placeholder="01XXXXXXXXX" v-model.trim="$v.name.$model">
        <div class="text-green-4">
            <span v-if="$v.name.required">Name is valid!</span>
        </div>
        <div class="text-orange-1">
            <span v-if="!$v.name.required">Name is required.</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>