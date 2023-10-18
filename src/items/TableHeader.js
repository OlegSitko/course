import {ArrowButtons} from "./ArrowButtons";

export const TableHeader = ({handler}) => {
    return (
        <thead>
        <tr>
            <th>
                <div className="head-items">
                    <span>Номер</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Название</span>
                    <ArrowButtons arrowAttribute="name" handler={handler}/>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Цена</span>
                    <ArrowButtons arrowAttribute="price" handler={handler}/>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Фото</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Описание</span>
                </div>
            </th>
            <th>
                <div className="head-items">
                    <span>Скидки</span>
                    <ArrowButtons arrowAttribute="Discount" handler={handler}/>
                </div>
            </th>


        </tr>
        </thead>
    )

}