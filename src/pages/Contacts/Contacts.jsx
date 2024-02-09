import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
import css from './Contacts.module.css';

export const Contacts = () => {
  return (
    <div className={css.contact_wrap}>
      <ContactForm />
      <div className={css.filter_wrap}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
