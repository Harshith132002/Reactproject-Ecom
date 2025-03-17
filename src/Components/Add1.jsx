import React from 'react';
import TitleWithRectangle from './Rec'; // Assuming Rec.js is in the same directory

const Add1 = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <div className="Browse">
        <h4>
          <TitleWithRectangle text="Featured" /> {/* Correct usage */}
        </h4>
        <div>
          <h2 style={{ fontWeight: '600', lineHeight: '48px', letterSpacing: '4%' }}>
            <b>New Arrival</b>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ height: '300px', width: '300px' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
              alt="Image Description"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ height: '150px', width: '400px', backgroundColor: 'blue' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
                alt="Image Description"
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ height: '150px', width: '200px', backgroundColor: 'yellow' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
                  alt="Image Description"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ height: '150px', width: '200px', backgroundColor: 'green' }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4troEouUL17A9x2LqfASJAFESUxQ3AktWnQ&s"
                  alt="Image Description"
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
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