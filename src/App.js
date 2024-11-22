
import './App.css';
import React, {useState} from 'react'


function App() {
  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height)) * 10000
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else
   {
    // if(bmi < 25) {
    //   imgSrc = require()
    // }
    //  else if (bmi >= 25 && bmi < 30) {
    //   imgSrc = require('')
    // }
    //  else {
    //   imgSrc = require('')
    // }
  }


  let reload = () => {
    window.location.reload()
  }

  

  return (

    // <div className="App bg-info rounded-5 p-5 w-100 mx-auto text-center " style={{height:'100vh'}}>
    
    <div className="app bg-white rounded-5 p-5 mt-5 w-100" style={{height:'75vh'}}>
      <div className='container-fluid bg-dark rounded-5 text-white p-5 mx-auto text-center w-100'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi} className='p-5 border borderd rounded-5 '>
          <div className='border borderd rounded-5 mt-2 '>
            <label>Weight (KG)</label> 
            <input className='form-control bntshop rounded-5  ' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className='border borderd rounded-5 mt-2 '>
            <label>Height (cm)</label>
            <input className='form-control bntshop rounded-5 ' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div className=' rounded-5 bg-dark mt-1 '>
            <button className='btn btnshop mt-1 ms-5' type='submit'>Submit</button>
            <button className='btn btnshop btn-outline mt-1 ms-3 ' onClick={reload} type='submit'>Reload</button>
           
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p className='btnshop'>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>




    // </div>

  );
}

export default App;
