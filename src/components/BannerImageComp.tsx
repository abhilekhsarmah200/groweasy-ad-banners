import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

type BannerImageProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  uid: string;
  className: string;
  onEdit: () => void;
};

const BannerImageComp: React.FC<BannerImageProps> = ({
  title,
  description,
  cta,
  image,
  background,
  uid,
  className,
  onEdit,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        padding: '20px',
        marginBottom: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        overflow: 'hidden',
      }}
      className={`${className} relative md:w-[25rem] md:h-[25rem] sm:w-[23rem] sm:h-[23rem] w-[20rem] h-[20rem]`}
    >
      <div className='absolute inset-0 bg-black opacity-20 z-50'></div>
      <h2 className='sm:text-[1.8rem] text-[1.4rem] relative z-30 mt-1 w-[100%]'>
        {title}
      </h2>
      <p className='relative z-30 mt-4 sm:text-[1rem] text-[0.8rem]'>
        {description}
      </p>
      {cta !== '' && (
        <div
          className={`${
            uid === 'templates5'
              ? 'absolute sm:bottom-[2.4rem] bottom-[1.8rem] left-[4rem]'
              : uid === 'templates9'
              ? 'absolute bg-yellow-400 bottom-12'
              : uid === 'templates1'
              ? 'w-fit bg-yellow-400 mt-[2rem]'
              : 'absolute bg-yellow-400 bottom-[5rem] right-[2rem]'
          } ${
            uid === 'templates5' &&
            'bg-transparent border-none hover:bg-transparent'
          }  px-2 py-1 rounded-md sm:text-[0.8rem] text-[0.7rem] text-black font-bold border border-black`}
        >
          {cta}
        </div>
      )}
      <div className='px-[2rem]'>
        <img
          className={`absolute ${
            uid === 'templates5'
              ? 'md:top-[11rem] sm:top-[10.3rem] top-[8.8rem] md:left-[3.6rem] sm:left-[3.25rem] left-[3rem] z-10 md:w-[17.8rem] sm:w-[16.5rem] md:h-[10rem] sm:h-[9rem] h-[8rem] w-[14rem] '
              : uid === 'templates9'
              ? 'top-[7rem] right-[3rem] rounded-full md:w-[11rem] sm:w-[9rem] md:h-[11rem] sm:h-[9rem] w-[8rem] h-[8rem] z-10'
              : uid === 'templates1'
              ? 'sm:top-[9rem] top-[7.5rem] md:-right-[5rem] sm:-right-[4rem] -right-[3.5rem] rounded-full md:w-[18rem] sm:w-[16rem] sm:h-[16rem] w-[14rem] h-[14rem] md:h-[18rem] z-10 '
              : 'md:top-[11.5rem] sm:top-[10.5rem] top-[9.2rem] sm:left-[1.2rem] left-[1rem] rounded-full md:w-[12rem] md:h-[12rem] sm:w-[11rem] sm:h-[11rem] w-[9.5rem] h-[9.5rem]'
          }`}
          src={image}
          alt={title}
        />
        <div
          onClick={onEdit}
          className='absolute top-[0.8rem] z-50 right-[0.8rem] text-white cursor-pointer hover:text-white/30'
        >
          <EditIcon className={`text-[1.3rem]`} />
        </div>
      </div>
    </div>
  );
};

export default BannerImageComp;
