import './Cart.css';
export function Cart({quantity}: {quantity:number;}) {
  return (
    <div className="header__menu">
        <button>Cart</button>
        <label htmlFor="">{quantity}</label>
    </div>
  );
}