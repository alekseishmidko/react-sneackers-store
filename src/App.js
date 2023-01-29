import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  return (
    <div className="wrapper clear">
      

      <Drawer/>
      


      <Header/>

      <div className="content p-40">

      <div className="d-flex align-center mb-40 justify-between">
          <h1 className="content__title ">Все кроссовки</h1>
        <div className="searchBlock align-center d-flex">
          <img src="./img/search.svg" alt="search" />
          <input className="input" type="text" placeholder="Поиск..." />
        </div>
      
      </div>

        

        <div className="sneakers d-flex">

       <Card/>

       <Card/>

       <Card/>

        <Card/>

        <Card/>

        <Card/>


        <Card/>

        
        <Card/>

        </div>

      </div>
    </div>
  );
}

export default App;
