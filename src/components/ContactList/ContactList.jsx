import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/operations';
import {
  selectFilteredItems,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredItems);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts?.map(({ name, id, number }) => {
          return <ContactItem key={id} name={name} id={id} number={number} />;
        })}
        {isLoading && <Loader />}
      </ul>
    </>
  );
};
