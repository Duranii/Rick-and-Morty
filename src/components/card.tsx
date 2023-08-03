import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  name: string;
  status: string;
  specie: string;
  gender: string;
  statusColor: string;
}

const Card: React.FC<CardProps> = ({ image, name, status, specie, gender, statusColor }) => {
  return (
    <div>
      <Image className='h-80 w-[100%] border-' src={image} alt='' width={200} height={200} />
      <div className='h-12 bg-[#3c3e44] text-white flex items-center justify-center font-extrabold text-2xl'>{name}</div>

      <div className='flex gap-6 items-center justify-center text-white h-12 bg-[#3c3e44]'>
        <div className={`w-3 h-3 rounded-2xl ${statusColor} border-[1px]`}></div> 
        <div className='h-12 bg-[#3c3e44] text-white flex items-center justify-center font-bold text-lg'>{status}</div>
      </div>

      <div className='flex items-center justify-center text-white h-12 bg-[#3c3e44] space-x-2'>
        <p className='font-bold text-lg'>Specie :</p>
        <div className='font-bold text-sm'>{specie}</div>
      </div>
      <div className='flex items-center justify-center text-white h-12 bg-[#3c3e44] space-x-2'>
        <p className='font-bold text-lg'>Gender :</p>
        <div className='font-bold text-sm'>{gender}</div>
      </div>
    </div>
  );
};

export default Card;
