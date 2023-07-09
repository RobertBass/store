import { useContext } from "react";
import { Context } from "../../Context";
import { FolderPlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(Context);

  const rendericon = (id) => {
    const isInCart =
      context.cartProducts.filter((proudct) => proudct.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-green-500 text-white font-semibold w-10 h-10 rounded-full m-1 p-1">
          <CheckIcon className="w-8 h-8" />
        </div>
      )
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-black text-yellow-400 w-10 h-10 rounded-full m-1 p-1"
          onClick={(event) => context.addProductToCart(event, data.data)}
        >
          <FolderPlusIcon className="w-8 h-8" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-72 h-96 rounded-lg hover:shadow-lg hover:shadow-blue-400"
      onClick={() => context.showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-black/80 rounded-lg text-white text-xs font-medium m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-scale-down rounded-lg"
          src={data.data.image}
          alt={data.data.title}
        />
        {rendericon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light ml-2 w-80">{data.data.title}</span>
        <span className="text-lg font-medium w-20">${data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
