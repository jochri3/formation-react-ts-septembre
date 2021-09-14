import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import IndexContact from "./pages/contacts/index";
import ContactShow from "./pages/contacts/show";
import Home from "./pages/home/";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={IndexContact} />
        <Route exact path="/contacts/:id" component={ContactShow} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
