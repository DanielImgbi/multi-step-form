import React from 'react';
import arcade from '../../assets/assets/images/icon-arcade.svg';
import advanced from '../../assets/assets/images/icon-advanced.svg';
import pro from '../../assets/assets/images/icon-pro.svg';
import './StepTwo.css'

const StepTwo = () => {
  return (
        <div className='step-two'>
            <div className="heading">
                <h1>
                    Select your plan
                </h1>
                <small>You have the option of monthly or yearly billing.</small>
            </div>
            
            <div className="subscription-types">
                <div className="card">
                    <img src={arcade} alt="" />
                    <div className="card-footer">
                        <span className="name">Arcade</span><span className='price'>$9/mo</span>
                    </div>
                </div>
                
                <div className="card">
                  <img src={advanced} alt="" />  
                  <div className="card-footer">
                        <span className="name">Advance</span> <span className='price'>$12/m</span>
                    </div>
                </div>
                
                <div className="card">
                  <img src={pro} alt="" />  
                  <div className="card-footer">
                        <span className="name">Pro</span> <span className='price'>$19/mo</span>
                    </div>
                </div>
            </div>

            <div className="duration">
              <span className="monthly">Monthly</span> 
              <span><img src="" alt="" /></span>
              <span className="yearly">Yearly</span>
            </div>
            
        </div>
  )
}

export default StepTwo