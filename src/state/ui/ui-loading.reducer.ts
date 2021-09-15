import ActionTypes from "../contacts/contacts.action-types";
import {IFetchContactsRequest,IFetchContactRequest} from "../contacts/contacts.action";

type LoadingState={[key in ActionTypes]?:boolean};

type Actions = IFetchContactsRequest | IFetchContactRequest;

const initialState:LoadingState = {
    fetch_contact:false,
    fetch_contacts:false
}


const uiLoadingReducer=(state:LoadingState=initialState,action:Actions):LoadingState=>{
    {
        const matches=/(.*)_(request|succes|failure)/.exec(action.type);
        if(!matches) return state;
        const [,requestName,requestStatus]=matches;
        return {...state,[requestName]:requestStatus==="request"}
    }
}

export default uiLoadingReducer;