
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className='wrapper'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm />
        <h2 className='title'>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
  )
}


