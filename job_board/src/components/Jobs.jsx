import React from 'react'
import "./jobboard.css"

const Jobs = ({title,by,date}) => {
  return (
      <div className='jobs'>
          <h3>{title}</h3>
          <div style={{
              display: 'flex',
              justifyContent: "start",
              gap: "20px",
              marginTop: "10px",
          }}>
              <p>By: {by}</p>
              <p>Date: {date}</p>
          </div>
    </div>
  )
}

export default Jobs