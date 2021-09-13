import React from "react";
import axios from "axios";
import IContact from "../../../interfaces/i-contact";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list.component";

const Index = () => {
  const [contacts, setContacts] = React.useState<IContact[]>([]);

  const fetchContacts = async () => {
    const resultat = await axios.get<IContact[]>(
      "http://localhost:3333/contacts"
    );
    return resultat.data;
  };

  React.useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, []);

  const deleteContact = (id: string) => {
    const newState = contacts.filter((contact) => contact._id !== id);

    setContacts(newState);
  };
  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default Index;
