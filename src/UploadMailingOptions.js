import React, { Component } from 'react';

class UploadMailingOptions extends Component {

  state = {

  }

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6">
            <form>
              <input className="form-control" placeholder="name"/>
              <input className="form-control" placeholder="street" />
              <input className="form-control" placeholder="city" />
              <input className="form-control" placeholder="state" />
              <input className="form-control" placeholder="zip" />
            </form>
          </div>
          <div className="col-md-6">
            <form>
              <input className="form-control" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadMailingOptions;
