import { useEffect } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import axios from "axios";
import { baseURL, config } from "./services";
// import Form from "./components/Form";

function App() {
  // one state for table
  const [errands, setErrands] = useState([]);

  // one state for toggle
  // get data from api when toggle changes
  useEffect(() => {
    const getTable = async () => {
      const resp = await axios.get(baseURL, config);
      setErrands(resp.data.records);
    };
    getTable();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        {errands.map((table) => {
          <Link to={`/table/${table.id}`}>{table.fields.name}</Link>;
        })}
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      <Route path="/table/:id">
        <h2>This is a specific errand.</h2>
      </Route>
    </div>
  );
}

export default App;
