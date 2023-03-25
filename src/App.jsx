import { useEffect, useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import List from "./component/List";
import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/v1";
const APP_ID = "641e47fb967050f8b2ba4846";

function App() {
  const [contact, setContact] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/user?limit=10`, {
        headers: { "app-id": APP_ID },
      })
      .then(({ data }) => {
        setContact(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-danger text-center">
      <Header title={"Contact List"} />
      <List loading={loading} contacts={contact} />
      <Footer />
    </div>
  );
}

export default App;
