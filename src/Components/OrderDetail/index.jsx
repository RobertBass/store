import "./style.css";
import { Context } from "../../Context";
import { useContext } from "react";

const OrderDetail = ({ title, imgURL, price, quantity, subtotal, data }) => {
  const context = useContext(Context);

  return (
    <div
      onClick={() => context.showProduct(data)}
      className="flex justify-between items-center py-3 h-24 border-2 rounded-lg shadow-lg mb-3 cursor-pointer hover:shadow-blue-400"
    >
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
        <p id="itemQuantity" className="text-lg font-medium">
          {quantity}
        </p>
      </div>
      <div id="itemPrice">
        <p className="text-lg font-medium">{price}</p>
      </div>
      <div id="itemSubtotal">
        <p className="text-lg font-medium">{subtotal}</p>
      </div>
    </div>
  );
};

export { OrderDetail };
