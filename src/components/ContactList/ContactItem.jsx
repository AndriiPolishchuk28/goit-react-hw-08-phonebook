import { Button } from 'antd';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';
import { Modal1 } from 'components/Modal/Modal';
import { useState } from 'react';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <li className={css.list_item} key={id}>
      <span className={css.name_text}>{name} </span>
      <span>{number}</span>
      <Button onClick={() => handleOpen(id)} type="primary">
        Change
      </Button>
      <Button
        className={css.btn}
        onClick={() => dispatch(deleteContactThunk(id))}
        type="primary"
        danger
      >
        Delete
      </Button>
      <Modal1
        openModal={open}
        userName={name}
        id={id}
        userNumber={number}
        handleClose={handleClose}
      />
    </li>
  );
};
