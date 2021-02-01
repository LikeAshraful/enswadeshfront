<template>
    <div>
        <!-- Products Section -->
        <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-5">
            <!-- Filter -->
            <dataFilter :filtersData="filtersData" :filterTitle="filterTitle"/>

            <div class="lg:col-span-3 md:col-span-2">
                <!-- Product tables -->
                <div class="flex justify-between font-bold mb-4">
                    <div class="flex items-center border border-gray-2 rounded-full px-3">
                        <i class="ri-search-line mr-2"></i>
                        <input class="focus:outline-none" type="text" placeholder="Search products">
                    </div>
                    <n-link to="" class="bg-orange-1 text-white rounded-lg py-2 px-4">Add Product</n-link>
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
                <!-- End Product tables -->
                <!-- Paginate -->
                <div class="px-3 pb-8">
                    <Paginate/>
                </div>
                <!-- End Paginate -->
            </div>
        </div>
        <!-- End Products Section -->
    </div>
</template>
<script>
import DataFilter from '~/components/common/Filter.vue';
import Paginate from '~/components/common/Paginate.vue';

export default {
    components: {
        Paginate,
        DataFilter,
    },
    data: () => ({
        filterTitle: 'Categories',
        filtersData: [
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