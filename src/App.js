import React, { Component } from 'react';
import './App.css'
import ChooseRecipientDocumentForm from './ChooseRecipientDocumentForm'
import SingleDocument from './SingleDocument'


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
        content:'[Lorem],\n\nIpsum dolor sit amet, magna oblique deserunt ne has, mea sint debet habemus at. In vim ignota numquam, cu errem denique mel. Pri meis labore no. Ius disputando philosophia te. Eum ei agam nostrum. Per id doming delectus.'
      },
      {
        id:2,
        title:'Violation Notice',
        content:'[Lorem],\n\nOffendit ea quo, minim elitr efficiendi et has, sed veri noluisse elaboraret cu. Sea autem docendi ut, aliquid feugiat epicurei in cum.'
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

  render() {
    console.log("STATE UPDATED TO", this.state)
    return (
      <div className='app-container'>
        <div className="logo">mailmodo</div>
          <div className="choose-recipient-div">
            <ChooseRecipientDocumentForm mailingOptions={this.state} updateStateSelectedFunc={this.updateStateSelected}/>
          </div>
        <SingleDocument currentDocument={this.state} />
      </div>
    );
  }
}

export default App;
