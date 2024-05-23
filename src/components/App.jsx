// App.jsx

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetContacts } from '../redux/contactsSlice';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ResetButton } from './ResetButton/ResetButton';

export const App = () => {
  const [changesMade, setChangesMade] = useState(false);

  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetContacts());
    setChangesMade(false);
  };

  const handleChanges = () => {
    setChangesMade(true);
  };

  return (
    <section className={css.section}>
      <h1 className={css.mainHeader}>Phonebook</h1>
      <ContactForm onChanges={handleChanges} />
      <h2 className={css.secondaryHeader}>Contacts</h2>
      <Filter />
      <ContactList onChanges={handleChanges} />
      {changesMade && <ResetButton onReset={handleReset} />}
      <ToastContainer position="top-center" />
    </section>
  );
};
