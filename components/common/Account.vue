<template>
    <div>
        <div @click="closeModal" class="fixed inset-0 z-50 flex flex-col items-end max-w-screen-xl xl:px-10 px-2 m-auto mt-24">
            <div @click="wait" class="max-w-sm shadow-lg p-2 border border-gray-3 bg-white">
                <a href="#" class="block px-4 py-1 text-gray-700 hover:bg-gray-100" role="menuitem">{{$auth.user.name}}</a>
                <a href="#" class="block px-4 py-1 text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
                <button @click.prevent="logout" class="block px-4 py-1 font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none">Sign out</button>
            </div>
        </div>
        <div @click="closeModal" class="fixed inset-0"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            close_modal: 'closeModal',
        }
    },
    methods: {
        closeModal()
        {
            if(this.close_modal == 'closeModal')
            {
                this.$emit('showAccountOptions');
            }
        },
        wait()
        {
            this.close_modal = 'wait';
            setTimeout(() => this.close_modal = 'closeModal', 500);
        },
        async logout() {
            this.closeModal();
            await this.$auth.logout();
            this.$toast.success('Successfully logout from your account!');
            this.$router.push('/');
        }
    },
}
</script>