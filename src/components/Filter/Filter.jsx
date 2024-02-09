import { setFilter } from '../../redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { Input } from 'antd';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <h3 className={css.title}>Find contacts by name</h3>
      <Input onChange={handleOnChange} />
    </>
  );
};
