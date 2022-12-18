import React from 'react'
import '../Product.css'
// import { useState } from 'react'
// import Products from './Product'
// import { isHtmlElement } from 'react-router-dom/dist/dom'

// import Soup from './soup.png'
export default function Foods(props) {
   const { onAdd, item, product} = props
  // const { name , price, rate, time, smallImg} = products
  // const [product, setPeople] = useState(data)/
  // const [currentIndex, setIndex] = useState(0/);

 
  return (
   
   <div className='fd'>
   
      <div className="" key={product.id}>
       
       <article className='card-box' >        
                        

                       

                        
                            
       <div className="img-h">
              <div className="hove">
                <p>Смотреть рецепт</p>
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
                               
                                
      </article>
                        
                    


            
    </div>

   </div >
 
    
   
  )
}















   // <div className='flex-1'>
      
      
    //   <div className="d-flex-2">
    //     {
    //       people.map((product, idx) => (
    //         <div className="card-box" key={idx}>
    //             {people.map((person , personIndex) => {
    //                     const {id, image, name, price} = person;

    //                     let position = 'nextSlide';
    //                     if(personIndex === currentIndex) {
    //                         position = 'activeSlide'
    //                     }

    //                     if(personIndex === currentIndex - 1 || (currentIndex === 0 && personIndex === people.length - 1)) {
    //                         position = 'lastIndex'
    //                     }
    //             })}


             


    //           <h3 className='product-title'>{item.name}</h3>
    //           <p className='product-price'>Цена: <span>{item.price}</span></p>
    //           <div className="small-comp ">
    //             <p className='time'><i className="material-icons">access_time</i>{item.time}</p>
                
    //           </div>
    //           <div className="card-bottom">
              
    //             <button onClick={() => onAdd(item)} >Купить ингредиенты</button>
    //           </div>
    //         </div>
    //       ))
    //     }
    //   </div>

    // </div>

  

