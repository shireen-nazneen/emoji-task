import React from 'react'

export default function Card_(props) {
  const { title, symbol } = props
  return (
    <div className="p-2" >
      <h6 className="title-text ">{title}</h6>
      <div className="image">{symbol}</div>
    </div>
  )
}
