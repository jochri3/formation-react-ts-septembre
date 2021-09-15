import IContact from "../../interfaces/i-contact";
import ActionTypes from "./contacts.action-types";

// GET /contacts
export interface IFetchContactsRequest {
  type: ActionTypes.FETCH_CONTACTS_REQUEST;
}

export interface IFetchContactsSuccess {
  type: ActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: IContact[];
}

export interface IFetchContactsFailure {
  type: ActionTypes.FETCH_CONTACTS_FAILURE;
  payload: string;
}


export interface IFetchContactRequest {
  type: ActionTypes.FETCH_CONTACT_REQUEST;
}

export interface IFetchContactSuccess {
  type: ActionTypes.FETCH_CONTACT_SUCCESS;
  payload: IContact;
}

export interface IFetchContactFailure {
  type: ActionTypes.FETCH_CONTACT_FAILURE;
  payload: string;
}

export type Action =
  | IFetchContactsRequest
  | IFetchContactsSuccess
  | IFetchContactsFailure
   | IFetchContactRequest
  | IFetchContactSuccess
  | IFetchContactFailure;
