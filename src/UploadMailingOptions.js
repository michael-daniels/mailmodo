import React, { Component } from 'react';

class UploadMailingOptions extends Component {

  state = {

  }

  render() {
    return (
      <div className="wrapper">
        <div className="row upload-row">
          <div className="col-md-6">
            <form>
              <input className="form-control" placeholder="name"/>
              <input className="form-control" placeholder="street" />
              <input className="form-control" placeholder="city" />
              <input className="form-control" placeholder="state" />
              <input className="form-control" placeholder="zip" />
              <button className="btn form-control">upload new recipient</button>
            </form>
          </div>
          <div className="col-md-6">
            <form>
              <input className="form-control" placeholder="document title" />
              <textarea className="form-control upload-text-area" placeholder="document content"/>
              <button className="btn form-control">upload new document template</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadMailingOptions;
