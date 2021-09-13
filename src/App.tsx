import { Switch, BrowserRouter, Route } from "react-router-dom";
import IndexContact from "./pages/contacts/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/contacts" component={IndexContact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
