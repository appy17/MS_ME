import React from 'react';
import Footer from './Footer';
import '../form.css';

const GrievanceForm = () => {
  const handleFormSubmit = () => {
    // Replace with the Google Form URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe3y4d3SK35ANNXJ7Cppiv9SYAwNL1DbqUGN_Ugrn_YS1_jpw/viewform?usp=sf_link';
    window.open(googleFormUrl, '_blank'); // Opens the form in a new tab
  };

  return (
   <>
   <div className="form-container">
      <h1 className='form-heading'>Welcome to Our Registration Page</h1>
      <p className='form-request'>Please click the button below to Register:</p>
      <button className="form-btn" onClick={handleFormSubmit}>Submit Registration</button>
    </div>
   <Footer/>
   </>
  );
};

export default GrievanceForm;
