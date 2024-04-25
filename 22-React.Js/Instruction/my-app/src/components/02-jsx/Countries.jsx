import React from 'react'
import countries from "../../assets/data/countries.json"

const Countries = () => {
  return (
    <table border={1}>
        <thead>
            <tr>
                <th>Sira No</th>
                <th>Ulke Adi</th>
                <th>Ulke Kodu</th>
            </tr>
        </thead>
        <tbody>
            {
                countries.map((item,index)=>(<tr key={item.code}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                </tr>))
            }

        </tbody>








    </table>
  )
}

export default Countries