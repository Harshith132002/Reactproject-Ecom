import React from 'react';

const C1 = () => {
  return (
    <div>
      <div className="music-experience-container">
        <div className="music-content">
          <p className="category">Categories</p>
          <h1>Enhance Your <br /> Music Experience</h1>
          <div className="timer">
            <div className="time-box"><span>23</span> Hours</div>
            <div className="time-box"><span>05</span> Days</div>
            <div className="time-box"><span>59</span> Minutes</div>
            <div className="time-box"><span>35</span> Seconds</div>
          </div>
          <button className="btn">Buy Now!</button>
        </div>
        <div className="music-image">
          <img 
            src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fthpzzZnfNcDmfUn659uz5OL8z9dIa7B2GgnbjGQzo8C51TFo-c3ZdUVa~R98E8rWo1mFR0PJWKA~rFYIqZ6Z8F54Bkv7y-VRs7QtrOP7~Yz2GFR-Z66555tcd868VS~-1r3Fe0ox~8G-PdtnX--9MeWY5cSf940Av8gJ-ZZzH~tYVBeC1YGEn8giW2LGd9lQkJ5x76VBzdlRSlWlMk5lBNKz7WJwoBIpe8P7au2kxKwrr6ONHvesijwsLZDRFrvaqCmHOD17vmPoDOiEHL-FOY7AJatRVARWQ1aMJQdonjTlGK601GbnWGxGxjo-64zHB1b7HaVTyu2oHzdyWMpsg__" 
            alt="JBL Speaker" 
            className="music" 
          />
        </div>
      </div>
    </div>
  );
};

export default C1;
