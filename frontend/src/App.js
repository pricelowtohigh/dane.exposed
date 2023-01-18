import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './Header';
import Paintings from './Paintings';
import Messages from './messages/Messages';
import Home from './Home';
import { MessageCard } from './messages/MessageCard';
import './App.css';

function App() {
  
  return (
    <>
    <Header />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/paintings" element={<Paintings/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/messages/:message_id" element={<MessageCard/>}  />
          </Routes>
      </BrowserRouter>
    </>
  );
}

//<Route path="/paintings">
           // <Header />
            //<Paintings />
        //  </Route>

export default App;
