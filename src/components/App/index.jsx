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

  const add_deals_list = (title, days) => 
    setDeals([...deals,
      {
        id: Date.now(),
        title, days
      }
    ]);
  
  deals.sort((a, b) => +a.days - +b.days);

  const delete_deals = (id) => setDeals(deals.filter(deal => deal.id !== id));


  return (
    <Context.Provider value={{add_deals_list, delete_deals}}>
      <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/add' element={<Add deals={deals}/>}></Route>
          <Route path='/view' element={<View deals={deals}/>}></Route>
        </Routes>
      </div>
      </>
    </Context.Provider>
  );
}

export default App;
