import "./style.css";
import { PlusIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Context } from "../../Context";
import { useContext } from "react";

const ProductDetail = () => {
    const context = useContext(Context);

  return (
    <aside 
        className={`${context.isActive ? 'flex' : 'hidden'} product-detail overflow-y-scroll flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
        
        >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Item Detail</h2>
        <div onClick={() => {context.closeProductDetail()}}>
          <ArrowUturnLeftIcon className="h-8 w-8 text-green-600  cursor-pointer"/>
        </div>
      </div>
      <figure className="px-6">
        <img className="w-full h-80 rounded-lg" src={context.detail.image} alt={context.detail.title} />
      </figure>
      <div className="flex">
        <p className="flex flex-col p-6">
          <span className="font-medium text-2x1 mb-2">${context.detail.price}</span>
          <span className="font-medium text-md">{context.detail.title}</span>
          <span className="font-light text-sm">{context.detail.description}</span>
        </p>
        <div 
          className="absolute cursor-pointer bg-green-600 text-white w-10 h-10 mt-2 ml-72 rounded-full m-1 p-1"
          onClick={(event) => context.addProductToCart(event, context.detail)}>
          <PlusIcon className="w-8 h-8"/>
        </div>
      </div>
    </aside>
  );
};

export { ProductDetail };