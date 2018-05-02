import React from 'react'

const DocumentSelect = (props) => {
  return (
      <option value={props.singleDocument.id}>{props.singleDocument.title}</option>
  )
}

export default DocumentSelect
