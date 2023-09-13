import React from 'react'
import './payment.css'

const Payment = () => {
  return (
    <>
     <div className="container mt-4 mb-4">
  <span> <strong> Registration fees can be paid via:</strong></span>
    <ul className='mt-2'><li><p>RTGS/NEFT</p></li>
      <li><p>At Par Cheque, Demand DraftDemand draft</p></li>
      <li><p>Paytm</p></li></ul>
    <p style={{fontSize:16}}>The delegate fee includes conference proceedings, registration kit and working lunch. Delegate fee can be wired transferred / sent by demand draft drawn in favor of <b>Consortium e-Learning Network Pvt. Ltd.</b></p>
   <div className="bank mt-2 mb-2">
   <p>Bank Name: HDFC</p>
   <p>Bank Location: Sector-62, NOIDA,</p>
   <p> U.P. India</p>
   <p> A/C no.: 03942000001153</p>
   <p> IFSC Code: HDFC0000394</p>
   <p> Swift Code: HDFCINBBXXX</p>
   <p> Registration fee once paid will not be refunded.</p>
   <p>You can also pay the via Paytm:</p>
   <p> Paytm Number: <strong>9810367262</strong></p>
   </div>
</div>

  
    
    
    
    
    </>
  )
}

export default Payment