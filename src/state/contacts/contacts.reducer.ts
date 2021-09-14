import ActionTypes from "./contacts.action-types";
import { Action } from "./contacts.action";
import IContact from "../../interfaces/i-contact";

export interface IContactsState {
  contacts: IContact[];
  loading: boolean;
  error: string | null;
}

const initiaState: IContactsState = {
  contacts: [],
  loading: false,
  error: "",
};

const contactsReducer = (
  state: IContactsState = initiaState,
  action: Action
): IContactsState => {
  if (action.type === ActionTypes.FETCH_CONTACTS_REQUEST) {
    return { ...state, loading: true, contacts: [] };
  } else if (action.type === ActionTypes.FETCH_CONTACTS_SUCCESS) {
    return { ...state, loading: false, contacts: action.payload, error: "" };
  } else if (action.type === ActionTypes.FETCH_CONTACTS_FAILURE) {
    return { ...state, loading: false, contacts: [], error: action.payload };
  }
  return state;
};

export default contactsReducer;
