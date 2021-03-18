<template lang="">
    <div>
        <p class="h2">My Shopping Friends</p>
        <div class="mt-4 bg-white">
            <div class="p-4 flex">
                    <NuxtLink v-for="(menu, i) in shopping_friends"
                      :to="menu.to" :class="$route.path == menu.to ? 'bg-green-3' : ''" class="btn-group hover:bg-green-3" :key="'menu'+i">{{menu.title}}</NuxtLink>

            </div>
            <div class="divider"></div>
               <NuxtChild  />


        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
             shopping_friends:[
             {title:"Friend list", to:"/my-account/shoppingfriend/friendlist"},
             {title:"Find friends", to:"/my-account/shoppingfriend/findfriend"},
             {title:"Friend requests", to:"/my-account/shoppingfriend/friendrequest"},

           ]
        }
    },


    methods: {


    }
}
</script>
