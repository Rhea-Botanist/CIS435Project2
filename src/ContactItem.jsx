import React from 'react';

function ContactItem({ contact, onDelete }) {
    return (
        <div className="contact-item">
            <div className="contact-info">
                <h3>{contact.name}</h3>
                <p><strong>Email:</strong> {contact.email}</p>
                {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
            </div>
                <button className="delete-button" onClick={() => onDelete(contact.id)}>Delete</button>
            </div>
    );
}

export default ContactItem;