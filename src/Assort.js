import './style/css/assort.css';
import {Link} from 'react-router-dom';
import {Catalog} from './Catalog';

export const Assort=()=>{
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
        <body>
        <Catalog/>
        <div class="rain front-row"></div>
            <div class="rain back-row"></div>
            <div class="toggles">
        </div>
        </body>
        <footer>
            <hr className="hrT"/>
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
                <a href="https://google.com" className='lnk'>Сайт</a>
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
                <li className='lnk'>Приватная политика</li>
            </ul>
            </div>
        </footer>
        </html>
        );
}
export default Assort;