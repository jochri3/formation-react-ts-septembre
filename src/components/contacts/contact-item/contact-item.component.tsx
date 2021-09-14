import React from "react";
import IContact from "../../../interfaces/i-contact";
import { Link } from "react-router-dom";

interface ContactItemProps {
  contact: IContact;
  deleteContact: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = (props) => {
  return (
    <tr key={props.contact.id}>
      <td>{props.contact.last_name}</td>
      <td>{props.contact.first_name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.position}</td>
      <td>{props.contact.phone_number}</td>
      <td>
        <button>
          <Link to={`/contacts/${props.contact.id}`}>Voir</Link>
        </button>
        <button onClick={() => props.deleteContact(props.contact.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
