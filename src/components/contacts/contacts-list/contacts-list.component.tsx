import IContact from "../../../interfaces/i-contact";
import ContactItem from "../contact-item/contact-item.component";
import "./contacts-list.styles.scss";

interface ContactListProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactsList: React.FC<ContactListProps> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Poste</th>
          <th>Numéro de téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact, index) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={props.deleteContact}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;
