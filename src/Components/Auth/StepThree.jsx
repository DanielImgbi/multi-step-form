import React from 'react';
import './StepThree.css';

const StepThree = () => {
  return (
    <div className='step-three'>
      <div className="headings">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>

      <div className="container">
        <div className="services">
          <label htmlFor="online-service">
            <input type="checkbox" name="online-service" id="online-service" />
            <span>
              Online service
              <p>Access to multiplayer games</p>
            </span>
          </label>
          <span className="price">+$1/mo</span>
        </div>

        <div className="services">
          <label htmlFor="online-service">
            <input type="checkbox" name="online-service" id="online-service" />
            <span>
              Larger storage
              <p>Extra 1TB for cloud save</p>
            </span>
          </label>
          <span className="price">+$2/mo</span>
        </div>

        <div className="services">
          <label htmlFor="online-service">
            <input type="checkbox" name="online-service" id="online-service" />
            <span>
              servicestomizable profile
              <p>Costum theme on your profile</p>
            </span>
          </label>
          <span className="price">+$1/mo</span>
        </div>

      </div>
    </div>
  )
}

export default StepThree