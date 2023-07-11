import "./style.css";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Context } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../OrderCard";
import { totalOrder } from "../../utils/index"

const ShoppingCart = () => {
  const context = useContext(Context);

  return (
    <aside
      className={`${
        context.isCartOpen ? "flex" : "hidden"
      } shopping-cart flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex w-full justify-between items-center px-20 py-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeShoppingCart()}>
          <ArrowUturnLeftIcon className="h-6 w-6 text-green-600 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between py-6 px-4 font-semibold" id="headTitleCol">
        <p className="text-center" id="description">Description</p>
        <p className="text-center" id="quantity">Quantity</p>
        <p className="text-center" id="price">Price</p>
        <p className="text-center" id="subtotal">Subtotal</p>
        <p className="text-center" id="remove">Remove</p>
      </div>
      <div className="px-4 overflow-y-scroll">
        {context.cartProducts?.map(item => (
              <OrderCard
                key={item.id}
                id={item.id}
                title={item.title}
                imgURL={item.image}
                price={item.price}
                quantity={item.quantity}
                subtotal={item.subtotal}
                deleteProductOfCart={context.deleteProductOfCart}
              />
            ))}
      </div>
      <div className="px-40 py-6 w-full">
        <p className="flex justify-between items-center">
          <span className="text-xl font-semibold">TOTAL ORDER: </span>
          <span className="text-xl font-bold">${totalOrder(context.cartProducts)}</span>
        </p>

      </div>
    </aside>
  );
};

export { ShoppingCart };
