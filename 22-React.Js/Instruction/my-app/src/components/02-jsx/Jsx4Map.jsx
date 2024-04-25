import React from 'react'

const Jsx4Map = () => {
    const countries=[ 
        "India",
        "USA",
        "China",
        "Japan",
        "Russia",
        "Germany",
        "France",
        "UK",
        "Italy",
        "Brazil",
    ]

    const capitals=[
        "Delhi",
        "Washington",
        "Beijing",
        "Tokyo",
        "Moscow",
        "Berlin",
        "Paris",
        "London",
        "Rome",
        "Brasilia",
    ]




  return (
    <div>

        <ul>
            {
                countries.map((item,index)=>(<li key={index}>{index+1} - {item}</li>))
            }
        </ul>


        <select >
            {
                capitals.map((capital,index)=>{

                    return<option key={index}>{capital} </option>

                })


            }

        </select>





    </div>
  )
}

export default Jsx4Map