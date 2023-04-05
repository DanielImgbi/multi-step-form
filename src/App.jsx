import './App.css'
import StepOne from './Components/Auth/StepOne'
import StepThree from './Components/Auth/StepThree'
import StepTwo from './Components/Auth/StepTwo'
import SideNav from './Components/Navigation/SideNav'

function App() {

  return (
    <div className="App">
      <main className="container">
        <SideNav/>

        <section className='form-section'>
          {/* <StepOne /> */}
          {/* <StepTwo/> */}
          <StepThree/>

          <footer className="form-section-footer">
            <button className="back-btn">Go Back</button>
            < button className='next-btn'>Next</button>
          </footer>

        </section>
        
      </main>
    </div>
  )
}

export default App
