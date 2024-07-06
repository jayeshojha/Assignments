import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Animation from './Animation.jsx';
const Home123 = React.lazy(()=>import('./Header.jsx'))
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<React.Suspense fallback={<>
         <Animation/>
        </>}>
        <Home123></Home123>
      </React.Suspense>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
