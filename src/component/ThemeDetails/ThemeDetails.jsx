import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ThemeDetails.css";
let API = "http://localhost:8000/themes";

const ThemeDetails = (props) => {
  const [state, setState] = useState({}); // Задаём State, изначальное значение - {}
  const { id } = useParams(); // создаём переменную id из параметров URL (useParams())
  const [asd, setAsd] = useState(id); // Задаём Asd, изначальное значение id, полученное из useParams()
  // setAsd(id)

  async function getDetails(id) {
    // объявляем асинхронную функцию, которая ждёт, пока сработает
    let data = await props.rendItDamn(id); // props.rendItDamn, в параметр которого, мы передаём ID. полученный из Link в Catalogue
    setState(data); // После того как мы получили объект из rendItDamn, мы его помещаем в State через setState
    console.log(id); //
  }

  useEffect(() => {
    // задаём useEffect, чтобы он отслеживал изменения
    getDetails(id); // getDetails запускается с аргументом Asd, в котором лежит iD
  }, []);

  return (
    <div className="routeInfo">
      <h2>{state.title}</h2>
      <p>{state.desc}</p>
      <img src={state.img} alt="" />
    </div>
  );
};

export default ThemeDetails;
