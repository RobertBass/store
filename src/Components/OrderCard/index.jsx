import "../ShoppingCart/style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Context } from "../../Context";
import { useContext } from "react";


const OrderCard = ({
  id,
  title,
  imgURL,
  price,
  quantity,
  subtotal,
  deleteProductOfCart,
}) => {
  const context = useContext(Context);

  return (
    <div className="flex justify-between items-center h-24 border-2 rounded-lg shadow-lg mb-3 hover:shadow-blue-400" id="itemContainer">
      <div className="flex items-center justify-center" id="itemImg">
        <figure id="figure">
          <img
            id="image"
            className="w-full rounded-lg object-cover"
            src={imgURL}
            alt={title}
          />
        </figure>
      </div>
      <div className="flex items-center ml-4 mr-6" id="itemTitle">
        <p className="text-md font-light">{title}</p>
      </div>
      <div className="flex flex-row items-center" id="itemQuantityContainer">
        <button 
          onClick={() => context.lessQuantity(id)} 
          id="lessButton" 
          className="font-semibold border-r px-4 bg-red-700 hover:bg-red-600 text-white border-gray-400 rounded-l focus:outline-none cursor-pointer">
          <span className="flex w-full justify-center">-</span>
        </button>
        <p id="itemQuantity" className="text-lg font-medium">{quantity}</p>
        <button
          onClick={() => context.plusQuantity(id)} 
          id="plusButton" 
          className="font-semibold border-l px-4 bg-blue-700 hover:bg-blue-600 text-white border-gray-400 rounded-r focus:outline-none cursor-pointer">
          <span className="flex w-full justify-center">+</span>
        </button>
      </div>
      <div id="itemPrice">
        <p className="text-lg font-medium">{price}</p>
      </div>
      <div id="itemSubtotal">
        <p className="text-lg font-medium">{subtotal}</p>
      </div>
      <div id="itemRemove">        
        <XMarkIcon
          className="h-6 w-6 ml-10 text-red-600 font-extrabold"
          onClick={() => deleteProductOfCart(id)}
        />
      </div>
    </div>
  );
};

export { OrderCard };
