import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/slice';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            {name}:{number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
            value="delete"
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
