import { useContext } from "react";
import React from "react";
import Card from "../components/Card";
import AppContext from "../context";


const Favourites = ({ onAddToFavourites}) => {
    const {favourites }= useContext(AppContext);
    console.log(favourites)

    return ( 
        <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
            <h1 className="content__title ">Мои закладки</h1>
          
        
          </div>
  
          
  
          <div className="sneakers d-flex flex-wrap">
               {favourites.map((item, index) => 
                  <Card 

                  /> )}
         
  
          </div>
  
        </div>
     );
}
 
export default Favourites;