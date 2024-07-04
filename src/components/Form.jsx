// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "../form.css"
import Footer from './Footer';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    url: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
  <>
    <div className="comment-section" style={{backgroundColor:""}}>
      <h1 className="comment-reply-title">Write your comment!</h1>
      <form id="commentform" className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-form-name">
          <input
            id="name"
            placeholder="Name *"
            name="name"
            type="text"
            value={formData.name}
            pattern="^[^0-9]+$"
            size="30"
            maxLength="245"
            required
            onChange={handleChange}
          />
          <label htmlFor="name" data-help="¿Are you 11 from Stranger Things?">Name</label>
        </div>
        <div className="comment-form-surname">
          <input
            id="surname"
            placeholder="Surname *"
            name="surname"
            type="text"
            value={formData.surname}
            size="30"
            maxLength="245"
            required
            onChange={handleChange}
          />
          <label htmlFor="surname" data-help="A girl has no name- Arya Stark">Surname</label>
        </div>
        <div className="comment-form-email">
          <input
            id="email"
            placeholder="Email *"
            name="email"
            type="email"
            value={formData.email}
            size="30"
            maxLength="100"
            aria-describedby="email-notes"
            required
            onChange={handleChange}
          />
          <label htmlFor="email" data-help="Format email@email.com">Email</label>
        </div>
        <div className="comment-form-url">
          <input
            id="url"
            placeholder="Website"
            name="url"
            type="url"
            value={formData.url}
            size="30"
            maxLength="200"
            onChange={handleChange}
          />
          <label htmlFor="url" data-help="Should start with http:// o https://">Website</label>
        </div>
        <div className="comment-form-comment">
          <textarea
            placeholder="Comment *"
            id="comment"
            name="comment"
            cols="45"
            rows="8"
            maxLength="65525"
            required
            value={formData.comment}
            onChange={handleChange}
          />
          <label htmlFor="comment" data-help="Escribe algo! Lo primero que se te ocurra">Comment</label>
        </div>
        <div className="form-submit">
          <input
            name="submit"
            type="submit"
            id="submit"
            className="submit"
            value="Post Comment"
          />
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Form;
