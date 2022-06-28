import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
  event.preventDefault();
  props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <textarea 
          className='input-text'
          type='text'
          name='names'
          placeholder='Pair Names' />
        <textarea
          className='input-text'
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          className='input-text'
          name='issue'
          placeholder='Describe your issue.' />
        <button className='submit-ticket-button' type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;