import './Header.css'
import React, { useState } from 'react';

const Header = () => { 
    return (
           <div className="container">
            <div className="navbar">
                <div className="navbar__left">
                    <img src="./img/logoleft.svg/" alt=''/>
                    <span>Documentation</span>
                </div>
                <div className="navbar__right">
                    <div className="right__menu">
                        <a href="" className="menu__items">Главная</a>
                        <a href="./documentation.html" className="menu__items">Документация</a>
                        <a href="" className="menu__items">Добавить</a>
                    </div>
                    <input type="text" className="navbar__searchbar" placeholder="Поиск" />
                    <a href="" className="right__menu-github">Github</a>
                </div>
            </div>
            </div>
    );
};

export default Header;