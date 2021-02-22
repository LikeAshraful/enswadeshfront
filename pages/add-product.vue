<template>
    <div>
        <!-- Breadcrumbs -->
        <breadcrumb :breadCrumbs="breadCrumbs"></breadcrumb>

        <p class="font-bold text-3xl mb-4">Add new product</p>

        <form action="" method="POST">
            <p class="title mb-4">Basic Information</p>
            <div class="p-2">
                <div class="mb-2">
                    <label class="input-label" for="product-name">Product name</label>
                    <input class="input-field focus:outline-none" id="product-name" type="text" placeholder="Type your product title">
                </div>
                <div class="mb-2">
                    <label class="input-label" for="product-name">Categories</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <select class="input-field focus:outline-none" name="" id="">
                                <option value="" selected disabled>Select categories</option>
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                            </select>
                        </div>
                        <div>
                            <button class="bg-orange-1 rounded text-white py-1 w-full text-center font-semibold focus:outline-none"><i class="ri-add-line mr-4"></i>Add Category</button>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="product-name">Description</label>
                    <textarea class="input-field focus:outline-none" name="" id="product-name" rows="4" placeholder="Write here product description"></textarea>
                </div>
                
                <div class="mb-2">
                    <label class="input-label">Audio description</label>
                    <div class="border border-dashed border-gray-3 rounded text-center">
                        <div class="py-3">
                            <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                            <p class="inline">Drag & Drop to upload here, or</p> <label for="audio" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                            <p class="text-gray-4">Supports: MP3, WAV, WMA</p>
                        </div>
                        <input class="hidden" type="file" id="audio">
                    </div>
                </div>
                
                <div class="mb-4">
                    <label class="input-label">Video description</label>
                    <div class="border border-dashed border-gray-3 rounded text-center">
                        <div class="py-3">
                            <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                            <p class="inline">Drag & Drop to upload here, or</p> <label for="video" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                            <p class="text-gray-4">Supports: MP3, WAV, WMA</p>
                        </div>
                        <input class="hidden" type="file" id="video">
                    </div>
                </div>
            </div>
                
            <p class="title mb-4">Product Images</p>
            <div class="grid grid-cols-3 gap-8 mb-4 p-2">
                <div>
                    <label class="input-label">Thumbnail</label>
                    <div class="border border-dashed border-gray-3 rounded text-center">
                        <div class="py-3">
                            <i class="ri-upload-cloud-line text-blue-1 font-bold text-4xl"></i><br>
                            <p class="inline">Drag & Drop to upload here, or</p> <label for="thumbnail" class="text-blue-1 ml-2 inline cursor-pointer">browse</label>
                            <p class="text-gray-4">Supports: JPG, JPEG, PNG</p>
                        </div>
                        <input class="hidden" type="file" id="thumbnail">
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

            <p class="title mb-4">Properties</p>
            <div class="p-2">
                <div class="mb-2">
                    <label class="input-label" for="price">Price</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="price" type="text" placeholder="Write here">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-green-3" name="" id="">
                                <option value="TK">TK</option>
                                <option value="$">$</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="brand">Brand</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <select class="input-field focus:outline-none" name="" id="brand">
                                <option value="" selected disabled>Select brand</option>
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                            </select>
                        </div>
                        <div>
                            <button class="bg-orange-1 rounded text-white py-1 w-full text-center font-semibold focus:outline-none"><i class="ri-add-line mr-4"></i>Add Brand</button>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="status">Status</label>
                    <select class="input-field focus:outline-none" name="" id="status">
                        <option value="">Available</option>
                        <option value="">Stock out</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="discount">Discount</label>
                    <input class="input-field focus:outline-none" id="discount" type="text" placeholder="Write here">
                </div>
                <div class="mb-2">
                    <label class="input-label" for="">Bargain</label>
                    <div class="flex flex-row">
                        <div class="flex items-center mr-8">
                            <input class="mr-2 w-4 h-4" type="radio" name="payment" id="" checked>
                            <label for="">No</label>
                        </div>
                        <div class="flex items-center">
                            <input class="mr-2 w-4 h-4" type="radio" name="payment" id="">
                            <label for="">Yes</label>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="">Publish in</label>
                    <div class="flex flex-row">
                        <div class="flex items-center mr-8">
                            <input class="mr-2 w-4 h-4" type="checkbox" name="publish" id="">
                            <label for="">Festival</label>
                        </div>
                        <div class="flex items-center mr-8">
                            <input class="mr-2 w-4 h-4" type="checkbox" name="publish" id="">
                            <label for="">Flash Sale</label>
                        </div>
                        <div class="flex items-center">
                            <input class="mr-2 w-4 h-4" type="checkbox" name="publish" id="">
                            <label for="">Discount</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <p class="title my-4">Product Options</p>
            <div class="flex justify-between p-2">
                <div>
                    Include variations of the product has options such as: color, size, material, etc.... <br> you may create them in this section
                </div>
                <div>
                    <n-link to="add-product-options" class="text-orange-1 font-semibold">Add Product Options</n-link>
                </div>
            </div>
            <p class="title my-4">Shipping</p>
            <div class="p-2">
                <div class="mb-2">
                    <label class="input-label" for="package">Package Format</label>
                    <select class="input-field focus:outline-none" name="" id="package">
                        <option value="">Box</option>
                        <option value="">...</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="weight">Weight</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="weight" type="text" placeholder="0">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-green-3" name="" id="">
                                <option value="">KG</option>
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="width">Width</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="width" type="text" placeholder="0">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-green-3" name="" id="">
                                <option value="">IN</option>
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="height">Height</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="height" type="text" placeholder="0">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-green-3" name="" id="">
                                <option value="">IN</option>
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="height">Length</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="height" type="text" placeholder="0">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-green-3" name="" id="">
                                <option value="">IN</option>
                                <option value="">...</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <p class="title my-4">Shipping Cost</p>
            <div class="p-2">
                <div class="mb-2">
                    <label class="input-label" for="">Free Shipping</label>
                    <div class="flex flex-row">
                        <div class="flex items-center mr-8">
                            <input class="mr-2 w-4 h-4" type="radio" name="shipping" id="" checked>
                            <label for="cash">No</label>
                        </div>
                        <div class="flex items-center">
                            <input class="mr-2 w-4 h-4" type="radio" name="shipping" id="">
                            <label for="bkash">Yes</label>
                        </div>
                    </div>
                </div>
                <div class="mb-2">
                    <label class="input-label" for="price">Price</label>
                    <div class="grid grid-cols-5 gap-8">
                        <div class="col-span-4">
                            <input class="input-field focus:outline-none" id="price" type="text" placeholder="Write here">
                        </div>
                        <div>
                            <select class="input-field focus:outline-none bg-green-3" name="" id="">
                                <option value="TK">TK</option>
                                <option value="$">$</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4 my-8 flex justify-center gap-8">
                <button class="py-1 px-8 font-semibold border border-green-3 rounded focus:outline-none">Save as draft</button>
                <button class="py-1 px-8 font-semibold border bg-green-3 rounded focus:outline-none">Save & Publish</button>
            </div>
        </form>
    </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue';
export default {
    data() {
        return {
            breadCrumbs: [
                {title: 'Home', url: '/'},
                {title: 'My-shop', url: '/my-shop'},
                {title: 'Shop name goes to here', url: ''},
            ],
        }
    },
    components:{
        Breadcrumb,
    },
}
</script>