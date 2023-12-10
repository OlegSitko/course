import React, { useState } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import { content } from "./items/Content";
import { Search } from "./items/Search";
import './style/css/sortTable.css';

const sorts = (sortDirection, sorted, sort) => {
  return (
    <div className="sorts">
      <button className="btt" onClick={() => sort("name")}>
        Название
      </button>
      <button className="btt" onClick={() => sort("price")}>
        Цена
        {sortDirection === 'asc' && ' ↑'}
        {sortDirection === 'desc' && ' ↓'}
      </button>
      <button className="btt" onClick={() => sort("discount")} >
        Скидки
      </button>
    </div>
  );
}

function Page() {
  const { addItem } = useCart();
  const [isShown, setIsShown] = useState(false);
  const [array, setArray] = useState(content);
  const [search, setSearch] = useState('');
  const [sorted, setSorted] = useState({ name: true, price: true, discount: true });
  const [searchParameter, setSearchParameter] = useState('partial');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedType, setSelectedType] = useState(null);

  const sort = (byWhat) => {
    let direction = sorted[byWhat] ? 1 : -1;
    let newSortDirection = sorted[byWhat] ? 'asc' : 'desc';
    let goodsCopy = [...array].sort(function (a, b) {
      if (a.new || b.new)
        return 0
      if (a[byWhat] > b[byWhat]) {
        return direction;
      }
      if (a[byWhat] < b[byWhat]) {
        return direction * -1;
      }
      return 0;
    });
    sorted[byWhat] = !sorted[byWhat];
    setArray(goodsCopy);
    setSortDirection(newSortDirection);
  }

  const filterByType = (item) => {
    if (!selectedType) return true;
    return item.id.toLowerCase().includes(selectedType.toLowerCase());
  }

  const handleClickType = (type) => {
    setSelectedType(type);
  }

  const types = () => {
    return (
      <div className="types">
        <div>Тип</div>
        <hr />
        <ul>
          <li onClick={() => handleClickType('красный')}>Красный</li>
          <li onClick={() => handleClickType('зелёный')}>Зеленый</li>
          <li onClick={() => handleClickType('белый')}>Белый</li>
          <li onClick={() => handleClickType('жёлтый')}>Желтый</li>
          <li onClick={() => handleClickType('доп')}>Дополнения</li>
        </ul>
      </div>
    );
  }

  const goods = () => {
    return array
      .filter((item) => {
        if (!search) return item;
        if (
          item.name.toLowerCase().includes(search.toLowerCase())
        ) {
          return item;
        }
      })
      .filter(filterByType) // Добавляем фильтрацию по типу
      .map((item) => {
        return (
          <>
            {<div className="oneGood" key={item.id}>
              <div className="wrapper">
                <div className="imgDesc"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}>
                  <img className="image" src={item.img} alt="" />
                  {isShown && (<div className="dsc">{item.desc}</div>)}
                </div>
                <div className="text">
                  <div className="name">{item.name}</div>
                  <div className="bot">
                    <button className="cart" onClick={() => addItem(item)}>В корзину</button>
                    {item.discount !== false ?
                      <div className="prices">
                        <label className="dsk">{Math.ceil(((item.price * (100 - item.discount)) / 100) * 100) / 100}$</label>
                        <label className="lb">{item.price}$</label>
                      </div>
                      :
                      <div className="prices">
                        <label className="dsk1">{Math.ceil(((item.price * (100 - item.discount)) / 100) * 100) / 100}$</label>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            }
          </>
        );
      });
  }

  return (
    <>
      <div className='assort'>
        <div className="left">
          <Search search={setSearch} searchParameter={setSearchParameter} />
          {types()} {/* Добавляем компонент для выбора типа */}
        </div>
        <div className="assortiment">
          <div className='hed'>Чаи и дополнения</div>
          <div className="Item">
            {sorts(sortDirection, sorted, sort)}
            <div className="goods">
              {goods()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const Catalog = () => {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}
export default Catalog;
