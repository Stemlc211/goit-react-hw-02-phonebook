import PropTypes from 'prop-types';
import './ContactItem.css';

export default function ContactItem({ contact, onDeleteContact }) {
  return (
    <li className="item">
      {contact.name}: {contact.number}
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
