<script>
import ShoppingCartIcon from '../components/Shopping-cart-icon.vue'
export default {
  components: {
    ShoppingCartIcon
  }
}
</script>

<template>
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">MaturaIT Shop</a>
    </div>
    <a className="btn btn-ghost text-xl">Home</a>
    <div className="flex justify-center items-center">
      <div className="dropdown dropdown-end">
        <div tabIndex="{0}" role="button" className="btn btn-ghost btn-circle h-[50px] relative">
          <div className="indicator flex items-center justify-center">
            <ShoppingCartIcon class="relative h-8 w-8 fill-current text-black mr-[4px]" />
            <span className="absolute top-[12px] badge badge-xs left-[20px]">8</span>
          </div>
        </div>
        <div
          tabIndex="{0}"
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
