const Drawer = ({onClose,onRemove, items=[]}) => {
console.log(items);
    return ( 
        <div className="overlay" >
                <div className="drawer ">
                <h2 className="drawer--title mb-30 d-flex justify-between ">Корзина    
                        <img onClick={onClose}  className="btn--remove cu-p" src="/img/btn-remove.svg" alt="remove" />
                </h2>
                  {
                    items.length > 0 ?  
                     <div className="items">

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
                                  <b>21498 руб.</b>
                              </li>

                              <li className="d-flex ">
                                  <span>Налог 5%: </span>
                                  <div></div>
                                  <b>1074 руб.</b>
                              </li>

                          </ul>

                          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /> </button>

                          </div>

                          </div>
                      ))}
                    </div>
                       :
                        <div className="cartEmpty align-center justify-center flex-column flex">
                          <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="empty" />
                          <h2>Корзина пустая </h2>
                          <p className="opacity-6">   Добавьте хотя бы одну пару обуви в корзину </p>
                          <button onClick={onClose} className="greenButton"> Вернуться назад</button>
                        </div>
                  }


                
            </div>
      </div> 
     );
}
 
export default Drawer;