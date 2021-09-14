import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const contacts = useSelector<any>((state) => state.contacts);
  console.log(contacts);
  return (
    <h1>
      Welcome Home, see the contacts list <Link to="/contacts">click here</Link>
    </h1>
  );
};

export default Home;
