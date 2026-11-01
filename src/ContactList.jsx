import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDeleteContact, filterText, hasContacts }) {
    if(!hasContacts) {
        return <p className="info-message">No contacts available. Please add a contact.</p>;
    }

    if(contacts.length === 0) {
        return <p className="info-message">No contacts match your search for "{filterText}".</p>;
    }

return (
    <div className="contact-list">
        {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} onDelete={onDeleteContact} />
        ))}
    </div>
);
}

export default ContactList;