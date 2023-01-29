const Drawer = () => {
    return ( 
        <div className="overlay" style={{display:"none"}}>
                <div className="drawer ">
                <h2 className="drawer--title mb-30 d-flex justify-between ">Корзина     <img className="btn--remove cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>
                <div className="items">
                    
                <div className="cartItem d-flex align-center mb-20" >
                <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
                
                <div className="mr-20 flex">
                    <p className="cartItem--title mb-5">Кроссовки Nike  Blazer Mid Suede</p>
                    <b className="cartItem--text">12 999 руб.</b>
                </div>
                <img className="btn--remove" src="/img/btn-remove.svg" alt="remove" />
                </div>

                <div className="cartItem d-flex align-center mb-20" >
                <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
                {/* <img className="mr-15" width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" /> */}
                <div className="mr-20 flex">
                    <p className="cartItem--title mb-5">Кроссовки Nike  Blazer Mid Suede</p>
                    <b className="cartItem--text">12 999 руб.</b>
                </div>
                <img className="btn--remove" src="/img/btn-remove.svg" alt="remove" />
                </div>

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
      </div> 
     );
}
 
export default Drawer;