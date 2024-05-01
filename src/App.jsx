import { useState } from 'react'
import './App.css'
import Counter from './Component/Counter'
import Footer from './Component/Footer'

function App() {
  
  const [totalSecond, setTotalSecond] = useState(1209600);
 
  const [timeObject, setTimeObject] = useState({
    day:parseInt(totalSecond/86400),
    hour:parseInt(totalSecond%86400/3600),
    min:parseInt(((totalSecond%86400)%3600)/60),
    seconds:parseInt(((totalSecond%86400)%3600)%60)});

      setTimeout(()=>{
        setTotalSecond(totalSecond-1);
        setTimeObject({
          day:parseInt(totalSecond/86400),
          hour:parseInt(totalSecond%86400/3600),
          min:parseInt(((totalSecond%86400)%3600)/60),
          seconds:parseInt(((totalSecond%86400)%3600)%60)}
        );
      },1000);
  
  return (
    <>
      <main className='mainContainer'>
        <h1 id='header'>We're launching soon</h1>
        <Counter timeObject={timeObject} />
      </main>
      <Footer/>


    </>
  )
}

export default App
