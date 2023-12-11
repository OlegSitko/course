import back from './photo/back.png';
import red from './photo/red.jpg';
import white from './photo/white.jpg';
import yellow from './photo/yellow.jpg';
import green from './photo/green.jpg';
import black from './photo/black.jpg';
import additives from './photo/additivies.jpg';
import Header from './items/header'; 

import './style/css/main.css';

import {Link} from 'react-router-dom';
import React from 'react';


export class Main extends React.Component {
    state = {
        name: "",
        com:"",
        mail:"",
    };
    onChange=(e)=>{
        this.setState({name:e.target.value});
        };
    onChange1=(e)=>{
        this.setState({com:e.target.value});
    };
    onChange2=(e)=>{
        this.setState({mail:e.target.value});
    };

    render() {       
  return (
    <html>
   
    <body>
        <Header></Header>
        <div className="rectangle">
            <img className="imgRec" src={back}/>
            <div className="txt">Настоящий чайный букет подобен дорогому вину, его невозможно повторить, секреты его составления 
                его приготовления доступны только автору.</div>
        </div>

        <div className="box">
            <div className="assort1">
                <Link to='/Assort' className="txtAs">Зеленый чай</Link>
                <img src={green}/>
            </div>
            <div className="assort2">
                <Link to='/Assort' className="txtAs">Черный чай</Link>
                <img src={black}/>
            </div>
            <div className="assort3">
                <Link to='/Assort' className="txtAs">Красный чай</Link>
                <img src={red}/>
            </div>
            <div className="assort4">
                <Link to='/Assort' className="txtAs">Белый чай</Link>
                <img src={white}/>
            </div>
            <div className="assort5">
                <Link to='/Assort' className="txtAs">Желтый чай</Link>
                <img src={yellow}/>
            </div>
            <div className="assort6">
                <Link to='/Assort' className="txtAs">Добавки</Link>
                <img src={additives}/>
            </div>
        </div>
        
        <div className="preBottom">
            <div className="desc">SpecialTea<br/><br/>SpecialTea - это чайная компания, расположенная в штате Вирджиния, которая занимается поиском чая, трав и специй самого высокого качества по всему миру. 
                специи со всего мира</div>
            <div className="email">
                <div className="emailDisc">Зарегистрируйтесь и получите 10% скидку на первую покупку:</div>
            <br/>
            <form id="form1">
            Name
                <input type="text" className="mail" name='name' value={this.state.name} onChange={this.onChange}/>
            Comment
                <input type="text" className="mail" name='com' value={this.state.com} onChange={this.onChange1}/>  
            E-mail  
                <input type="text" className="mail"  name='value' value={this.state.mail} onChange={this.onChange2}/>
                <br/>            
                <button className='send' type="submit">Send</button>
            </form>
            </div>
        </div>

        <footer>
            <hr className="hrT"/>
            <div className="fTop">
            <ul className="footerTop">
                <li>Магазин</li>
                <hr className="hr"/>
                <Link to='/Assort' className='lnk'>Все</Link>
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
    </body>
</html>
  );
}
}
