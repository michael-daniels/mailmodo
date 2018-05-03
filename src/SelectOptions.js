import React, { Component } from 'react';
import './App.css'
import ChooseRecipientDocumentForm from './ChooseRecipientDocumentForm'
import SingleDocument from './SingleDocument'


const SelectOptions = (props) => {
  console.log("SELECT OPTIONS PROPS", props)
  return (
    <div>
      <div className="choose-recipient-div">
        <ChooseRecipientDocumentForm mailingOptions={props.mailingOptions} updateStateSelectedFunc={props.updateStateSelectedFunc}/>
      </div>
        <SingleDocument currentDocument={props.mailingOptions} />
    </div>
  )
}

export default SelectOptions;
