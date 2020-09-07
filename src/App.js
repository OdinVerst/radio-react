import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import { Table } from "./components/table/Table";
import { URL_GET } from "./const";

function App() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    fetch(URL_GET)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {loading ? <Preloader /> : <Table data={formData} />}
      </div>
    </div>
  );
}

export default App;
