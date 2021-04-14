import React, { useState } from 'react';
import './AddTheme.css'
let API = 'http://localhost:8000/themes';


const AddTheme = (props) => {

  let [title, setTitle] = useState('')
  let [desc, setDesc] = useState('')
  let [img, setImg] = useState('')

  const handleInputTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleInputDesc = (event) => {
    setDesc(event.target.value)
  }

  const handleInputImg = (event) => {
    setImg(event.target.value)
  }
  
  const sendTheme = () => {
    let newTheme = {
      title,
      desc,
      img,
      id: Date.now()
    }
    props.addTheme(newTheme)
    // console.log(newTheme);
  }

    return (
    <div className="addThemeContainer">
        <div className="addThemeContainer__inputs">
            <div>
                <input onChange={handleInputTitle} className="titleInp" placeholder="Введите название темы"></input>
                <input onChange={handleInputDesc} className="imgInp" placeholder="Введите описание"></input>
                <input onChange={handleInputImg} className="descInp" placeholder="Введите ссылку на IMG"></input>
            </div>
            <button onClick={sendTheme}>Добавить</button>
        </div>
        <div className="addThemeContainer__button">
        </div>
    </div>
    )
}

export default AddTheme;