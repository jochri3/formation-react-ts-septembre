import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: () => ["Manger", "Aller à l'école", "Apprendre react"],
  contacts: () => ["Jean-Paul", "Lydie"],
});

export default rootReducer;
