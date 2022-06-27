import React from "react";
import ticketsImage from "./../ticket.png";

function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;