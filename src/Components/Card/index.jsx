import { useContext } from "react";
import { Context } from "../../Context";
import { FolderPlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
    const context = useContext(Context);

    return (
        <div 
            className="bg-white cursor-pointer w-70 h-75 rounded-lg"
            onClick={() => context.showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-black/80 rounded-lg text-white text-xs font-medium m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-scale-down rounded-lg" src={data.data.image} alt={data.data.title} />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black text-yellow-400 w-10 h-10 rounded-full m-1 p-1"
                onClick={(event) => context.addProductToCart(event, data.data)}>
                <FolderPlusIcon className="w-8 h-8"/>   
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
    )
}

export { Card };