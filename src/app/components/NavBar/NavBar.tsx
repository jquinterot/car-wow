import { SearchBar } from '../SearchBar/SearchBar';
import './NavBar.css';
import { Cart } from '../Cart/Cart';

export function NavBar({quantity}: {quantity: number}) {
  return (
    <nav className="header__nav">
      
      <div className="header__logo">
        <h3>Car Wow</h3>
      </div>

     <SearchBar></SearchBar>

     <Cart quantity={quantity}/>

    </nav>
  );
}
