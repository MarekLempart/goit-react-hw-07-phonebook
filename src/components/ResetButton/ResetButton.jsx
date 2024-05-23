// ReserButton.jsx

import { useDispatch } from 'react-redux';
import { resetContacts } from '../../redux/contactsSlice';
import css from './ResetButton.module.css';

export const ResetButton = ({ onReset }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetContacts());
    onReset();
  };

  return (
    <button className={css.resetButton} type="button" onClick={handleReset}>
      Reset Contacts
    </button>
  );
};
