import React, { Component } from 'react';

class ReviewSend extends Component {

  state = {}

  render() {
    return (
      <div className="review-send-div">
        <div className="single-recipient">
          <div className="row singleRecipientReviewHeader">
              <div className="col-md-3 singleRecipientReviewHeaderText">
                Recipient Name
                <hr />
              </div>
              <div className="col-md-5 singleRecipientReviewHeaderText">
                Recipient Address
                <hr />
              </div>
              <div className="col-md-4 singleRecipientReviewHeaderText">
                Document to Send
                <hr />
              </div>
          </div>
        </div>
        <div className="single-recipient">
          <div className="row singleRecipientReview">
              <div className="col-md-3 singleRecipientReviewText">
                {this.props.mailingOptions.selected[0].name}
              </div>
              <div className="col-md-5 singleRecipientReviewText">
                {this.props.mailingOptions.selected[0].street + ', ' + this.props.mailingOptions.selected[0].city + ', ' + this.props.mailingOptions.selected[0].state + ', ' + this.props.mailingOptions.selected[0].zip}
              </div>
              <div className="col-md-4 singleRecipientReviewText">
                {this.props.mailingOptions.selected[1].title}
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewSend;
