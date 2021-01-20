<template>
    <div>
        <!-- Products Section -->
        <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-5">
            <!-- Filter -->
            <div>
                <div class="rounded-t-lg p-1 bg-green-1 font-bold text-lg flex justify-between">
                    <p class="">Categories</p>
                    <n-link to="" class="text-orange-1 text-xl"><i class="ri-add-circle-line"></i></n-link>
                </div>
                <div class="rounded-b-lg py-2">
                    <n-link :to="categorie.url" v-for="(categorie, i) in categories" :key="i" class="flex items-center p-2 hover:bg-green-1 duration-300">
                        <p class="font-bold">{{ categorie.name }}</p>
                    </n-link>
                </div>
            </div>
            <!-- End Filter -->
            <div class="lg:col-span-3 col-span-2">
                <!-- Top Markets -->
                <div class="text-right mb-4">
                    <n-link to="" class="bg-orange-1 text-white font-bold rounded-lg py-2 px-4">Add Product</n-link>
                </div>
                <table class="w-full text-left mb-6">
                    <thead>
                        <tr class="bg-green-1 h-10">
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price (BDT)</th>
                            <th>Avl. Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in items" :key="i">
                            <td>{{ item.id }}</td>
                            <td>
                                <img class="w-12 h-12" :src="require(`~/assets/img/products/${item.photo}.png`)" alt="Image">
                            </td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.categori }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.avl }}</td>
                            <td>
                                <n-link to=""><i class="ri-edit-2-fill mr-5"></i></n-link>
                                <n-link to=""><i class="ri-delete-bin-2-fill"></i></n-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- End Top Markets -->
                <!-- Paginate -->
                <div class="lg:px-20 px-3 pb-8">
                    <Paginate/>
                </div>
                <!-- End Paginate -->
            </div>
        </div>
        <!-- End Products Section -->
    </div>
</template>
<script>
import Paginate from '~/components/common/paginate.vue';
export default {
    components: {
        Paginate
    },
    data: () => ({
        categories: [
            {url: '', name: 'Food'},
            {url: '', name: 'Groceries'},
            {url: '', name: 'Furniture'},
            {url: '', name: 'Toys'},
            {url: '', name: 'Electronics'},
            {url: '', name: 'Fashion'},
        ],
        items: [
            {id: '1', photo: 'img-1', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '2', photo: 'img-2', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '3', photo: 'img-3', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '4', photo: 'img-4', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '5', photo: 'img-5', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '6', photo: 'img-1', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '7', photo: 'img-2', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '8', photo: 'img-3', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
            {id: '9', photo: 'img-4', title: 'Ceiling circle black electric deem lamp', categori: 'Home Decor', price: '1195', avl: '25'}, 
        ]
    })
}
</script>