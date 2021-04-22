import { useSelector } from 'react-redux';
import styles from './ContactsList.module.css';
import { getFilteredContacts } from '../../redux/phoneBook/selectors';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const filteredContacts = useSelector(state => getFilteredContacts(state));

  return (
    <ul className={styles.ul}>
      {filteredContacts.map(contact => (
        <ContactItem
          id={contact.id}
          name={contact.name}
          number={contact.number}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
