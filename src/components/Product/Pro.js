import React from 'react'
import "./Product.css"
// import 'boxicons'

// import React, { useState, useRef, useEffect } from "react";
// import Grill from "./grill.png"
// import Soup from "./soup.png"
// import Bread from "./bread.png"
// import Uzum from "./uzum.png"
// import Meat from "./meat.png"
// import Chicken from "./chicken.png"
// import Spagetti from "./spagetti.png"
// // import Hotfood from "./Hotfood";
// import { useState, react } from 'react'

export default function Product() {








  return (
    <div className="all">
      <div className="containerr">
        <div className="cont">
          <div className="toop">
            <p>
              <span>Главная   —</span>
              <span>Акционные товары   </span>
              <span>—   Рецепты</span>
            </p>
            <div className="retsept">
              <h1>Рецепты</h1>
              <h4>12 876 рецептов</h4>
            </div>

            <div className="tbottom">
              <div className="dropdown">
                <button>Категория  <i className="material-icons">keyboard_arrow_down</i></button>
                <ul className='ull'>
                  <li>Кексы <span>12</span> </li>
                  <li>Пироги <span>35</span> </li>
                  <li>Сладости <span>2</span></li>
                  <li>Круассаны <span>18</span></li>
                  <li>Печенье <span>11</span></li>
                  <li>Сдобы <span>8</span></li>
                  <li>Слойки <span>12</span></li>
                  




                </ul>
              </div>
              <div className="dropdown dd2">
                <button className='dd2'>Кухня  <i className="material-icons">keyboard_arrow_down</i></button>
                <ul className='ull'>
                <li>Кексы <span>12</span></li>
                <li>Пироги <span>35</span></li>
                </ul>
              </div>
              <div className="dropdown dd3">
                <button className='dd3'>Время приготовления  <i className="material-icons">keyboard_arrow_down</i></button>
                <ul className='ull'>
                <li>Кексы <span>12</span> </li>
                  <li>Пироги <span>35</span> </li>
                  <li>Сладости <span>2</span></li>
                  <li>Круассаны <span>18</span></li>
                  <li>Печенье <span>11</span></li>
                  <li>Сдобы <span>8</span></li>
                  <li>Слойки <span>12</span></li>
                  
                </ul>
              </div>
              <div className="dropdown ">
                <button className='dd4'>Продукты  <i className="material-icons">keyboard_arrow_down</i></button>
                <ul className='ull'>
                <li>Кексы <span>12</span></li>
                <li>Пироги <span>35</span></li>
                </ul>
              </div>
            </div>
          </div>


          </div >
          </div>





        </div>

        )

}