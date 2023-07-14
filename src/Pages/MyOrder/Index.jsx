import { Layout } from "../../Components/Layout";
import { Context } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderDetail } from "../../Components/OrderDetail";
import { ProductDetail } from "../../Components/ProductDetail";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import './style.css'

function MyOrder() {
  const context = useContext(Context);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="flex w-80 justify-center items-center relative py-6 mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="w-6 h-6 text-green-500 cursor-pointer" />
        </Link>
        <h1 className="text-xl font-bold">My Order</h1>
      </div>

      <div
        className="flex justify-between items-center w-1/2 h-14 mb-2 border font-bold text-center" 
      >
        <p className="w-full" id="descriptionOrder">Description</p>
        <p id="quantityOrder">Quantity</p>
        <p id="priceOrder">Price</p>
        <p id="subtotalOrder">Total</p>
      </div>

      <div className="flex flex-col w-1/2 mb-3">
        {context.order?.[index].products.map((item) => (
          <OrderDetail
            key={item.id}
            id={item.id}
            title={item.title}
            imgURL={item.image}
            price={item.price}
            quantity={item.quantity}
            subtotal={item.subtotal}
            data={item}
          />
        ))}
      </div>

      <div className="w-1/2 px-16 py-4 border border-black border-solid">
        <p className="flex justify-between items-center">
          <span className="text-xl font-semibold">TOTAL ORDER: </span>
          <span className="text-xl font-bold">${context.order[index].total}</span>
        </p>
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { MyOrder };
