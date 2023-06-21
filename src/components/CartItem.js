import React from 'react';

import { Link } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';

const CartItem = ({item}) => {
  const { id, image, category, title, price } = item;

  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <div>
          <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
          </Link>
        </div>
        <div>
          <Link to={`/product/${id}`} className='text-sm uppercase 
          font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
