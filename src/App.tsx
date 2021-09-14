import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/layout";
import IndexContact from "./pages/contacts/index";
import ContactShow from "./pages/contacts/show";
import Home from "./pages/home/";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacts" component={IndexContact} />
          <Route exact path="/contacts/:id" component={ContactShow} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
