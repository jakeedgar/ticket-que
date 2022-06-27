import React from "react";
import Header from "./components/Header";
import './App.css'
import TicketList from "./components/TicketList";

function App(){
  return ( 
    <div id="App">
      <React.Fragment>
        <header id="App-header">
          <Header />
          <TicketList />
        </header>
      </React.Fragment>
    </div>
  );
}

export default App;