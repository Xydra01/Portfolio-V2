import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Name is required!');
      return;
    }
    if (!formData.comment.trim()) {
      alert('Comment is required!');
      return;
    }
    if (formData.comment.trim().length > 200) {
      alert('Comment must be 200 characters or less!');
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <h2 className="mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <p>
            If you'd like to get in contact with me, please fill out this form
            with your contact information and a comment about why you wish to
            contact me.
          </p>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment (Max 200 characters)
          </label>
          <textarea
            className="form-control"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            maxLength={200}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-4">
          Submit
        </button>
      </form>
      <p>
        Alternatively if you'd like to reach out more directly you can contact
        me through the following:
      </p>
      <p>
        Email: <a href="#">businessingway@gmail.com</a>
      </p>
      <p>
        Github: <a href="#">Xydra01</a>
      </p>
      <p>
        Twitter: <a href="#">XydraVT</a>
      </p>
    </div>
  );
}
