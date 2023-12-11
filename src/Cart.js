import {Link} from 'react-router-dom';
import './style/css/cart.css';
import { CartProvider, useCart } from "react-use-cart";
import Header from './items/header'; 
import Footer from './items/footer'
export function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  if (isEmpty) return <p className='empty'>Ваша корзина пуста</p>;
  return (
    <>
    <h1>Ваша корзина</h1>
    <div className='cartTbl'>
      <div className='cartUl'>
        <div className='crtItem1'>Количество</div>
        <div className='crtItem1'>Название</div>
        <div className='crtItem1'>Цена</div>
        <div className='crtItem1'>Итого</div>
        <div className='crtItem1'></div>
      </div>
      {items.map((item) => (
        <div key={item.id} className="cartUl">
          <div className='crtItem1'>
            {item.quantity}
          </div>
          <div className='crtItem1'>
            {item.name}
          </div>
          <div className='crtItem1'>
            {Math.ceil(((item.price * (100 - item.discount)) / 100) * 100) / 100}$
          </div>
          <div className='crtItem1'>
            {Math.ceil(((item.price * (100 - item.discount)) / 100) * 100 * item.quantity) / 100}$
          </div>
          <div className='crtItem1'>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="crtbt">
              -
            </button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="crtbt">
              +
            </button>
            <button onClick={() => removeItem(item.id)} className="crtbt">&times;</button>
          </div>
        </div>
      ))}
      <p className='total'>Общаяя {Math.ceil(items.reduce((acc, item) => acc + ((item.price * (100 - item.discount)) / 100) * 100 * item.quantity, 0)) / 100}$</p>
  
      <form>
        <input type="text" className="buytxt" value="Name" />
        <input type="text" className="buytxt" value="Comments" />
        <input type="text" className="buytxt" value="Your email address..." />
        <button className='buy'>Купить</button>
      </form>
    </div>
  </>
  
  );
}

export const Crt=()=>{
    return(
        <html>
    <Header></Header>
    <CartProvider>
    <Cart/>
    </CartProvider>
    <Footer></Footer>
        </html>
        );
}
export default Crt;