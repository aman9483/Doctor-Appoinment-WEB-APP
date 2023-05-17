import React from 'react'


const Footer = () => {
  return (
    <>


     <div className = "footer">

     <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Service</h5>
                <div className='list'>
                <li>Labs</li>
                <li>Doctors</li>
                <li>Statistics</li>
                <li>Grocery</li>
                </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3" id='div2'>
                <h5 className="text-uppercase">Future Scope</h5>
                <div className='list'>
                <li>Video Call</li>
                <li>Shopping</li>
                <li>Social List</li>
               
                </div>
               
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Subscribe</h5>

                <div className='subscribeInputField'>

                    <h3 id='h3'>Email</h3>

                    <input type='text' id='subscribeInput' />

                    <button id='subscribeBtn'>Subscribe</button>

                    <h2 id='h2'>Terms and Condition</h2>
                </div>

               
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

     </div>
      
    </>
  )
}

export default Footer
