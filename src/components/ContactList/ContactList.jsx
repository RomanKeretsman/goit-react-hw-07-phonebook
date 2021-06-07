import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ContactItem from '../ContactItem';
import slideTransition from './slide.module.scss';
import styles from './ContactList.module.scss';

// Принимает все контакты и пробрасывает дальше метод для удаления контакта
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={500}
          classNames={slideTransition}
        >
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
