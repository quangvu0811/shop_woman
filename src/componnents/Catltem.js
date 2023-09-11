import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdCloseCircleOutline, IoMdRemoveCircleOutline ,IoMdAddCircleOutline } from 'react-icons/io';
import { cartContext } from '../contexts/CartContext';



const Catltem = ({item}) => {

  const {id , title , image , price , amount} = item

  const {removeFromCart , addAmount , deleteAmount} =  useContext(cartContext)
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b
     border-gray-200 w-full font-light text-gray-500 '> 

      <div className='w-full min-h-[150px] flex items-center 
      gap-x-4'>

      {/* {image} */}
      <Link to={`/product/${id}`}>
      <img className='max-w-[80px]' src={image} alt='' />
      </Link>
      {/* {title} */}

      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2' >
          <Link className='text-sm uppercase font-medium
          max-w-[240px] text-primary hover:underline' to ={`/product/${id}`}>
            {title}
          </Link>
          <div onClick={() => removeFromCart(id)} className='text-2xl cursor-pointer'>
            <IoMdCloseCircleOutline className='text-gray-500  hover:text-red-500 transiton 
            ' />
          </div>
        </div>
        <div className=' gap-x-2 h-[36px]
        text-sm flex'>
          <div className='flex flex-1 max-w-[100px] 
          items-center h-full border text-primary font-medium'>

           <div onClick={() =>deleteAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer'
           > <IoMdRemoveCircleOutline/></div>


           <div className='h-full flex justify-between 
           items-center px-2'>{amount}</div>


           <div onClick={() =>addAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'> <IoMdAddCircleOutline/></div>
          </div>


          <div className='flex-1 flex items-center justify-around'>${price}</div>



          <div className='flex-1 flex justify-center items-center text-primary font-medium'
          >{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>


        </div>
      </div>
      </div>

    </div>
  )
}

export default Catltem