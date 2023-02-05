import Info from "./Info";

import {React , useState, useContext}  from "react";
import axios from "axios";
import { useCart } from "../hooks/useCart";


const Drawer = ({onClose,onRemove, items=[]}) => {

const {cartItems, setCartItems, totalPrice} = useCart();
// const {setCartItems, cartItems}= useContext(AppContext);
const [isOrderComplete, setIsOrderComplete] = useState(false);
const [orderId, setOrderId] = useState(null);
const [isLoading, setIsLoading] = useState(false);

// const totalPrice  = (cartItems.reduce((sum, obj) => Number(obj.price) + Number(sum), 0));


const onClickOrder = async () =>{ 
 try {
  setIsLoading (true);
  const {data} = await axios.post('https://63da56fc2af48a60a7cb1b4a.mockapi.io/orders', {items:cartItems});
  
  // await axios.put('https://63d7f8505c4274b136ff6263.mockapi.io/cart', [])
  setOrderId(data.id)
  setIsOrderComplete(true);
  setCartItems([]);
  
 for (let i = 0; i < cartItems.length; i++) {
  const  item = cartItems[i];
  await axios.delete('https://63d7f8505c4274b136ff6263.mockapi.io/cart' + item.id)
 }

 } catch (error) {
    alert('Не удалось создать заказ!')
 }
 setIsLoading (false);
}



    return ( 
        <div className="overlay" >
                <div className="drawer ">
                <h2 className="drawer--title mb-30 d-flex justify-between ">Корзина    
                        <img onClick={onClose}  className="btn--remove cu-p" src="/img/btn-remove.svg" alt="remove" />
                </h2>
                  {
                    items.length > 0 ?  
                     <div className="items d-flex flex-column flex">

                        {items.map((obj) => (
                        <div>
                        <div key={obj.id} className="cartItem d-flex align-center mb-20">
                          <div
                            style={{ backgroundImage: `url(${obj.imgURL})` }}
                            className="cartItemImg"></div>

                          <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}</p>
                            <b>{obj.price} руб.</b>
                          </div>
                          <img
                            onClick={()=> onRemove(obj.id)}
                            className="removeBtn"
                            src="img/btn-remove.svg"
                            alt="Remove"
                          />
                        </div>

                          <div className="cartTotalBlock">
                          <ul >
                              <li className="d-flex ">
                                  <span>Итого:</span>
                                  <div></div>
                                  <b>{totalPrice} руб.</b>
                              </li>

                              <li className="d-flex ">
                                  <span>Налог 5%: </span>
                                  <div></div>
                                  <b>{totalPrice * 0.05} руб.</b>
                              </li>

                          </ul>

                           {/* <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /> </button>  */}

                          </div>

                          </div>
                      ))}
                    </div>
                       :
                        <Info title ={isOrderComplete ?"Заказ Оформлен" : "Корзина пуста"}
                              description={isOrderComplete ? `Ваш заказ № ${orderId} передан в службу доставки` : "Добавьте товар в корзину"} 
                              img={isOrderComplete ?"/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                              />
                  }


<button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /> </button>
            </div>
      </div> 
     );
}
 
export default Drawer;