'use client'
import React, { useState, useEffect } from 'react';
import Header from '../../src/components/header';
import Card from '../../src/components/card';
import { Pagination } from 'flowbite-react';

export default function Home() {
  const itemsPerPage = 6;
  const [character, setCharacter] = useState([]);
  console.log(character , "character")
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('');
    console.log(selectedStatus  , "Select statis")
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacter(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredCharacters = character.filter((char:any) => {
    if (selectedStatus === '') {
      return true;
    }
    return char.status === selectedStatus;
  });

  const currentItems = filteredCharacters.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getStatusColor = (status: string) => {
    if (status === 'Alive') {
      return 'bg-green-400 border-green-500';
    } else if (status === 'Dead') {
      return 'bg-red-400 border-red-500';
    } else {
      return 'bg-white';
    }
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
    console.log(status, "status") 
  };

  return (
    <div className='bg-[#272b33]'>
      <Header onStatusSelect={handleStatusSelect} />
      <div className='pt-12 pb-20 max-w-[1200px] mx-auto'>
        <div className='grid gap-9 grid-cols-3'>
          {currentItems.map((idx: any) => (
            <Card
              key={idx.id}
              image={idx.image}
              name={idx.name}
              status={idx.status}
              specie={idx.species}
              gender={idx.gender}
              statusColor={getStatusColor(idx.status)}
            />
          ))}
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto flex justify-center pb-20'>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={Math.ceil(filteredCharacters.length / itemsPerPage)}
        />
      </div>
    </div>
  );
}
