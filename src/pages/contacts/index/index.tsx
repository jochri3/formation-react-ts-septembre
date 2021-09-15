import React from "react";
import ContactsList from "../../../components/contacts/contacts-list/contacts-list.component";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../../state/contacts/contacts.action-creator";

const Index = () => {
  const contacts: any = useSelector<any>((state) => state.contacts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchContacts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteContact = (id: string) => {
    return;
  };
  return (
    <ContactsList contacts={contacts.contacts} deleteContact={deleteContact} />
  );
};

export default Index;
