// App.jsx

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <section className={css.section}>
      <h1 className={css.mainHeader}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.secondaryHeader}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </section>
  );
};
