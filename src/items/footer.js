import { Link } from "react-router-dom";
import React from "react";
import "../../src/style/css/footer.css"
function footer(){
    return(<footer>
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
    </footer>)
}
export default footer;