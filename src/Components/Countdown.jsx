import React from 'react';

const CountDown = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div>
        <h3 style={{ fontWeight:'600px' }}>Flash Sales</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '20px' }}>
        <div style={{ textAlign: 'center' }}>
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