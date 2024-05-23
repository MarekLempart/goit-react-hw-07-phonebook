// ContactList.jsx

import { useEffect } from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
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

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}

      <ul className={css.list}>
        {filteredContacts.map(({ id, name, phone }) => (
          <li className={css.item} key={id}>
            <GrContactInfo size={20} />
            <p className={css.text}>
              {name}: {phone}
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
