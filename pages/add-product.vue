<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>
        <div class="flex justify-between">
            <p class="font-bold text-3xl">Add Product</p>
            <n-link to="#" class="text-blue-1 font-bold">Need help?</n-link>
        </div>
        <p class="title">Choose an appropriate format</p>
        <div class="flex my-4">
            <button @click="simpleFormat" :class="simple_format ? 'bg-green-3':'bg-white'" class="font-bold border border-gray-3 hover:bg-green-3 py-1 px-4 focus:outline-none">Simple format</button>
            <button @click="sizeWise" :class="size_wise ? 'bg-green-3':'bg-white'" class="font-bold border border-gray-3 hover:bg-green-3 py-1 px-4 focus:outline-none">Size wise</button>
            <button @click="weightWise" :class="weight_wise ? 'bg-green-3':'bg-white'" class="font-bold border border-gray-3 hover:bg-green-3 py-1 px-4 focus:outline-none">Weight wise</button>
            <button @click="makeAList" :class="make_a_list ? 'bg-green-3':'bg-white'" class="font-bold border border-gray-3 hover:bg-green-3 py-1 px-4 focus:outline-none">Make a list</button>
        </div>
        <!-- <div class="flex flex-row my-4 font-bold">
            <div class="flex items-center mr-6">
                <input class="mr-2 w-4 h-4" type="radio" name="form-type" id="" checked>
                <label for="">Simple format</label>
            </div>
            <div class="flex items-center mr-6">
                <input class="mr-2 w-4 h-4" type="radio" name="form-type" id="">
                <label for="">Size wise</label>
            </div>
            <div class="flex items-center mr-6">
                <input class="mr-2 w-4 h-4" type="radio" name="form-type" id="">
                <label for="">Weight wise</label>
            </div>
            <div class="flex items-center">
                <input class="mr-2 w-4 h-4" type="radio" name="form-type" id="">
                <label for="">Make a list</label>
            </div>
        </div> -->
        <p class="mb-4">Write here why use this format as a helper text</p>
        <div class="bg-white rounded-lg mb-6">
            <p class="title">Similarity</p>
            <div class="p-2">
                <div class="mb-2">
                    <label class="input-label" for="similar">Select product</label>
                    <select class="input-field focus:outline-none" name="" id="similar">
                        <option class="text-gray-4" value="" selected disabled>Choose the product (Show product name, code and SKU - Developer)</option>
                        <option value="">01</option>
                        <option value="">02</option>
                        <option value="">03</option>
                    </select>
                    <p>Write here the benefit of similar product check.</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-12 mb-6">
            <div class="">
                <div class="bg-white rounded-lg mb-6">
                    <p class="title">Basic Information</p>
                    <div class="p-2">
                        <div class="mb-2">
                            <label class="input-label" for="name">Product Name</label>
                            <input class="input-field focus:outline-none" id="name" type="text" placeholder="Type your product title">
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="brand">Brand Name</label>
                            <input class="input-field focus:outline-none" id="brand" type="text" placeholder="Type product brand name">
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="code">Product code/SKU</label>
                            <input class="input-field focus:outline-none" id="code" type="text" placeholder="Type code hear">
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="category">Category</label>
                            <div class="grid grid-cols-5 gap-4">
                                <div class="col-span-3">
                                    <select class="input-field focus:outline-none" name="" id="category">
                                        <option value="" selected disabled>Select category</option>
                                        <option value="">01</option>
                                        <option value="">02</option>
                                        <option value="">03</option>
                                    </select>
                                </div>
                                <div class="col-span-2">
                                    <input type="text" class="input-field focus:outline-none" placeholder="Create new">
                                </div>
                            </div>
                        </div>
                        <div v-if="simple_format" class="mb-2">
                            <label class="input-label" for="quantity">Quantity</label>
                            <input class="input-field focus:outline-none" id="quantity" type="text" placeholder="Quantity">
                        </div>
                    </div>
                </div>
                <div v-if="make_a_list" class="bg-white rounded-lg mb-6">
                    <p class="title">Make a list</p>
                    <div class="p-2">
                        <table class="w-full">
                            <tr class="font-bold">
                                <td>Product name</td>
                                <td>Rate</td>
                                <td>Per Unit</td>
                                <td>Discount</td>
                                <td>Offer</td>
                                <td></td>
                            </tr>
                            <tr v-for="(list, i) in lists" :key="i">
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="Name"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="0"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="0"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="0"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="0"></td>
                                <td><button class="focus:outline-none text-orange-1" v-if="i == lists-1 && i != 0" @click="removeList"><i class="ri-close-circle-fill"></i></button></td>
                            </tr>
                        </table>
                        <button @click="addList" class="font-bold text-orange-1 focus:outline-none">Add another</button>
                    </div>
                </div>
                <div v-if="weight_wise" class="bg-white rounded-lg mb-6">
                    <p class="title">Weight Wise Price Information</p>
                    <div class="p-2">
                        <table class="w-full">
                            <tr class="font-bold">
                                <td>Weight</td>
                                <td>Quantity</td>
                                <td>Price/Unit</td>
                                <td></td>
                            </tr>
                            <tr v-for="(weight, i) in weights" :key="i">
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="(kg, litre, cm, mm)"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="1"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="0"></td>
                                <td><button class="focus:outline-none text-orange-1" v-if="i == weights-1 && i != 0" @click="removeWeight"><i class="ri-close-circle-fill"></i></button></td>
                            </tr>
                        </table>
                        <button @click="addWeight" class="font-bold text-orange-1 focus:outline-none">Add another</button>
                    </div>
                </div>
                <div v-if="size_wise" class="bg-white rounded-lg mb-6">
                    <p class="title">Size Wise Price Information</p>
                    <div class="p-2">
                        <table class="w-full">
                            <tr class="font-bold">
                                <td>Size</td>
                                <td>Quantity</td>
                                <td>Price/Unit</td>
                                <td></td>
                            </tr>
                            <tr v-for="(size, i) in sizes" :key="i">
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="(S/M/L/4/5/6)"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="1"></td>
                                <td><input type="text" class="input-field focus:outline-none my-1" placeholder="0"></td>
                                <td><button class="focus:outline-none text-orange-1" v-if="i == sizes-1 && i != 0" @click="removeSize"><i class="ri-close-circle-fill"></i></button></td>
                            </tr>
                        </table>
                        <button @click="addSize" class="font-bold text-orange-1 focus:outline-none">Add another</button>
                    </div>
                </div>
                <div v-if="simple_format" class="bg-white rounded-lg mb-6">
                    <p class="title">Price</p>
                    <div class="p-2">
                        <div class="mb-2">
                            <label class="input-label" for="price">Price</label>
                            <div class="grid grid-cols-5 gap-8">
                                <div class="col-span-4">
                                    <input class="input-field focus:outline-none" id="price" type="text" placeholder="Write here">
                                </div>
                                <div>
                                    <select class="input-field focus:outline-none bg-gray-1" name="" id="">
                                        <option value="">BDT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="unit">Price Per Unit</label>
                            <select class="input-field focus:outline-none" name="" id="unit">
                                <option value="" disabled selected>Select category</option>
                                <option value="">...</option>
                                <option value="">...</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="discount">Discount</label>
                            <select class="input-field focus:outline-none" name="" id="discount">
                                <option value="" selected disabled>Select category</option>
                                <option value="">...</option>
                                <option value="">...</option>
                            </select>
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="discount-price">Discount Price</label>
                            <input class="input-field focus:outline-none" id="discount-price" type="text" placeholder="Type code here">
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="offer">Offer</label>
                            <input class="input-field focus:outline-none" id="offer" type="text" placeholder="Type product brand name">
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg mb-6">
                    <p class="title">Services</p>
                    <div class="p-2">
                        <div class="mb-2">
                            <div class="flex flex-row">
                                <div class="flex items-center mr-8">
                                    <input class="mr-2 w-4 h-4" type="radio" name="service" id="">
                                    <label for="">Warranty</label>
                                </div>
                                <div class="flex items-center mr-8">
                                    <input class="mr-2 w-4 h-4" type="radio" name="service" id="">
                                    <label for="">Guarantee</label>
                                </div>
                                <div class="flex items-center">
                                    <input class="mr-2 w-4 h-4" type="radio" name="service" id="" checked>
                                    <label for="">None</label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="input-label">Details</label>
                            <textarea class="input-field" name="" id="" rows="4" placeholder="Write details here about warranty or guarantee "></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-white rounded-lg mb-6">
                    <p class="title">Product Image</p>
                    <div class="p-2">
                        <div class="mb-2">
                            <label class="input-label">Product Thumbnail</label>
                            <div class="border border-dashed border-gray-3 rounded text-center">
                                <div v-if="!url" class="py-10 flex items-center justify-center">
                                    <i class="ri-attachment-line"></i>
                                    <label for="thumbnail" class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2">Add file</label>
                                    <p class="inline">or drop images here</p> 
                                </div>
                                <label for="thumbnail" class="cursor-pointer">
                                    <div v-if="url" class="relative pb-2/5 p-2 flex flex-row justify-center">
                                        <img class="absolute h-full rounded-xl m-auto" :src="url" />
                                    </div>
                                </label>
                                <input class="hidden" type="file" id="thumbnail" @change="onFileChange">
                            </div>
                        </div>
                        <div class="col-span-2">
                            <label class="input-label">Gallery images</label>
                            <div class="border border-dashed border-gray-3 rounded text-center">
                                <div class="py-3">
                                    <label class="cursor-pointer" for="gallery"><i class="ri-add-line text-blue-1 font-bold text-4xl"></i></label><br>
                                    <p class="text-gray-4">Minimum: 4, Maximum: 10</p>
                                    <div class="flex flex-row gap-2 justify-center">
                                        <span class="h-6 w-12 bg-gray-3"></span>
                                        <span class="h-6 w-12 bg-gray-3"></span>
                                        <span class="h-6 w-12 bg-gray-3"></span>
                                        <span class="h-6 w-12 bg-gray-3"></span>
                                    </div>
                                </div>
                                <input class="hidden" type="file" id="gallery">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg">
                    <p class="title">More Information</p>
                    <div class="p-2">
                        <div class="mb-2">
                            <label class="input-label" for="description">Details information</label>
                            <textarea class="input-field focus:outline-none" name="" id="description" rows="4" placeholder="Write here product description"></textarea>
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="feature">Features</label>
                            <table class="w-full">
                                <tr v-for="(featur, i) in featurs" :key="i">
                                    <td><input class="input-field focus:outline-none my-1" id="feature" type="text" placeholder="Write feature title"></td>
                                    <td><input class="input-field focus:outline-none my-1" id="feature" type="text" placeholder="Write details here"></td>
                                    <td><button class="focus:outline-none text-orange-1" v-if="i == featurs-1 && i != 0" @click="removeFeature"><i class="ri-close-circle-fill"></i></button></td>
                                </tr>
                            </table>
                            <button @click="addFeature" class="font-bold text-orange-1 focus:outline-none">Add another</button>
                        </div>
                        <div class="mb-2">
                            <label class="input-label">Audio description</label>
                            <div class="border border-dashed border-gray-3 rounded text-center">
                                <div class="py-3 flex items-center justify-center">
                                    <i class="ri-attachment-line"></i>
                                    <label for="audio" class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2">Add file</label>
                                    <p class="inline">or drop audio files here</p> 
                                </div>
                                <input class="hidden" type="file" id="audio">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="input-label">Video description</label>
                            <div class="border border-dashed border-gray-3 rounded text-center">
                                <div class="py-3 flex items-center justify-center">
                                    <i class="ri-attachment-line"></i>
                                    <label for="video" class="font-bold text-blue-1 ml-2 inline cursor-pointer mr-2">Add file</label>
                                    <p class="inline">or drop video files here</p> 
                                </div>
                                <input class="hidden" type="file" id="video">
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="input-label" for="">Bargain</label> <br>

                            <label @click="bargainToggle" class="input-label cursor-pointer text-3xl" :class="bargain ? 'text-gray-2':'text-blue-1'" for="bargain-opt"><i :class="bargain ? 'ri-toggle-line':'ri-toggle-fill'"></i></label>
                            <input :model="bar" class="hidden" id="bargain-opt" type="text" value="Yes">
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg">
                    <p class="title">Delivery</p>
                    <div class="p-2">
                        <div class="mb-2">
                            <label class="input-label" for="description">Delivery offer</label>
                            <div class="grid grid-cols-5 gap-8">
                                <div class="col-span-4">
                                    <input class="input-field focus:outline-none" id="price" type="text" placeholder="Write here">
                                </div>
                                <div>
                                    <select class="input-field focus:outline-none bg-gray-1" name="" id="">
                                        <option value="">%</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 my-8 flex justify-center gap-6 mb-6">
            <button class="btn-disabled focus:outline-none">Preview</button>
            <button class="btn-disabled focus:outline-none">Finish & Publish</button>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            url: null,
            bar: '',
            bargain: false,
            simple_format: true,
            size_wise: false,
            weight_wise: false,
            make_a_list: false,
            featurs: 1,
            sizes: 1,
            weights: 1,
            lists: 1,
            breadCrumbs: [
                {title: 'Home', url: '/'},
                {title: 'My Shop', url: '/my-shop'},
                {title: 'Shop name goes to here', url: ''},
            ],
        }
    },
    methods: {
        bargainToggle()
        {
            this.bargain = !this.bargain;
        },

        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },

        addFeature()
        {
            this.featurs += 1;
        },
        removeFeature()
        {
            if(this.featurs > 1)
            {
                this.featurs -= 1;
            }
        },

        addSize()
        {
            this.sizes += 1;
        },
        removeSize()
        {
            if(this.sizes > 1)
            {
                this.sizes -= 1;
            }
        },

        addWeight()
        {
            this.weights += 1;
        },
        removeWeight()
        {
            if(this.weights > 1)
            {
                this.weights -= 1;
            }
        },

        addList()
        {
            this.lists += 1;
        },
        removeList()
        {
            if(this.lists > 1)
            {
                this.lists -= 1;
            }
        },

        simpleFormat ()
        {
            this.simple_format = true;
            this.size_wise = false;
            this.weight_wise = false;
            this.make_a_list = false;
        },

        sizeWise ()
        {
            this.simple_format = false;
            this.size_wise = true;
            this.weight_wise = false;
            this.make_a_list = false;
        },

        weightWise ()
        {
            this.simple_format = false;
            this.size_wise = false;
            this.weight_wise = true;
            this.make_a_list = false;
        },

        makeAList ()
        {
            this.simple_format = false;
            this.size_wise = false;
            this.weight_wise = false;
            this.make_a_list = true;
        },
    }
}
</script>
