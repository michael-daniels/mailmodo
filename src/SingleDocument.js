import React, { Component } from 'react';

class SingleDocument extends Component {

  state = {}

  render() {
    //console.log("SELECTED CONTENT", this.props.currentDocument.selected[1].content)
    console.log("single document", this.props)
    //let currentDocument = this.props.currentDocument[1].content;
    return (
      <div className="single-document-div">
        <textarea className="single-document" value={this.props.currentDocument.selected[1].content}>

        </textarea>
      </div>
    );
  }
}

export default SingleDocument;
