import axios from "axios";
import {React, useContext, useState, useEffect} from "react";
import Card from "../components/Card";
import AppContext from "../context";


const Orders = () => {
  const { onAddToFavourites, onAddToCard} = useContext(AppContext)
 const [orders, setOrders] = useState([]);
 const [Loading, IsLoading] = useState(true);

useEffect(() => {
    (async () => {

      try {
        const {data} = await axios.get('https://63da56fc2af48a60a7cb1b4a.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        IsLoading(false)
        
      } catch (error) {
        alert('Ошибка при запросе заказов')
      }

    })()
   
 },[])
    return ( 
        <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
            <h1 className="content__title ">Мои заказы </h1>
        
          </div>
  
          
  
          <div className="sneakers d-flex flex-wrap">
               {  orders.map((item, index) => 
                  <Card 
                  key={index}
                  isLoading= {Loading}
                  {...item}
                   onFavourite={(obj) => onAddToFavourites(obj)}
                  // onPlus={(obj) => onAddToCard(obj)}
                  
                  /> )}
         
  
          </div>
  
        </div>
     );
}
 
export default Orders;