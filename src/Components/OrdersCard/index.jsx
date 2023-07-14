const OrdersCard = ({
    index,
    date,
    quantity,
    total
}) => {

  return (
    <div className="flex justify-between items-center w-full h-24 border-2 rounded-lg shadow-lg mb-3 hover:shadow-blue-400">
        <p className="w-1/4 text-center font-light">{index}</p>
        <p className="w-1/4 text-center font-light">{date}</p>
        <p className="w-1/4 text-center font-light">{`${quantity} Articles`}</p>
        <p className="w-1/4 text-center font-medium text-xl">{`$${total}`}</p>
    </div>
  );
};

export { OrdersCard };