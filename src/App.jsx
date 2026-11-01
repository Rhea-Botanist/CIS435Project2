import React, { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import SearchBar from './SearchBar';

function App() {
    const [contacts, setContacts] = useState([]);
    const [filterText, setFilterText] = useState('');

    const handleAddContact = (newContact) => {
        setContacts((prev) => [...prev, { ...newContact, id: Date.now().toString() }]);
    };

    const handleDeleteContact = (id) => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
    };

    const filterContacts = contacts.filter((c) => 
        c.name.toLowerCase().includes(filterText.toLowerCase()) || c.email.toLowerCase().includes(filterText.toLowerCase())
    );

    return(
        <div className="app-container">
            <div className="Title">     
            <img src="public/91bh_1alo_210629.jpg" alt="Palm Tree on the left side of banner" className="left" /> 
            <div className="TitleText">
                <h1> Travel to Thailand</h1>
                <p> For friendly people and warm weather</p>
            </div>
            <img src="public/91bh_1alo_210629.jpg" alt="Palm Tree on the right side of banner" className="right"/>
        </div>
 
        <main className="main-content">
            <ContactForm onAddContact={handleAddContact} />
            <SearchBar filterText={filterText} onFilterChange={setFilterText} />
            <ContactList contacts={filterContacts} onDeleteContact={handleDeleteContact} filterText={filterText} hasContacts={contacts.length > 0} />
        </main>
    </div>
);
}

export default App;