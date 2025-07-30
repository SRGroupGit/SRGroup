// ProjectCardList.jsx
'use client';
import React, { useState } from 'react';
import GlobalButton from './GlobalButton';

export default function ProjectCardList({
  title,
  location,
  availability,
  locality,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className='flex w-full flex-col border border-black/20 p-3 text-sm text-zinc-700'>
      {/* Header */}
      <div className='flex items-center justify-between mb-2'>
        <h3 className='font-medium'>{title}</h3>
        <GlobalButton
          onClick={handleToggle}
          color='white'
          className='ml-4 rounded-full px-4 py-2 text-sm'
        >
          Details
        </GlobalButton>
      </div>

      {/* Always‑visible */}
      <div className='flex justify-between mb-2'>
        <span>Location</span>
        <span>{location}</span>
      </div>

      {/* Collapsible details */}
      {isOpen && (
        <>
          <div className='flex justify-between mb-2'>
            <span>Availability</span>
            <span>{availability}</span>
          </div>
          <div className='flex justify-between'>
            <span>Locality</span>
            <span>{locality}</span>
          </div>
        </>
      )}
    </div>
  );
}
