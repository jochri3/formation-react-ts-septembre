import React from "react";
import ContactAPI from "../../../config/contact.api";
import IContact from "../../../interfaces/i-contact";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list.component";

const Index = () => {
  const [contacts, setContacts] = React.useState<IContact[]>([]);

  const fetchContacts = async () => {
    const resultat = await ContactAPI.get<IContact[]>("/");
    return resultat.data;
  };

  React.useEffect(() => {
    fetchContacts().then((data) => {
      setContacts(data);
    });
  }, []);

  const deleteContact = (id: string) => {
    const newState = contacts.filter((contact) => contact.id !== id);

    setContacts(newState);
  };
  return <ContactsList contacts={contacts} deleteContact={deleteContact} />;
};

export default Index;
