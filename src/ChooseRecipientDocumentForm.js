import React, { Component } from 'react';
import RecipientsSelect from './RecipientsSelect'
import DocumentSelect from './DocumentSelect'

class ChooseRecipientDocumentForm extends Component {

  state = {
    selectedRecipient: this.props.mailingOptions.recipients[0],
    selectedDocument: this.props.mailingOptions.documents[0]
  }

  handleRecipientChange = (event) => {
    event.preventDefault()
    console.log(this.props.mailingOptions.recipients)
    let selectedRecipient = this.props.mailingOptions.recipients.filter((item) => {
      return item.id === Number(event.target.value)
    })
    console.log("Selected Recipient", selectedRecipient)

    this.setState({selectedRecipient:selectedRecipient[0]})


  }

  handleDocumentChange = (event) => {
    event.preventDefault()
    console.log(this.props.mailingOptions.documents)
    let selectedDocument = this.props.mailingOptions.documents.filter((item) => {
      return item.id === Number(event.target.value)
    })
    console.log("Selected Document", selectedDocument)

    this.setState({selectedDocument:selectedDocument[0]})
  }

  handleSelectionsSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.updateStateSelectedFunc(this.state.selectedRecipient, this.state.selectedDocument)
  }

  render() {
    console.log("ALL PROPS FOR FORM", this.props)
    let allRecipients = this.props.mailingOptions.recipients.map((item, idx) => {
      return <RecipientsSelect key={idx} singleRecipient={item}/>
    })
    let allDocuments = this.props.mailingOptions.documents.map((item, idx) => {
      return <DocumentSelect key={idx} singleDocument={item}/>
    })
    return (
      <div className="choose-recipient-document-form">
        <form className="form-inline" onSubmit={this.handleSelectionsSubmit}>
          <select className="form-control btn" onChange={this.handleRecipientChange}>
            {allRecipients}
          </select>
          <select className="form-control btn" onChange={this.handleDocumentChange}>
            {allDocuments}
          </select>
          <button type="submit" className="btn">Populate Selections</button>
        </form>
      </div>
    );
  }
}

export default ChooseRecipientDocumentForm;
