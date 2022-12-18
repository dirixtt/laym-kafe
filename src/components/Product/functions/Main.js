import React from 'react'
// import '../Product.css'
import Pro from '../Pro'
import Foods from './Foods.js';
// import data from './componen/ts/Product/functions/data'
// import dataa from './components/Product/functions/data-2.js'

import Product from './Product.js';

export default function Main(props) {
    const {  onAdd, products } = props;
    // const { products} = dataa;
    return (
        <>

            <div className='df-2'>
                <Pro></Pro>
                <div className="ttop">
                    <div className="title-2 ">
                        <h1 className='title-h1 bb-g'>Салаты</h1>
                        <p className="title-p">Показать все<i className="material-icons">keyboard_arrow_down</i></p>
                    </div>
                    <div className="Pod df">

                        {products.map((product) => (
                            <Product onAdd={onAdd} key={product.id} product={product}></Product>
                        ))}
                    </div>
                </div>

                <div className="botm">
                    <div className="title-2 ">
                        <h1 className='title-h1 bb-r'>Горячие блюда</h1>
                        <p className="title-p">Показать все<i className="material-icons">keyboard_arrow_down</i></p>
                    </div>
                    <div className="food">
                        {products.map((product) => (
                            <Foods onAdd={onAdd} key={product.id} product={product}></Foods>
                        ))}
                    </div>
                </div>


            </div>

            {/* <div className="d-flex-4">
                   {products.map((item) => {
                  <Foods key={item.id} item={item} onAdd={onAdd}></Foods>

              } )} */}




        </>
    )
}
