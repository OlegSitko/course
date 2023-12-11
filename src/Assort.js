import './style/css/assort.css';
import {Link} from 'react-router-dom';
import {Catalog} from './Catalog';
import Header from './items/header'; 
import Footer from './items/footer'

export const Assort=()=>{
    return(
        <html>
    
        <body>
        <Header></Header>

        <Catalog/>
        <div class="rain front-row"></div>
            <div class="rain back-row"></div>
            <div class="toggles">
        </div>
        </body>
       <Footer></Footer>
        </html>
        );
}
export default Assort;