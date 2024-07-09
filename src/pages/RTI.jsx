import React from 'react';
import Footer from '../components/Footer';
import '../App.css';

const RTI = () => {
  const data = [
    {
      id: 1,
      name: 'Jt.Director and H.O.O. ',
      secondName:"MSME DFO, Mumbai",
      designation: 'Appellate Authority',
      contact: '0712-2510046/ 2510352'
    },
    {
      id: 2,
      name: 'Parineeta Pandharam ',
      secondName:"Asstt. Director",
      designation: 'Central Public Information Officer(CPIO)',
      contact: '0712-2510046/ 2510352'
    },
    {
      id: 3,
      name: 'V. V. Khare',
      secondName:"Asstt. Director",
      designation: 'Assistant Public Information Officer(APIO)',
      designation: 'Assistant Director',
      contact: '0712-2510046/ 2510352'
    },
  ];
  return (
    <>
   <div className="" style={{width:"100%", textAlign: "left", marginBottom:"-120px"}}>
    <div className='info' >
  <h2 >Right To Information (RTI)</h2>
  <div className='info-1' style={{marginTop:"10px"}}>
    <p>Nodal Officers for obtaining information under RTI.</p>
    <p className='' style={{marginTop:"10px"}}>Under RTI Act, 2005 the following officers of this office are providing the information :-</p>
   
  </div>
  <table style={{ border: '1px solid black', borderCollapse: 'collapse' , marginTop:"30px", width:'70%'}}>
    <thead className='' style={{backgroundColor:"#e4e4e4", color:"black"}}>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sl</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Name of the Officer & Designation</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Designated RTI Officer</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Contact Number</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row.id} >
          <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{row.id}</td>
          <td style={{ border: '1px solid black',lineHeight:"1px", padding: '8px' , }}>
            <p className='' style={{fontWeight:"bold"}}>{row.name}</p>
            <br />
            <p>{row.secondName}</p>
            </td>
          
          <td style={{ border: '1px solid black', padding: '8px' }}>{row.designation}</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>{row.contact}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
 


      <Footer />
  
    </>
  )
}

export default RTI
