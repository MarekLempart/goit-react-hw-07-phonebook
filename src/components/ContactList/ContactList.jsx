// ContactList.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
// import { deleteContact } from '../../redux/contactsSlice';
// import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = ({ onChanges }) => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const filteredContacts = contacts?.filter(contact =>
  //   contact?.name?.toLowerCase().includes(filter.toLowerCase())
  // );

  // const onDeleteContact = id => {
  //   dispatch(deleteContact(id));
  //   onChanges();
  // };

  // if (!filteredContacts?.length) {
  //   return <p className={css.text}>No contacts found.</p>;
  // }

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}

      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              className={css.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
