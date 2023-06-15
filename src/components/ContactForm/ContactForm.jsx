import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Lable, Btn, Input } from './ContactForm.styled';
import { useCreateContactMutation } from 'redux/contactsSlice';

const nameInputId = nanoid();
const numberInputId = nanoid();

export function ContactForm({ contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContactNmame] = useCreateContactMutation();
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isAdded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      return alert(`${name} is already in contacts.`);
    }
    createContactNmame({ name, number });

    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Lable htmlFor={nameInputId}>Name</Lable>
      <Input
        value={name}
        type="text"
        name="name"
        pattern="[\p{L} '-]+"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        id={nameInputId}
      />
      <Lable htmlFor={numberInputId}>Number</Lable>
      <Input
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        id={numberInputId}
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}
