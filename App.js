import React, { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Orders from "./pages/Orders";
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import AppContext from "./context";
// arr =[
//   { "title": "Кроссовки Nike Air Monarch", "imgURL": "/img/sneakers/1.jpg", "price": "15999"},
// { "title": "Кроссовки Reebok Aztrec", "imgURL": "/img/sneakers/2.jpg", "price": "16999"},
//  { "title": "Кроссовки Nike Zoom SB", "imgURL": "/img/sneakers/3.jpg", "price": "15999"},
// { "title": "Кроссовки Reebok Real Leather", "imgURL": "/img/sneakers/4.jpg", "price": "16999"},
// {" title": "Кроссовки Nike Air Max", "imgURL": "/img/sneakers/5.jpg", "price": "15999"},
// {"title": "Кроссовки Adidas Originals", "imgURL": "/img/sneakers/6.jpg", "price": "16999"},
// {"title": "Кроссовки Nike Rotational ", "imgURL": "/img/sneakers/7.jpg", "price": "15999"},
// {"title": "Кроссовки Reebok Classic", "imgURL": "/img/sneakers/8.jpg", "price": "16999"}
// ]
// arr2 =  [{
//   "id": "1",
//   "title": "Кроссовки Nike Air Monarch",
//   "imgURL": "/img/sneakers/1.jpg",
//   "price": "15999"
//  },
//  {
//   "id": "2",
//   "title": "Кроссовки Reebok Aztrec",
//   "imgURL": "/img/sneakers/2.jpg",
//   "price": "16999"
//  },
//  {
//   "id": "3",
//   "title": "Кроссовки Nike Zoom SB",
//   "imgURL": "/img/sneakers/3.jpg",
//   "price": "15999"
//  },
//  {
//   "id": "4",
//   "title": "Кроссовки Reebok Real Leather",
//   "imgURL": "/img/sneakers/4.jpg",
//   "price": "16999"
//  },
//  {
//   "id": "5",
//   " title": "Кроссовки Nike Air Max",
//   "imgURL": "/img/sneakers/5.jpg",
//   "price": "15999"
//  },
//  {
//   "id": "6",
//   "title": "Кроссовки Adidas Originals",
//   "imgURL": "/img/sneakers/6.jpg",
//   "price": "16999"
//  },
//  {
//   "id": "7",
//   "title": "Кроссовки Nike Rotational ",
//   "imgURL": "/img/sneakers/7.jpg",
//   "price": "15999"
//  },
//  {
//   "id": "8",
//   "title": "Кроссовки Reebok Classic",
//   "imgURL": "/img/sneakers/8.jpg",
//   "price": "16999"
//  }]





function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  useEffect( () => {
   async function fetchData(){
    setIsLoading(true)
    const cartResponse = await axios.get("https://63d7f8505c4274b136ff6263.mockapi.io/cart");
    const favouritesResponse = await axios.get("https://63da56fc2af48a60a7cb1b4a.mockapi.io/favourites");
    const itemsResponse = await axios.get("https://63d7f8505c4274b136ff6263.mockapi.io/items");
    setIsLoading(false)
    setCartItems(cartResponse.data);
    setFavourites(favouritesResponse.data);
    setItems(itemsResponse.data);
    // axios.get("https://63d7f8505c4274b136ff6263.mockapi.io/items").then((result)=>{
     
    // });

    // axios.get("https://63d7f8505c4274b136ff6263.mockapi.io/cart").then((result)=>{
      
    // });
    // axios.get("https://63da56fc2af48a60a7cb1b4a.mockapi.io/favourites").then((result)=>{
      
    // });
   }
   fetchData()
},[])

  const onAddToCard = (obj) =>{

     if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
      console.log(obj);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
     } else{
      axios.post("https://63d7f8505c4274b136ff6263.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
     }
        
    

    
  };
  const onAddToFavourites = async (obj) =>{
    try {
      console.log(obj.id, "id");
      if(favourites.find((favObj) => Number(favObj.id) === Number(obj.id))){
      axios.delete(`https://63d7f8505c4274b136ff6263.mockapi.io/favourites/${obj.id}`);
      setFavourites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      // setFavourites((prev) => prev.filter((item) => item.id !== obj.id))
    } else{
      const {data} = await axios.post("https://63da56fc2af48a60a7cb1b4a.mockapi.io/favourites", obj);
      setFavourites((prev) => [...prev, data]);
    }
      
    } catch (error) {
      alert('Не удалось добавить в избранное ')
    }


    
  };

const onChangeSearchInput = (event) =>{
  console.log(event.target.value);
  setSearchValue(event.target.value);
}
const onRemoveItem = (id) => {
  console.log(id)
  axios.delete(`https://63d7f8505c4274b136ff6263.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter(item => item.id !== id));
}

const clearInputBtn = (event) =>{
  
  event.target.value = '';
  console.log(event.target.value);
  setSearchValue(event.target.value);
}
const isItemAdded = (id) => {
  return cartItems.some((obj)=> Number(obj.id) === Number(id))
}
      
  return (

    <AppContext.Provider value={{items, cartItems, cartOpen, searchValue, favourites, isLoading, isItemAdded,
                                 setCartOpen, setCartItems, setIsLoading}}>

    <div className="wrapper clear">
     { cartOpen && <Drawer  onClose={()=> setCartOpen(false)} items = {cartItems} onRemove ={onRemoveItem}/> }

      <Header onClickCart={()=> setCartOpen(true)} />
                  <Routes>
                              <Route path="/" element = {<Home   cartItems = {cartItems} items={items} onAddToFavourites={onAddToFavourites}
                                      onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} 
                                      setSearchValue = {setSearchValue} onAddToCard={onAddToCard} clearInputBtn={clearInputBtn} isLoading={isLoading}
                              />}></Route>

                              <Route path="favourites" exact 
                                element={<Favourites onAddToFavourites={onAddToFavourites}
                                // items={favourites}
                                />}> 
                              </Route>

                              <Route path="orders" exact 
                                element={<Orders />}> 
                              </Route>

                 </Routes>
   
      
   
     
   
 </div>

    </AppContext.Provider>
    



  );
}

export default App;
