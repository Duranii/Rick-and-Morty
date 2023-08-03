import React from 'react';
import Image from 'next/image';
import tt from '../../public/tt.png';

const Header = ({ onStatusSelect }:any) => {
  const handleSelect = (e :any) => {
    const selectedStatus = e.target.value;
    onStatusSelect(selectedStatus);
  };

  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center pt-12'>
      <Image src={tt} alt='' width={200} height={250} />
      <select className='h-10 w-48 bg-[#3c3e44] text-white border-white' name="rick" id="morty" onChange={handleSelect}>
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Header;
