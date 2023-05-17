import React from 'react'
import NavBar from '../NavBar'
import '../DoctorPage/doctor.css'
import Footer from '../Footer'


const labPage = () => {
    return (
        <div>
         <NavBar/>
    
         <div  className='wrap'>
    
            <div className='doctorPic'>
    

    
            </div>
    
            <div className='heading'>
    
                <h1 id='docHead2'>Labs</h1>
                <p id='docLab'>You can search here about the labs available for tests</p>
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

export default labPage
