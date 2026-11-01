import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) {
            setError('Name and email are required.');
            return;
        }
        onAddContact({ name: name.trim(), email: email.trim(), phone: phone.trim()});
        setName('');
        setEmail('');
        setPhone('');
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" value={email}onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone (optional)"/>
            </div>

            <button type="submit">Add Contact</button>
        </form>
    );
}

export default ContactForm;
