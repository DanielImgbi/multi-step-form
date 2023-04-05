import React from 'react';
import '../Navigation/SideNav.css'

function SideNav() {
  return (
    <nav className="side-nav">
          <ul>
            <li className="list-item">
              <span className='step' id='step-one'>1</span>
              <div>
                <small>STEP 1</small>
                <h4>YOUR INFO</h4>
              </div>
            </li>

            <li className="list-item">
              <span className="step" id='step-two'>2</span>
              <div>
                <small>STEP 2</small>
                <h4>SELECT PLAN</h4>
              </div>
            </li>

            <li className="list-item">
              <span className="step" id="step-three">3</span>
              <div>
                <small>STEP 3</small>
                <h4>ADD-ONS</h4>
              </div>
            </li>
      
            <li className="list-item">
              <span className="step" id="step-four">4</span>
              <div>
                <small>STEP 4</small>
                <h4>SUMMARY</h4>
              </div>
            </li>
          </ul>
        </nav>
  )
}

export default SideNav