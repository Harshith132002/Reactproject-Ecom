import React from 'react';

const CountDown = () => {
  return (
    <div className='flex justify-evenly gap-[100px]' >
      <div>
        <h3 className='font-[600px]' >Flash Sales</h3>
      </div>
      <div className='flex justify-around items-center gap-[20px]' >
        <div className='text-center' >
          Days
          <br />
          03
        </div>
        <span className='colon'>:</span>
        <div style={{ textAlign: 'center' }}>
          Hours
          <br />
          23
        </div>
        <span className='colon'>:</span>
        <div style={{ textAlign: 'center' }}>
          Minutes
          <br />
          19
        </div>
        <span className='colon'>:</span>
        <div style={{ textAlign: 'center' }}>
          Seconds
          <br />
          56
        </div>
      </div>
    </div>
  );
};

export default CountDown;