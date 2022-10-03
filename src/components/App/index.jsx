import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Context } from "../../context";
import Add from '../../pages/Add';
import View from '../../pages/View';
import NavBar from '../NavBar';
import { useEffect } from 'react';

function App() {
  const [deals, _setDeals] = useState([]);

  const setDeals = (state) => {
    _setDeals(state);
    localStorage.setItem('deals', JSON.stringify(state))
  }

  useEffect(() => {
    const deals = JSON.parse(localStorage.getItem('deals')) ?? [];
    setDeals(deals);
  }, []);

  const add_deals_list = (title, days) => {
    setDeals(
      [...deals,
      {
        id: Date.now(),
        title, days
      }]);
  }

  deals.sort((a, b) => +a.days - +b.days)
  
  return (
    <Context.Provider value={{add_deals_list}}>
      <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/add' element={<Add deals={deals} />}></Route>
          <Route path='/view' element={<View />}></Route>
        </Routes>
      </div>
      </>
    </Context.Provider>
  );
}

export default App;
