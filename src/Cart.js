import {Link} from 'react-router-dom';
import './style/css/cart.css';
import { CartProvider, useCart } from "react-use-cart";

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
        <div className='crtItem1'>Количество</div><div className='crtItem1'> Название</div><div className='crtItem1'>Цена</div><div className='crtItem1'>Итого</div> <div className='crtItem1'></div>
      </div>
        {items.map((item) => (
          <div className="cartUl">
            <div key={item.id} className='crtItem1'>
              {item.quantity} 
            </div> 
            <div className='crtItem1'>
              {item.name}
            </div>
            <div className='crtItem1'>
              {Math.ceil(((item.price * (100 - item.discount)) / 100)*100)/100}$
            </div>
            <div className='crtItem1'>
              {Math.ceil(((item.price * (100 - item.discount)) / 100)*100 * item.quantity )/100}$
            </div>
            <div className='crtItem1'>  
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}className="crtbt">
                -
              </button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="crtbt">
                +
              </button>
              <button onClick={() => removeItem(item.id)}className="crtbt">&times;</button>
            </div>
          </div>
        ))}
        <p className='total'>{Math.ceil(cartTotal*100)/100}$</p>
        <form>
          <input type="text" className="buytxt" value="Name"/>
          <input type="text" className="buytxt" value="Comments"/>   
          <input type="text" className="buytxt" value="Your    email    address..."/>             
          <button className='buy'>Купить</button>
        </form>
      </div>
    </>
  );
}

export const Crt=()=>{
    return(
        <html>
    <header>
        <div className="header">
            <Link to="/" className="logo">Special Tea</Link>
                <ul className="container">
                <Link to='/Assort' className="Item1">Ассортимент</Link>
                <Link to='/Cart' className="Item1">Ваша корзина</Link>
                <Link to='/About' className="Item1">О нас</Link>
                </ul>
        </div>
    </header>
    <CartProvider>
    <Cart/>
    </CartProvider>
    <footer>
            <div className="fTop">
            <ul className="footerTop">
                <li>Магазин</li>
                <hr className="hr"/>
                <Link to='/Assort' className='lnk'>All</Link>
                <Link to='/Assort' className='lnk'>Чай</Link>
                <Link to='/Assort' className='lnk'>Добавки</Link>
            </ul>
            <ul className="footerTop">
                <li>Поделиться</li>
                <hr className="hr"/>
                <a href="https://www.instagram.com/" className='lnk'>Instagram</a>
                <a href="https://google.com" className='lnk'>Site</a>
            </ul>
            <ul className="footerTop">
                <li>Счет</li>
                <hr className="hr"/>
                <Link to='/Cart' className='lnk'>Корзина</Link>
            </ul>
            <ul className="footerTop">
                <li>Юридическая</li>
                <hr className="hr"/>
                <li className='lnk'>Условия и положения</li>
                <li className='lnk'>Политика приватности</li>
            </ul>
            </div>
        </footer>
        </html>
        );
}
export default Crt;