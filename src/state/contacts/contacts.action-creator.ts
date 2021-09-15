import ActionTypes from "./contacts.action-types";
import IContact from "../../interfaces/i-contact";
import { Dispatch } from "redux";
import ContactsAPI from "../../config/contact.api";
import { Action } from "./contacts.action";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.FETCH_CONTACTS_REQUEST });
    try {
      const contacts = await ContactsAPI.get<IContact[]>("/");
      dispatch({
        type: ActionTypes.FETCH_CONTACTS_SUCCESS,
        payload: contacts.data,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_CONTACTS_FAILURE, payload: "Erreur" });
    }
  };
};

  


