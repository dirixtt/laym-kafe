
// import  Link  from "./components/Header/Link";
import "./App.css";
// import NavApp from "./components/sideBar/navApp";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Main from "./components/Product/functions/Main";
// import Pro from "./components/Product/Pro";
import data from './components/Product/functions/data'
import Main from "./components/Product/functions/Main";
import Bascet from "./components/Product/Bascet";
import { useState } from "react";
// import { Routes, Route} from 'react-router-dom'

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      )
      );
    }
  }
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }


  }
 
  return (
    <>
      <Header countCartItems= {cartItems.length} cartItems={cartItems} ></Header>

      <div className="d-flex-3">
        <Main onAdd={onAdd} onRemove={onRemove} products={products}></Main>
        

        <Bascet cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems= {cartItems.length} ></Bascet>
      </div>

      <Footer />
      {/* <NavApp></NavApp> */}
      {/* <Main poducts={products}></Main> */}
    </>
  );
}
export default App;
