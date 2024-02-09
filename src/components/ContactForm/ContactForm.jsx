import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';
import { Input, Button } from 'antd';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.number().min(6).required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    addName(name, number);
    resetForm();
  };

  const addName = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const existContact = contacts.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (!existContact) {
      dispatch(addContactThunk(newContact));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <div className={css.wrapper}>
        <Form className={css.form}>
          <label className={css.label_text} htmlFor="name">
            Name
          </label>
          <Field as={Input} id="name" type="text" name="name" required />
          <label className={css.label_text} htmlFor="number">
            Number
          </label>
          <Field as={Input} id="number" type="tel" name="number" required />
          <Button className={css.btn} type="primary" htmlType="submit">
            Add contact
          </Button>
        </Form>
      </div>
    </Formik>
  );
};
