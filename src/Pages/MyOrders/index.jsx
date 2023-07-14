import { Context } from "../../Context";
import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

function MyOrders() {
  const context = useContext(Context);

    return (
      <Layout>
        <div className="w-80 relative flex items-center py-6 justify-center">
          <h1 className="text-xl font-bold">My Orders</h1>
          <Link 
            to='/' 
            className="absolute left-0"
            onClick={context.cleanFilters()}
            >
            <HomeIcon className="w-8 h-8 font-bold text-green-600 cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-between w-1/2 h-14 items-center border font-bold mb-2">
          <p className="text-center w-1/4">Order #</p>
          <p className="text-center w-1/4">Date</p>
          <p className="text-center w-1/4">Quantity</p>
          <p className="text-center w-1/4">Total Order</p>
        </div>
        {context.order.map((order, index) => (
          <Link className="w-1/2" key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              index={index + 1}
              date={order.date}
              quantity={order.quantity}
              total={order.total}
            />
          </Link>
      ))}
      </Layout>
    )
  }
  
  export { MyOrders };