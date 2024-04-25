import React from 'react';
import "./card-list.scss"


const ExternalSass = () => {
  return (
    <div>
      <h1> This is external sass component.</h1> 
      <div className="card-list">
        <ul>
            <li>Lorem.</li>
            <li>Aut.</li>
            <li>Incidunt.</li>
            <li>Repellat?</li>
        </ul>

      </div>

      <p style={{marginBottom: "1500px"}}>Lorem, ipsum.</p>


    </div>
  )
}

export default ExternalSass