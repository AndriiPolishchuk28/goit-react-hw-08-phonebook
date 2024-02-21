import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { editContactThunk } from '../../redux/contacts/operations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: 999,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

export const Modal1 = ({
  openModal,
  handleClose,
  id,
  userNumber,
  userName,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(userName);
  const [number, setNumber] = useState(userNumber);

  useEffect(() => {
    if (openModal) {
      setName(userName);
      setNumber(userNumber);
    }
  }, [userName, userNumber, openModal]);

  const handleChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const values = {
      name,
      number,
    };
    dispatch(editContactThunk({ id, values }));
    handleClose();
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        sx={style}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          value={name}
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
        />
        <TextField
          value={number}
          id="outlined-basic"
          label="Number"
          variant="outlined"
          name="number"
          onChange={handleChange}
        />
        <Box>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="outlined" color="success">
            Change
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
