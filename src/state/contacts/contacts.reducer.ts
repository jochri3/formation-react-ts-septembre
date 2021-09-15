import ActionTypes from "./contacts.action-types";
import { Action } from "./contacts.action";
import IContact from "../../interfaces/i-contact";

export interface IContactsState {
  contacts: IContact[];
  contact: IContact | null;
  loading: boolean;
  error: string | null;
}

const initialState: IContactsState = {
  contacts: [],
  contact: null,
  loading: false,
  error: "",
};

 const contactsReducer = (
  state: IContactsState = initialState,
  action: Action
): IContactsState => {
  // GET /contacts
  if (action.type === ActionTypes.FETCH_CONTACTS_REQUEST) {
    return { ...state, loading: true, error: null, contacts: [] };
  }

  if (action.type === ActionTypes.FETCH_CONTACTS_SUCCESS) {
    return { ...state, loading: false, error: null, contacts: action.payload };
  }

  if (action.type === ActionTypes.FETCH_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: [], error: action.payload };
  }

  // GET /contacts:id

  if (action.type === ActionTypes.FETCH_CONTACT_REQUEST) {
    return { ...state, loading: true, error: null };
  }

  if (action.type === ActionTypes.FETCH_CONTACT_SUCCESS) {
    return { ...state, loading: false, error: null, contact: action.payload };
  }
  if (action.type === ActionTypes.FETCH_CONTACT_FAILURE) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
};


export default contactsReducer;