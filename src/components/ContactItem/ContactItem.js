import styles from '../ContactsList/ContactsList.module.css';
import ButtonDelete from '../MyButton/ButtonDelete';
import { removeContact } from '../../redux/phoneBook/operations';
import { useDispatch } from 'react-redux';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact(id));

  return (
    <li className={styles.li} key={id}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <ButtonDelete id={id} onClick={() => handleDelete(id)} />
    </li>
  );
};

export default ContactItem;
