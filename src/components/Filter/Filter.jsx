import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter';

export function Filter() {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.name}>
      Find contacts by name
      <input className={css.input} type="text" onChange={handleChange} />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
