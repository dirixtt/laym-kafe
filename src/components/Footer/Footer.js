import React from 'react'
import './Footer.css'
import Logo from '../Header/Frame.png'
// import { FaBeer } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="con">
      <div className="footer">
        <div className="left">
          <img src={Logo} alt="" />
          <div className="left-text">
            <p>© 2001–2021 ООО «Лайм»<br />
              <br />
              <br />

              Все права защищены. «Лайм» является зарегистрированным товарным знаком Lime Holding SA.
              <br />
              <a href="#/"><span> Политика Конфиденциальности </span></a> </p>
          </div>
        </div>
        <div className="center">
          <div className="center-left">
            <p className="tit">О компании</p>
            <ul className="cl-text">
              <li>Доставка и оплат</li>




              <li>Вопрос-ответ</li>
              <li>Поставщикам</li>
              <li>Контакты</li>

              <li>Новости</li>
              <li>Политика</li>

            </ul>


          </div>
          <div className="center-right">
            <p className="tit">Покупателям</p>
            <ul className="cl-text">

              <li> Бонусная система</li>







              <li>Как вернуть</li>
              <li>Как заказать</li>
              <li>Программа лояльности</li>
              <li>Акции</li>
              <li>Шеф-лайм</li>
              <li></li>
            </ul>
          </div>

        </div>
        <div className="riight">
          <p>Круглосуточная поддержка</p>

          <h1> <i class="material-icons">phone</i>7756</h1>

          <button><i class="material-icons">store</i>Скачать в AppStore</button>

          <button> <i class="material-icons">store</i>Скачать в PlayMarket</button>
          <div className="iconss">

            <i class="material-icons">facebook</i>
            <i class="material-icons">audiotrack</i>
            <i class="material-icons">adb</i>
          </div>
        </div>
      </div>
    </div>

  )
}

