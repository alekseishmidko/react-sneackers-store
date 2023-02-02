import Card from "../components/Card";


const Favourites = ({items, onAddToFavourites}) => {
    
    
    return ( 
        <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
            <h1 className="content__title ">Мои закладки</h1>
          
        
          </div>
  
          
  
          <div className="sneakers d-flex flex-wrap">
               { items.map((item, index) => 
                  <Card 
                  id = {item.id}
                  key={index}
                  title={item.title} 
                  price={item.price} 
                  imgURL = {item.imgURL}
                  favourited ={true}
                  onFavourite = {onAddToFavourites}
                  /> )}
         
  
          </div>
  
        </div>
     );
}
 
export default Favourites;