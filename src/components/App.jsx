import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

import { useDispatch, useSelector } from 'react-redux';
import { contactsSlice } from '../redux/slice';
import { filterSlice } from '../redux/filter';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const addContact = ({ name, number }) => {
    const includeName = contacts.find(user => user.name === name);
    if (includeName) {
      alert(`${name} is already in contacs`);
      return;
    }
    dispatch(contactsSlice.actions.addContact({ name, number }));
  };

  const deleteContact = id => {
    dispatch(contactsSlice.actions.deleteContact(id));
    dispatch(filterSlice.actions.setFilter(''));
  };

  const changeInput = e => {
    const { value } = e.target;
    dispatch(filterSlice.actions.setFilter(value));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter name={'filter'} changeInput={changeInput} />
        <ContactList contacts={filterContacts} deleteContact={deleteContact} />
      </Section>
    </>
  );
};
