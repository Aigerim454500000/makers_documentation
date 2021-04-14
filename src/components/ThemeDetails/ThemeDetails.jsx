import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ThemeDetails.css'
let API = 'http://localhost:8000/themes';

const ThemeDetails = (props) => {
  const [state, setState] = useState({});
  const { id } = useParams();

  async function getDetails(id) {
    let data = await props.rendItDamn(id);
    await setState(data);
    console.log(id);
  }

  useEffect(() => {
    getDetails(id);
  }, [id]);

//   let [titleToChange, setTitleToChange] = useState('')
//   let [descToChange, setDescToChange] = useState('')
//   let [imgToChange, setImgToChange] = useState('')

//   const handleInputTitleToChange = (event) => {
//     setTitleToChange(event.target.value)
//   }

//   const handleInputDescToChange = (event) => {
//     setDescToChange(event.target.value)
//   }

//   const handleInputImgToChange = (event) => {
//     setImgToChange(event.target.value)
//   }

//   const sendThemeToChange = (idToChange) => {
//       let newThemeToChange = {
//         titleToChange,
//         descToChange,
//         imgToChange,
//         id: idToChange
//       }
//       props.EditTheme(idToChange, newThemeToChange)
//     }

  return (
    <div className="routeInfo">
      <h2>{state.title}</h2>
      <p>{state.desc}</p>
      <img src={state.img} alt="" />
      {/* <div className="addThemeContainer">
          <div className="addThemeContainer__inputs">
            <div>
              <input
                onChange={handleInputTitleToChange}
                className="titleInpToChange"
                placeholder="Введите название темы"
              ></input>
              <input
                onChange={handleInputDescToChange}
                className="imgInpToChange"
                placeholder="Введите описание"
              ></input>
              <input
                onChange={handleInputImgToChange}
                className="descInpToChange"
                placeholder="Введите ссылку на IMG"
              ></input>
            </div>
            <button onClick={() => sendThemeToChange(id)}>Добавить</button>
          </div>
          <div className="addThemeContainer__button"></div>
        </div> */}
    </div>
  );
};

export default ThemeDetails;