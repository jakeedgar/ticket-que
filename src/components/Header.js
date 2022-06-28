import React from "react";
import ticketsImage from "./../ticket.png";

function Header(){
  return (
    <React.Fragment>
      <h1 className='header-text'>Ticket Que</h1>
      <img className='ticket-image'src={ticketsImage} alt="tickets" width='25%' height='25%'/>
    </React.Fragment>
  );
}

export default Header;