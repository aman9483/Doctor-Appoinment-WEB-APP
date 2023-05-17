import React from 'react'
import NavBar from '../NavBar'
import doctorPic from './doctorAssests/doctor.png'
import './doctor.css'
import Footer from '../Footer'

const doctorpage = () => {
  return (
    <div>
     <NavBar/>

     <div  className='wrap'>

        <div className='doctorPic'>

          <img src = {doctorPic} id='pic' alt='pic'/ >

        </div>

        <div className='heading'>

            <h1 id='docHead'>Doctors</h1>
            <p id='docPara'>Here you can search about the doctors for a particular disease
</p>
        </div>

        <div className='inputData' id='inputDoc'>


<input type='text'id='inpDoc' placeholder='Search Disease'/>

<button id='buttonDoc'>Search</button>
</div>


<Footer/>

     </div>
    </div>
  )
}

export default doctorpage

