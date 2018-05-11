import React, { Component } from 'react';

class SingleDocument extends Component {

  state = {}

  render() {
    console.log("SINGLE DOCUMENT STATE", this.state)
    console.log("single document", this.props)
    let selectedContent = this.props.currentDocument.selected[1].content;
    let selectedContentArray = selectedContent.split(' ')
    let selectedContentArrayMap = selectedContentArray.map((item) => {
      if (item.includes('[RECIPIENT-NAME]')) {
        let recipientMergeTag = item.replace('[RECIPIENT-NAME]', this.props.currentDocument.selected[0].name)
        return recipientMergeTag
      }
      return item
    })
    let selectedContentArrayMapJoined = selectedContentArrayMap.join(' ')
    return (
      <div className="single-document-div">
        <textarea className="single-document" value={selectedContentArrayMapJoined} >

        </textarea>
      </div>
    );
  }
}

export default SingleDocument;
