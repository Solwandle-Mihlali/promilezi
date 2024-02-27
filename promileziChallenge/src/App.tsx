
import './App.css'
import NavBar from './components/navBar'
import Welcome from './components/welcome'
import WhySection from './components/whySection'


function App() {


  return (
    <>
     <NavBar/>
     <Welcome/>
     <div className='splitter'>
      <span></span>
      <p>WHY<span>ProSuite</span></p>
     </div>
     <WhySection/>

      
    </>
  )
}

export default App
