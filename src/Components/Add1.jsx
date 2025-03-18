import React from 'react';
import TitleWithRectangle from './Rec'; // Assuming Rec.js is in the same directory

const Add1 = () => {
  return (
    <div className='mt-[100px]'>
      <div className="Browse">
        <h4>
          <TitleWithRectangle text="Featured" /> {/* Correct usage */}
        </h4>
        <div>
          <h2 
className='font-semibold leading-[48px] tracking-[4%]'          
>
            <b>New Arrival</b>
          </h2>
        </div>
        <div className='flex gap-[8px]' >
          <div className='h-[300px] w-[300px]' >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
              alt="Image Description"
className='w-[100%] h-[300px] object-cover '

            />
          </div>
          <div className='flex flex-col gap-[5px]' >
            <div
            className='h-[150px] w-[400px] bg-[#0000FF]'
          >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
                alt="Image Description"
               className='w-full h-[150px] object-cover'
                
              />
            </div>
            <div className='flex gap-[5px]'>
              <div
              className='h-[150px] w-[200px] bg-yellow-300 '
             >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
                  alt="Image Description"
className='w-full h-[150px] object-cover '

                />
              </div>
              <div
  className='h-[150px] w-[200px] bg-green-600'           
  >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
                  alt="Image Description"
                  className='w-full h-[150px] object-cover '
                 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add1;