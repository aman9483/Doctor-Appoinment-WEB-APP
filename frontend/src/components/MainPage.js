import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const MainPage = () => {
  return (
    <>

   
  
    <div className='inputData'>


      <input type='text'id='inp' placeholder='Search about Symptoms'/>

      <button id='button'>Search</button>
    </div>

   

    <div className='cards'>

    <Link to='/doctors'>

     <Card style={{ width: '18rem' }} id='card1'>
      <Card.Img variant="top" src="https://img.freepik.com/free-psd/3d-cartoon-men-illustration_1150-59052.jpg?w=996&t=st=1681724561~exp=1681725161~hmac=e3ad6293df9e46f15db57f35609900f8a294365ed1a565970f5595925b608559" id='card'/> 
      <Card.Body>
        <Card.Title id='doc'>Doctors</Card.Title>
       
      
      </Card.Body>
    </Card>

    </Link>

    
    <Link to='/labs'>


    <Card style={{ width: '18rem' }}id='card1'>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometic-doctors-doing-research-lab-patient-bed-receive-treatment-cartoon-character-medicine-concept-flat-illustration_1150-39579.jpg?w=996&t=st=1681724721~exp=1681725321~hmac=c35c9493990a02bbf036d1417d46d352d0fc04c9fd3fa0436e8122d5511b2e5f" id='card' />
      <Card.Body>
        <Card.Title>Labs</Card.Title>
       
 
      </Card.Body>
    </Card>

    </Link>

    <Card style={{ width: '18rem' }}id='card1'>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometric-flowchart-with-pharmacy-interior-pharmacists-customers-3d-illustration_1284-28925.jpg?w=996&t=st=1681725260~exp=1681725860~hmac=a6002645c1c981c1dc12a911563483fbac974fbe89571bc0ae85f08c07142717" id='card' />
      <Card.Body>
        <Card.Title>Groceries</Card.Title>
       
      </Card.Body>
    </Card>
    </div>

    <h1 id='h1'>Community Guides</h1>


    <div className='card2'>

     
    <Card style={{ width: '18rem' }} id='card1'>
      <Card.Img variant="top" src="https://img.freepik.com/free-psd/3d-cartoon-men-illustration_1150-59052.jpg?w=996&t=st=1681724561~exp=1681725161~hmac=e3ad6293df9e46f15db57f35609900f8a294365ed1a565970f5595925b608559" id='card'/>
      <Card.Body>
        <Card.Title>Doctors</Card.Title>
       
      
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}id='card1'>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometic-doctors-doing-research-lab-patient-bed-receive-treatment-cartoon-character-medicine-concept-flat-illustration_1150-39579.jpg?w=996&t=st=1681724721~exp=1681725321~hmac=c35c9493990a02bbf036d1417d46d352d0fc04c9fd3fa0436e8122d5511b2e5f" id='card' />
      <Card.Body>
        <Card.Title>Labs</Card.Title>
       
 
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}id='card1'>
      <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometric-flowchart-with-pharmacy-interior-pharmacists-customers-3d-illustration_1284-28925.jpg?w=996&t=st=1681725260~exp=1681725860~hmac=a6002645c1c981c1dc12a911563483fbac974fbe89571bc0ae85f08c07142717" id='card' />
      <Card.Body>
        <Card.Title>Groceries</Card.Title>
       
      </Card.Body>
    </Card>
  


    </div>

    <div className='card3'>

     
<Card style={{ width: '18rem' }} id='card1'>
  <Card.Img variant="top" src="https://img.freepik.com/free-psd/3d-cartoon-men-illustration_1150-59052.jpg?w=996&t=st=1681724561~exp=1681725161~hmac=e3ad6293df9e46f15db57f35609900f8a294365ed1a565970f5595925b608559" id='card'/>
  <Card.Body>
    <Card.Title>Doctors</Card.Title>
   
  
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}id='card1'>
  <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometic-doctors-doing-research-lab-patient-bed-receive-treatment-cartoon-character-medicine-concept-flat-illustration_1150-39579.jpg?w=996&t=st=1681724721~exp=1681725321~hmac=c35c9493990a02bbf036d1417d46d352d0fc04c9fd3fa0436e8122d5511b2e5f" id='card' />
  <Card.Body>
    <Card.Title>Labs</Card.Title>
   

  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}id='card1'>
  <Card.Img variant="top" src="https://img.freepik.com/free-vector/isometric-flowchart-with-pharmacy-interior-pharmacists-customers-3d-illustration_1284-28925.jpg?w=996&t=st=1681725260~exp=1681725860~hmac=a6002645c1c981c1dc12a911563483fbac974fbe89571bc0ae85f08c07142717" id='card' />
  <Card.Body>
    <Card.Title>Groceries</Card.Title>
   
  </Card.Body>
</Card>


</div>




  
  

     
        
    </>
  )
}




export default MainPage


