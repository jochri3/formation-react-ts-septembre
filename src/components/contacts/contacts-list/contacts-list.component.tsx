import IContact from "../../../interfaces/i-contact";

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
          <tr key={contact._id}>
            <td>{contact.last_name}</td>
            <td>{contact.first_name}</td>
            <td>{contact.email}</td>
            <td>{contact.position}</td>
            <td>{contact.phone_number}</td>
            <td>
              <button onClick={() => props.deleteContact(contact._id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactsList;