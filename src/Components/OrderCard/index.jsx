import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = ({title, imgURL, price}) => {
    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                <XMarkIcon 
                    className="h-8 w-8 text-yellow-400 bg-black cursor-pointer"
                
                />
            </div>

        </div>
    )
}

export { OrderCard };