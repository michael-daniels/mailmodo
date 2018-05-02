import React from 'react'

const RecipientsSelect = (props) => {
  return (
      <option value={props.singleRecipient.id}>{props.singleRecipient.name}</option>
  )
}

export default RecipientsSelect
