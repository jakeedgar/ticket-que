import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button className='submit-ticket-button' type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;