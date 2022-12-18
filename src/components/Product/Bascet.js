import React from 'react'

export default function Bascet(props) {
 
  const { cartItems, onAdd, onRemove,  } = props;
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const { countCartItems } = props
  return (
    <div className='basket-cont'>
    
      <div className='bbas'>{cartItems.length === 0 && <div className='bascet'>Cart is Bush</div>}</div>
      {cartItems.map((item) => (

        <div className='d-flex-3 basket-items' key={item.id} >

          <div className='item-img'><img src="https://avatars.mds.yandex.net/get-mpic/4615396/img_id5235776772454182407.jpeg/900x1200" alt={item.name} /></div>
          <div className="butt">
            <button onClick={() => onAdd(item)} className='add'>+</button>
            <div>{item.qty}</div>
            <button onClick={() => onRemove(item)} className='remove'>-</button>

          </div>
          <div className="item-info">
            <div className='item-name' >{item.name}</div>
            <div className="item-price">{item.qty * item.price}руб.  </div>
          </div>

          <div>
            {/* {product.qty} x ${item.price.toFixed(2)} */}
          </div>
        </div>


      ))}

      <div className="total">
        <div className="total-price">
          <h4>Итого,руб:</h4>
          <h3>{itemPrice}</h3>
        </div>

        <a className='bascet-btn' href="#/cart">
          <button onClick={() => alert('Sizdan' + ' ' + itemPrice + 'руб.' )}> <i class="material-icons">shopping_cart</i>  <span>Подтвердить заказ</span></button>  {' '}
          {countCartItems ? (
            <p> {countCartItems}</p>
          ) : (
            ''
          )}
        </a>{'   '}
      </div>
    </div>
    // </div>
  )
}
