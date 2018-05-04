import React, { Component } from 'react';

class UploadMailingOptions extends Component {

  state = {}

  handleRecipientSubmit = (event) => {
    event.preventDefault()
    this.props.updateRecipientsFunc({
      id:100,
      name:this.state.name,
      street:this.state.street,
      city:this.state.city,
      state:this.state.state,
      zip:this.state.zip,
    })
    this.setState({
      id:100,
      name:'',
      street:'',
      city:'',
      state:'',
      zip:'',
    })
  }
  handleDocumentSubmit = (event) => {
    event.preventDefault()
    this.props.updateDocumentsFunc({
      id:100,
      title:this.state.title,
      content:this.state.content,
    })
    this.setState({
      id:'',
      title:'',
      content:'',
    })
  }

  render() {
    console.log("UPLOAD PROPS", this.props)
    console.log("CURRENT STATE OF UPLOAD COMPONENT", this.state)
    return (
      <div className="wrapper">
        <div className="row upload-row">
          <div className="col-md-6">
            <form onSubmit={this.handleRecipientSubmit}>
              <input className="form-control" placeholder="name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
              <input className="form-control" placeholder="street" value={this.state.street} onChange={e => this.setState({street: e.target.value})}/>
              <input className="form-control" placeholder="city" value={this.state.city} onChange={e => this.setState({city: e.target.value})}/>
              <input className="form-control" placeholder="state" value={this.state.state} onChange={e => this.setState({state: e.target.value})}/>
              <input className="form-control" placeholder="zip" value={this.state.zip} onChange={e => this.setState({zip: e.target.value})}/>
              <button className="btn form-control">upload new recipient</button>
            </form>
          </div>
          <div className="col-md-6">
            <form onSubmit={this.handleDocumentSubmit}>
              <input className="form-control" placeholder="document title" value={this.state.title} onChange={e => this.setState({title: e.target.value})}/>
              <textarea className="form-control upload-text-area" placeholder="document content" value={this.state.content} onChange={e => this.setState({content: e.target.value})}/>
              <button className="btn form-control">upload new document template</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadMailingOptions;
