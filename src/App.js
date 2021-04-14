import "./App.css";
import Catalogue from "./components/Catalogue/Catalogue";
import AddTheme from "./components/AddTheme/AddTheme";
import Header from "./components/Header/Header";
// import FooterList from './components/FooterList/FooterList'
import AddFooter from "./components/AddFooter/AddFooter";
import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import ThemeDetails from "./components/ThemeDetails/ThemeDetails";

let API = "http://localhost:8000/themes";
// import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'

// npm install -g react-router-dom

const App = () => {
  const [themes, setThemes] = useState([]); // создаём STATE, в нём хранятся все темы в виде объектов, из которых будем брать
  useEffect(() => {
    // title, description, ID
    const fetchData = async () => {
      const result = await fetch(API);
      const some = await result.json();
      setThemes(some);
    };
    fetchData();
  }, []);

  async function DeleteTheme(id) {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    const result = await fetch(API);
    const some = await result.json();
    setThemes(some);
  }

  async function EditTheme(id, obj) {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    const result = await fetch(API);
    const some = await result.json();
    setThemes(some);
  }

  async function addTheme(obj) {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    const result = await fetch(API);
    const some = await result.json();
    setThemes(some);
    console.log(some);
  }

  return (
    <div>
      <Header />
      <AddTheme addTheme={addTheme} />
      <Catalogue themes={themes} DeleteTheme={DeleteTheme} />
      <ThemeDetails EditTheme={EditTheme} />
      <AddFooter />
    </div>
  );
};

export default App;
