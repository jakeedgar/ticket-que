import React from "react";
import Header from "./components/Header";
import './App.css'
import TicketList from "./components/TicketList";
import TicketControl from "./components/TicketControl";

function App(){
  return ( 
    <div className="App">
      <React.Fragment>
        <header className="App-header">
          <Header />
          <TicketControl />
        </header>
      </React.Fragment>
    </div>
  );
}

export default App;