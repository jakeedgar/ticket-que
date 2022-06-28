import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import { faker } from '@faker-js/faker';

function NewTicketForm(props){


  const firstName = faker.name.firstName();
  const firstName2 = faker.name.firstName();
  const noun = faker.hacker.noun()
  const ingVerb = faker.hacker.ingverb()
  const address = faker.address.secondaryAddress()
  const phrase = faker.hacker.phrase()
  
  function handleNewTicketFormSubmission(event) {
  event.preventDefault();
  console.log(firstName);
  props.onNewTicketCreation({names: firstName + " and " + firstName2, location: address, issue: ingVerb + ' ' + noun + ' ' + phrase, id: v4()});
  }


  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        {/* <textarea 
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
          placeholder='Describe your issue.' /> */}
        <button className='submit-ticket-button' type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;