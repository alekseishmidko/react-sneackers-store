import React from 'react'
import AppContext from '../context';


const Info = ({title, description, img}) => {
    const {setCartOpen} = React.useContext(AppContext)
    return ( 
        <div className="cartEmpty align-center justify-center flex-column flex">
        <img className="mb-20" width={120}  src={img} alt="empty" />
        <h2> {title} </h2>
        <p className="opacity-6">{description}</p>
        <button onClick={() => setCartOpen(false)} className="greenButton"> Вернуться назад</button>
      </div>
     );
}
 
export default Info;