import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Contact from './components/ContactList/Contact';
import { useFetchContactsQuery } from './redux/contactSlice';

function App() {
  const { data: contacts } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);

  const filterContacts = contacts =>
    contacts
      ? [...contacts].filter(({ name }) => name.toLowerCase().includes(filter))
      : null;

  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2 className="title">Contacts</h2>
      <Filter />

      <ContactList>
        {filterContacts(contacts) &&
          filterContacts(contacts).map(contact => (
            <Contact key={uuidv4()} contact={contact} />
          ))}
      </ContactList>
    </Container>
  );
}

export default App;
