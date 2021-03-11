<template>
    <div>
<<<<<<< HEAD
        <p>Brand: zxy</p>
        <p>Item Code: 873220</p>
        <p>Model: VIS-EK-011</p>
        <p>Capacity: 2.3L</p>
        <p>Power: 1500W, 220V, 50Hz</p>
        <p>Fully Heat resistant, Cool touch two-layer body</p>
        <p>Inner side 201SS & Outer side Plastic heatproof Body</p>
        <p>Auto turn Off when 100°C water boils</p>
        <p>Boil-dry and overheat protection</p>
        <p>Triple Safety Protection</p>
        <p>Fast water boils within 3-4 minutes</p>
        <p>Color: Mixed (As given picture).</p>
        <p>Warranty: 1-year warranty</p>
        <p>Note: Product delivery duration may vary due to product availability in stock.</p>
        <p>Disclaimer: The actual color of the physical product may slightly vary due to the deviation of lighting sources, photography or your device display settings.</p>
=======
      {{getProduct.description}}
>>>>>>> 3452f694dc006d9f9bd33e7ffff2cdbc3737a63d
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {


  computed: {
    ...mapGetters(
      'products', ['getProduct']
    )
  }

}
</script>
