

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">

          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png"/>
              <div className='headerInfo' >
                <h3 className='headerInfoTitle text-uppercase'>React Sneackers</h3>
                <p className='headerInfoText opacity-5'>Магазин кроссовок</p>
              </div>
          </div>

          <ul className='d-flex '>
            <li className="mr-30 "> <img width={18} height={18} src="/img/cart.svg"/> <span>1205 руб.</span> </li>

            <li> <img width={18} height={18} src="/img/user.svg"/> </li>
          </ul>
      </header>

      <div className="content p-40">
        <h1 className="content__title mb-40 ">Все кроссовки</h1>

        <div className="sneakers d-flex">

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span className="price">Цена:</span> <b className="price--b"> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/5.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/6.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>


        <div className="card">
          <img width={133} height={112} src="/img/sneakers/7.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>

        
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/8.jpg" alt="" />
          <h5>Кроссовки Nike  Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span> <b> 12 999 руб.</b>
            </div>
            <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus" /></button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
