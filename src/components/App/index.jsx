import { Routes, Route } from 'react-router-dom';
import Add from '../../pages/Add';
import View from '../../pages/View';
import NavBar from '../NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/view' element={<View />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
