import React from "react"
import { useState } from "react"



const Card = ({onFavourite, onPlus, price, imgURL, title, favourited=false, id}) => {
  const [isAdd, setIsAdd] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourited)

  const onClickPlus = () => {
    onPlus({title, imgURL, price});
      setIsAdd(!isAdd);
  };
  const onClickFavourite = () =>{
    onFavourite({title, imgURL, price, id})
    setIsFavourite(!isFavourite)
  }

    return ( 
        <div className="card">
          <div className="favourite" onClick={onFavourite}>
            <img onClick={onClickFavourite} src={isFavourite ? "/img/liked.svg" :"/img/unliked.svg"} alt="unliked" />
          </div>
       
          <img width={133} height={112} src={imgURL} alt="" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className="price">Цена:</span> <b className="price--b"> {price} руб.</b>
            </div>
           
                  <img  className="plus"  onClick={onClickPlus} src={isAdd? "/img/btn-checked.svg" :"/img/btn-plus.svg"} alt="plus" />
            
          </div>
        </div>

     );

    }
export default Card;