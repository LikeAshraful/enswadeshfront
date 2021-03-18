<template lang="">
    <div>
        <div v-if="!add">
            <div class="bg-white flex justify-between p-4">
                <p class="h2">Shop members</p>
                <button @click="addNew" class="btn-add focus:outline-none">Add New</button>
            </div>
            <div class="divider"></div>
            <div v-if="!member" class="list-items-center">
                <div class="text-6xl w-32 h-32 mt-10 rounded-full bg-gray-3 text-gray-4 flex items-center justify-center">
                    <i class="ri-group-fill"></i>
                </div>
                <p class="h2 text-gray-4 mb-10">Your shop has no member in Swadesh</p>
            </div>
            <div v-if="member" class="bg-white p-4">
                <div class="grid grid-cols-4 gap-4">
                    <div v-for="(row, i) in rows" :key="i" class="flex flex-col items-center border-2 border-r-4 border-b-4 rounded-lg p-2">
                        <img class="avatar" src="~/assets/img/default_market.png" alt="Image">
                        <p class="h3 mt-4">Adam</p>
                        <div class="w-full mt-4 flex items-center justify-center gap-4 text-xl">
                            <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-message-2-fill"></i></button>
                            <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-phone-fill"></i></button>
                            <button class="rounded w-8 h-8 bg-green-1 "><i class="ri-video-chat-fill"></i></button>
                        </div>
                        <button @click="removeMember" class="mt-4 btn-border hover:bg-green-3 focus:outline-none">Remove</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="add">
            <div class="bg-white flex justify-between p-4">
                <p class="h2">Shop members</p>
            </div>
            <div class="divider"></div>
            <div class="bg-white p-4">
                <p class="h3 mb-4">Add new member</p>

                <label class="input-label" for="phone">Mobile number</label>
                <input class="input-field focus:outline-none" type="text" name="phone" placeholder="01***">

                <div class="my-4">
                    <div class="border border-gray-3 rounded-md shadow-md w-1/4 p-2 flex items-center justify-center">
                        <img class="avatar mr-4" src="~/assets/img/default_market.png" alt="Image">
                        <p class="h3">Adam</p>
                    </div>
                </div>

                <label class="input-label" for="name">Name</label>
                <input class="input-field focus:outline-none mb-4" type="text" name="name" placeholder="Adam">

                <label class="input-label" for="addas">Add as</label>
                <input class="input-field focus:outline-none mb-4" type="text" name="addas" placeholder="Salesman, Partner, Cashier, etc">

                <p class="h3 mb-4">Select working hour:</p>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="input-label" for="start">Start time (hh:mm am/pm)</label>
                        <input class="input-field focus:outline-none mb-4" type="text" name="start" placeholder="Adam">
                    </div>
                    <div>
                        <label class="input-label" for="end">End time (hh:mm am/pm)</label>
                        <input class="input-field focus:outline-none mb-4" type="text" name="end" placeholder="Adam">
                    </div>
                </div>

                <label class="input-label" for="">Permissions</label>
                <div class="flex flex-row mb-4">
                    <div class="flex items-center justify-center mr-4">
                        <input class="w-4 h-4 mr-2" type="radio" name="permissions" id="control_room">
                        <label for="control_room">Control room</label>
                    </div>
                    <div class="flex items-center justify-center mr-4">
                        <input class="w-4 h-4 mr-2" type="radio" name="permissions" id="control_room">
                        <label for="control_room">Shop</label>
                    </div>
                    <div class="flex items-center justify-center mr-4">
                        <input class="w-4 h-4 mr-2" type="radio" name="permissions" id="control_room">
                        <label for="control_room">Cash box</label>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="flex items-center justify-center pt-4">
                    <button class="btn-border bg-green-3 focus:outline-none">Ask to join</button>
                </div>
            </div>
        </div>

        <remove-member v-if="remove" v-on:closeModal="closeModal()"></remove-member>
    </div>
</template>
<script>
import RemoveMember from '~/components/shop-control-panel-menus/shop-member/modals/RemoveMember.vue';
export default {
    data() {
        return {
            member: true,
            remove: false,
            add: false,
            rows: [
                '',
                '',
                '',
            ],
        }
    },
    components: {
        RemoveMember,
    },
    methods: {
        removeMember(){
            this.remove = true;
        },
        closeModal(){
            this.remove = false;
        },
        addNew()
        {
            this.add = true;
        }
    }
}
</script>