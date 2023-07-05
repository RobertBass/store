import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Context } from "../../Context";
import { useContext } from "react";
import { OrderCard } from "../OrderCard";

const ShoppingCart = () => {
  const context = useContext(Context);

  return (
    <aside
      className={`${
        context.isCartOpen ? "flex" : "hidden"
      } shopping-cart flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeShoppingCart()}>
          <XMarkIcon className="h-8 w-8 text-yellow-400 bg-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6">
        {context.cartProducts.map((product) => (
            <OrderCard
            key={product.id}
            title={product.title}
            imgURL={product.image}
            price={product.price}
            />
        ))}
      </div>
    </aside>
  );
};

export { ShoppingCart };
