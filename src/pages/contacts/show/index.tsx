import { RouteComponentProps } from "react-router-dom";
import ContactAPI from "../../../config/contact.api";
import IContact from "../../../interfaces/i-contact";
import { useEffect, useState } from "react";

type ContactIdParam = { id: string };

type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;

const ContactShow: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  const [contact, setContact] = useState<IContact | null>(null);
  async function fetchContactById(id: string) {
    const { data } = await ContactAPI.get<IContact>(`/${id}`).then(
      (res) => res
    );
    return data;
  }
  useEffect(() => {
    (async () => {
      const contact = await fetchContactById(match.params.id).then(
        (data) => data
      );
      setContact(contact);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Détails de contact</h1>
      {contact && (
        <>
          <h2>
            {contact.first_name} {contact.last_name}
          </h2>
          <h3>{contact.position}</h3>
          <p>
            Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            Téléphone :{" "}
            <a href={`tel:${contact.phone_number}`}>{contact.phone_number}</a>
          </p>
          <p>Adresse : {contact.work_address}</p>
        </>
      )}
    </>
  );
};

export default ContactShow;
