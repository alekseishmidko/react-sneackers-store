import React from "react"
import { useState } from "react"
import ContentLoader from "react-content-loader";
import AppContext from "../context";

const Card = ({onFavourite, onPlus, price, imgURL, title, favourited=false, id, added=false, isLoading = false }) => {
  // const [isAdd, setIsAdd] = useState(added);
  const [isFavourite, setIsFavourite] = useState(favourited)
  const {isItemAdded }= React.useContext(AppContext);
  const onClickPlus = () => {
    onPlus({title, imgURL, price, id});
      // setIsAdd(!isAdd);
  };
  const onClickFavourite = () =>{
    onFavourite({title, imgURL, price, id})
    setIsFavourite(!isFavourite)
  }

    return ( 
        <div className="card">
          {
            isLoading ? 
        

<> 

                <div className="favourite" onClick={onFavourite}>
                <img onClick={onClickFavourite} src={isFavourite ? "/img/liked.svg" :"/img/unliked.svg"} alt="unliked" />
                </div>

                <img width={133} height={112} src={imgURL} alt="" />
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span className="price">Цена:</span> <b className="price--b"> {price} руб.</b>
                </div>

                      <img  className="plus"  onClick={onClickPlus} src={isItemAdded(id) ? "/img/btn-checked.svg" :"/img/btn-plus.svg"} alt="plus" />

                </div>

</>

          :
          <ContentLoader speed={2} width={155} height={265} viewBox= "0 0 155 265" backgroundColor="#f3f3f3" foregroundColor="#ocebeb">
          <rect x="1" y="0"     rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167"   rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187"   rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234"   rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> 

          }
         
        </div>

     );

    }
export default Card;