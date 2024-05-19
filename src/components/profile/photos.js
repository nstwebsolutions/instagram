import React from "react";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";

const Photos = ({ photos }) => {
  return (
    <div className='h-16 border-t border-gray-primary mt-12 pt-4'>
      <div className='grid grid-cols-3 gap-8 mt-4 mb-12'>
        {!photos
          ? new Array(12)
              .fill(0)
              .map((_, i) => <Skeleton key={i} width={320} height={400} />)
          : photos.length > 0
          ? photos.map((photo) => (
              <div key={photo.docId} className='relative group'>
                <img src={photo.imageSrc} alt={photo.caption} />
                <div className='absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex hidden'>
                  <p className='flex items-center text-white font-bold'>
                    <svg
                      className='w-8 mr-4'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                      />
                    </svg>
                    {photo.likes.length}
                  </p>
                  <p className='flex items-center text-white font-bold'>
                    <svg
                      className='w-8 mr-4'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                      />
                    </svg>
                    {photo.comments.length}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
      {!photos ||
        (photos.length === 0 && (
          <p className='text-center text-2xl'>No posts Yet</p>
        ))}
    </div>
  );
};

export default Photos;

Photos.propTypes = {
  photos: PropTypes.array,
};
