import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
