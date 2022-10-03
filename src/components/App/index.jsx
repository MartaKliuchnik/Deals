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
    setDeals(
      [...deals,
      {
        id: Date.now(),
          title, days, 
          ordinal_number: ++deals.length
        }]);

  deals.sort((a, b) => +a.days - +b.days);



  const cards_array = [];
  const [cards, setCards] = useState(cards_array);

  const add_deal_card = (title, days) => 
    setCards(
      [...cards,
      {
        id: Date.now(),
          title, days,
          ordinal_number: ++cards.length
        }]);
  
  cards.sort((a, b) => a.ordinal_number - b.ordinal_number);
  
  
  return (
    <Context.Provider value={{add_deals_list, add_deal_card}}>
      <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/add' element={<Add deals={deals} />}></Route>
          <Route path='/view' element={<View cards={cards} />}></Route>
        </Routes>
      </div>
      </>
    </Context.Provider>
  );
}

export default App;
