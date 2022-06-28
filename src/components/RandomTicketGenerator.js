import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import { firstName, phrase, address, firstName2 } from './FakerComponent'

function RandomTicketGenerator(props) {

  function handleRandomTicketFormSubmission(event) {
  event.preventDefault();
  props.onNewTicketCreation({names: firstName + firstName2, location: address, issue: phrase, id: v4()});
  }

    return (
    <React.Fragment>
      <form onSubmit={handleRandomTicketFormSubmission}>
        <button className='submit-ticket-button' type='submit'>Random Ticket!</button>
      </form>
    </React.Fragment>
  );
}

RandomTicketGenerator.propTypes = {
  onRandomTicketCreation: PropTypes.func
};

export default RandomTicketGenerator;