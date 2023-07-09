import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({title, imgURL, price}) => {
    return (
        <div className="flex items-center w-full shadow-lg mb-6 hover:shadow-blue-400">
            <div className='flex items-center justify-center w-14 gap-2'>
                <figure className='w-full h-full'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgURL} alt={title} />
                </figure>
            </div>
            <div className='flex items-center ml-2 p-2 w-full gap-2'>
                <p className='text-md font-light'>{title}</p>
            </div>
            <div className='flex flex-row items-center ml-2 p-2 gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon 
                    className="h-6 w-6 ml-2 text-yellow-400 bg-black cursor-pointer"
                />
            </div>

        </div>
    )
}

export { OrderCard };