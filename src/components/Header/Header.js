import './Header.css'
import './Link'
import Logo from './Frame.png'
// import React from 'react'


import React, { useState, useRef, useEffect } from "react";
import Burger from './Burger';
// import { NavLink } from 'react-router-dom';


export default function Dropdown(props) {
 
  const { countCartItems } = props
  const container = useRef();
  // const { countCartItems } = props
  const [dropdownState, setDropdownState] = useState({ open: false });

  const handleDropdownClick = () =>
    setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [openProfil, setOpenProfile] = useState(false)


  return (


    <div className='ddd'>
      <div className="top">
        <ul className="left">

          <li>  <i className="material-icons">call</i>7756</li>
          <li>  <i className="material-icons">location_on</i>
            <div className='div'>
              <button type="button" onClick={handleDropdownClick} >Магазины </button>
              {dropdownState.open && (
                <div >
                  <ul className='ul'>
                    <li><a href="https://goo.gl/maps/HmDw8euKnriUtMK57">Магазин 1</a></li>
                    <li><a href="https://goo.gl/maps/BGCUow54kzpr68gD6">Магазин 2</a></li>
                    <li><a href="https://goo.gl/maps/e65N743WJLSwy9hV8">Магазин 3</a></li>
                    <li><a href="https://goo.gl/maps/rYGx8or3SLHi7ixD8">Магазин 4</a></li>

                  </ul>
                </div>
              )}

            </div>
            <i style={{ color: "white" }} className="material-icons">keyboard_arrow_down</i></li>
          <li>  <i className="material-icons">local_shipping</i>Зона доставки</li>
          <li>  <i className="material-icons">access_time</i>17:00 - 17:45<i style={{ color: "white" }} className="material-icons">keyboard_arrow_down</i></li>
        </ul>
        <ul className="right">
          <li>Шеф-лайм</li>

          <a href="/Vakansii"> <li>Вакансии</li></a>
          <li>Вопрос-ответ</li>
          <li>Партнерам</li>
          <li>Бонусная программа</li>
        </ul>
      </div>
      <div className="img">
        <img src={Logo} alt="logo " />
      </div>
      <div className="bottom">

        <div className="lf">

          <div className="btnn">
            <i className="material-icons">zoom_in</i>

            <p>Каталог</p>
          </div>
          <div style={{ width: '341px', height: '50px' }} className="input">
            <i className="material-icons">search</i>
            <input style={{ border: 'none', padding: "0 15px" }} type="text" placeholder='Купить молоко' />


          </div>
        </div>
        <ul className="rg">
          <div className="right-comp">
            {/* <div className="burger">
            <button></button>

            <ul className='ull spani'>
              <li><p>Скидки до </p> <span>12%</span></li>
              <li><p>Скидки до </p> <span>35%</span></li>
              <li><p>Скидки до </p>  <span>15%</span></li>
              <li><p>Скидки до </p>    <span>40%</span></li>
            </ul>
          </div> */}
            <div className="side">
              <button onClick={() => setOpenProfile
                ((prev) => !prev)}><i className="material-icons ">dehaze </i></button>
              {openProfil && <Burger />}
            </div>

            <div className=" aks">
              <button className='aks-btn'><i className="material-icons skitka">discount </i><p>Скидки</p><p> <i className="material-icons">keyboard_arrow_down</i> </p></button>

              <ul className='ull spani'>
                <li><p>Скидки до </p> <span>12%</span></li>
                <li><p>Скидки до </p> <span>35%</span></li>
                <li><p>Скидки до </p>  <span>15%</span></li>
                <li><p>Скидки до </p>    <span>40%</span></li>
              </ul>
            </div>
          </div>

          <ul className="left-comp">
            <li className='bbottom'><i className="material-icons">person </i><p>Кабинет</p></li>
            <li className='bbottom'><i className="material-icons">favorite</i><p>Избранное</p> </li>
            <li className='bbottom'>
            <a className='bascet-btn' href="#/cart">
              <button> <i class="material-icons">shopping_cart</i></button>  {' '}
              {countCartItems ? (
                <span> {countCartItems}</span>
              ) : (
                ''
              )}
            </a>{'   '}  <p>Корзин</p> </li>
          </ul>



        </ul>
      </div>

    </div >



  )
}
