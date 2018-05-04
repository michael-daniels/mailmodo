import React, { Component } from 'react';
import './App.css'
import ChooseRecipientDocumentForm from './ChooseRecipientDocumentForm'
import SingleDocument from './SingleDocument'
import SelectOptions from './SelectOptions'
import UploadMailingOptions from './UploadMailingOptions'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {

  state = {
    recipients: [
      {
        id:1,
        name:'Michael Daniels',
        street:'8031 W Hilton Ave',
        city:'Phoenix',
        state:'Arizona',
        zip:'85043',
      },
      {
        id:2,
        name:'Liz Daniels',
        street:'1234 W Hollow Ave',
        city:'Tucson',
        state:'Arizona',
        zip:'12345',
      },
    ],
    documents:[
      {
        id:1,
        title:'Collections Notice',
        content:'[RECIPIENT],\n\nIpsum dolor sit amet, magna oblique deserunt ne has, mea sint debet habemus at. In vim ignota numquam, cu errem denique mel. Pri meis labore no. Ius disputando philosophia te. Eum ei agam nostrum. Per id doming delectus. \n\n - Michael'
      },
      {
        id:2,
        title:'Violation Notice',
        content:'[RECIPIENT],\n\nOffendit ea quo, minim elitr efficiendi et has, sed veri noluisse elaboraret cu. Sea autem docendi ut, aliquid feugiat epicurei in cum.\n\n - John'
      },
    ],
    selected:[
      {
        id:1,
        name:'Michael Daniels',
        street:'8031 W Hilton Ave',
        city:'Phoenix',
        state:'Arizona',
        zip:'85043',
      },
      {
        id:1,
        title:'Collections Notice',
        content:'Choose recipient and a document above...'
      }
    ]
  }

  updateStateSelected = (selectedRecipient, selectedDocument) => {
    this.setState({...this.state, selected:[selectedRecipient,selectedDocument]})
  }
  updateStateRecipients = (newRecipient) => {
    this.setState({...this.state, recipients:[...this.state.recipients, newRecipient]})
  }
  updateStateDocuments = (newDocument) => {
    this.setState({...this.state, documents:[...this.state.documents, newDocument]})
  }

  render() {
    console.log("STATE UPDATED TO", this.state)
    return (
      <div className='app-container'>
        <div className="logo">mailmodo</div>

        <Router>
          <div>
            <div className="row top-nav-row">
              <div className="col-md-4 top-nav">
                <Link to="/upload">recipients & docs</Link>
              </div>
              <div className="col-md-4 top-nav">
                <Link to="/select">prepare a mailing</Link>
              </div>
              <div className="col-md-4 top-nav">
                <Link to="/select">review & send</Link>
              </div>
              </div>
              <Route exact path="/select" render={(props) => ( <SelectOptions mailingOptions={this.state} updateStateSelectedFunc={this.updateStateSelected}/> )} />
              <Route exact path="/upload" render={(props) => ( <UploadMailingOptions updateRecipientsFunc={this.updateStateRecipients} updateDocumentsFunc={this.updateStateDocuments}/> )} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
