import React, { Component } from 'react';

class UploadMailingOptions extends Component {

  state = {}

  render() {
    console.log("CURRENT STATE OF UPLOAD COMPONENT", this.state)
    return (
      <div className="wrapper">
        <div className="row upload-row">
          <div className="col-md-6">
            <form>
              <input className="form-control" placeholder="name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
              <input className="form-control" placeholder="street" value={this.state.street} onChange={e => this.setState({street: e.target.value})}/>
              <input className="form-control" placeholder="city" value={this.state.city} onChange={e => this.setState({city: e.target.value})}/>
              <input className="form-control" placeholder="state" value={this.state.state} onChange={e => this.setState({state: e.target.value})}/>
              <input className="form-control" placeholder="zip" value={this.state.zip} onChange={e => this.setState({zip: e.target.value})}/>
              <button className="btn form-control">upload new recipient</button>
            </form>
          </div>
          <div className="col-md-6">
            <form>
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
