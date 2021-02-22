<template>
    <div>
        <p class="title my-6">Product Options</p>
        <div class="p-2">
            <label class="font-bold">Choose product options</label>
            <div class="flex flex-row border-b border-gray-3 pb-4 mb-4">
                <div class="flex items-center mr-8">
                    <input class="mr-2 w-4 h-4" type="radio" name="option" id="" checked>
                    <label for="">Color</label>
                </div>
                <div class="flex items-center">
                    <input class="mr-2 w-4 h-4" type="radio" name="option" id="">
                    <label for="">Size</label>
                </div>
                <div class="flex items-center">
                    <input class="mr-2 w-4 h-4" type="radio" name="option" id="">
                    <label for="">Weight</label>
                </div>
                <div class="flex items-center">
                    <input class="mr-2 w-4 h-4" type="radio" name="option" id="">
                    <label for="">None</label>
                </div>
            </div>
            <div class="mb-2">
                <label class="input-label" for="product-name">Product name</label>
                <div class="grid grid-cols-5 gap-8">
                    <div class="col-span-4">
                        <input class="input-field focus:outline-none" id="product-name" type="text" placeholder="Type your product title">
                    </div>
                    <div>
                        <button class="focus:outline-none bg-green-3 w-full py-1 rounded">Add</button>
                    </div>
                </div>

                <div class="flex flex-row my-4">
                    <div class="flex items-center bg-green-1 py-1 px-2 mr-4 rounded">
                        <p class="mr-4">Black</p>
                        <button class="focus:outline-none"><i class="ri-close-circle-line"></i></button>
                    </div>
                    <div class="flex items-center bg-green-1 py-1 px-2 mr-4 rounded">
                        <p class="mr-4">Red</p>
                        <button class="focus:outline-none"><i class="ri-close-circle-line"></i></button>
                    </div>
                    <div class="flex items-center bg-green-1 py-1 px-2 mr-4 rounded">
                        <p class="mr-4">Green</p>
                        <button class="focus:outline-none"><i class="ri-close-circle-line"></i></button>
                    </div>
                </div>
                <p>Do you want to add some color wise variant as: size, price, weight, etc... <br>you may create them in this section</p>
            </div>
        </div>
    </div>
</template>