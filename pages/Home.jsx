import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Home = ({items, onAddToFavourites, onChangeSearchInput,searchValue,setSearchValue,clearInputBtn, onAddToCard, cartItems, isLoading, }) => {
  const {isItemAdded }= React.useContext(AppContext);

const renderItems = () => {
  const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  return (isLoading? [...Array(8)] :  filteredItems).map((item, index) => 
  /* {items.map((item, index) => */
    <Card 
   
          key={index}
          isLoading= {!isLoading}
          {...item}
          // id = {item.id}
          // title={item.title} 
          // price={item.price} 
          // imgURL = {item.imgURL}
          onFavourite={(obj) => onAddToFavourites(obj)}
          onPlus={(obj) => onAddToCard(obj)}
          added={isItemAdded(item && item.id)}
    /> )
  

}
    return ( 
        <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
            <h1 className="content__title ">{searchValue? `поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="searchBlock align-center d-flex">
            <img src="./img/search.svg" alt="search" />
            {searchValue && <img onClick={clearInputBtn}  className="btn--clear" src="/img/btn-remove.svg" alt="remove" />}
            <input onChange={onChangeSearchInput} value = {searchValue} className="input" type="text" placeholder="Поиск..." />
            
          </div>
        
          </div>
  
          
  
          <div className="sneakers d-flex flex-wrap">
            
                {renderItems() }
         
  
          </div>
  
        </div>
     );
}
 
export default Home;