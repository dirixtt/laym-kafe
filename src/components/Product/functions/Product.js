import React from 'react'
// import Pro from '../Pro'
// import data from './data-2'
// import { useState } from 'react'

// import Soup from './soup.png'
export default function Products(props) {

  // const [people, setPeople] = useState(data)
  const { onAdd, product } = props


  // const [people, setPeople] = useState(data-2)
  return (
    <>
      
      
        <div className=" d-flex-5 " >
          {/* <Pro></Pro> */}






          <div className='card-box' >

            <div className="img-h">
              <div className="hove">
                <span>Смотреть рецепт</span>
                <i class="material-icons">arrow_forward</i>
              </div>
              <img className='image' src={product.image} alt="" />

            </div>
            <h3 className='product-title'>{product.name}</h3>
            <p className='product-price'>Цена: <span>{product.price}</span></p>
            <div className="small-comp ">
              <p className='time'><i className="material-icons">access_time</i>{product.time}</p>
              <div className='ratein '>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="rate">{product.rate}</i>
              </div>
            </div>
            <div className="card-bottom">
              <img className='small-img' src={product.smallImg} alt="" />
              <img className='small-img' src={product.smallImg2} alt="" />
              <img className='small-img' src={product.smallImg3} alt="" />
              <button onClick={() => onAdd(product)} className='buy' >Купить ингредиенты</button>
            </div>


          </div>





        </div>
      

    </>


  )
}


