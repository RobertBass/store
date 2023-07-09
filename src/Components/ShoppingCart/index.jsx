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
      } shopping-cart flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeShoppingCart()}>
          <XMarkIcon className="h-6 w-6 text-yellow-400 bg-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts?.map(item => (
              <OrderCard
                key={item.id}
                title={item.title}
                imgURL={item.image}
                price={item.price}
              />
            ))}
      </div>
    </aside>
  );
};

export { ShoppingCart };
