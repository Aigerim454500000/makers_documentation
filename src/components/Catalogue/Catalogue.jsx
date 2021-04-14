import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ThemeDetails from '../ThemeDetails/ThemeDetails';
import './Catalogue.css'
let API = 'http://localhost:8000/themes';

async function rendItDamn(id){
  const result = await fetch(`${API}/${id}`)
  const some = await result.json()
  console.log(some);
  return some;
}

const Catalogue = (props) => {
    return (
      <Router>
        <div className="catalogue">
          <span>Список тем</span>
          <div className="catalogue__items-container">
            {props.themes.map((item) => {
              return (
                <div className="items-container__items">
                  <Link to={`/themes/${item.id}`}>{item.title}</Link>
                  <div className="items-container__items__buttons">
                    <button className="btn btn-dark" onClick={() => props.DeleteTheme(item.id)}>
                      Delete theme
                    </button>
                  </div>
                </div>
              );
              
            })}
          </div>
              <Switch>
                <Route path="/themes/:id">
                  <ThemeDetails rendItDamn={rendItDamn}/>
                </Route>
              </Switch>
        </div>
      </Router>
    );
};

export default Catalogue;