import React, { useState } from 'react'
import "../../App.css"
import Title from './Title'

const ESignature = () => {

    const [name, setName] = useState("Your Signature")
    const [date, setDate] = useState("Select Your Date")

    const inputStyle={
        border:"none",
        borderBottom:"2px dotted black",
        outline:"none",
        padding:"0.8rem",
        backgroundColor:"lightgray"
    }

    const handleDateTime = (e) => { 
        setDate(e.target.value)
    }

    const handleChangeName = (e) => { 
        setName(e.target.value)
    }




  return (
    <div className='container'>
        <Title classess={"title"} text={name}  />
        <Title  classess={"Title-main mb-5"} 
        text={date ? date :"Select Your Date"} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae laudantium mollitia ab soluta dicta officia eius voluptate at quos placeat, culpa quo aliquid labore sunt ex reprehenderit animi? Temporibus!
        Placeat amet quo dolorum nihil. Fugit quas corrupti culpa earum vitae, eius incidunt optio voluptate, illum, iusto recusandae. Tenetur, iste distinctio! Tempore dolorem doloribus, veniam et quae culpa fofficia eius voluptate at quos placeat, culpa quo aliquid labore sunt ex reprehenderit animi? Temporibus!
        Placeat amet quo dolorum nihil. Fugit quas corrupti culpa earum vitae, eius incidunt optio voluptate, illum, iusto recusandae. Tenetur, iste distinctio! Tempore dolorem doloribus, veniam et quae culpa fofficia eius voluptate at quos placeat, culpa quo aliquid labore sunt ex reprehenderit animi? Temporibus!
        Placeat amet quo dolorum nihil. Fugit quas corrupti culpa earum vitae, eius incidunt optio voluptate, illum, iusto recusandae. Tenetur, iste distinctio! Tempore dolorem doloribus, veniam et quae culpa fuga expedita?</p>

        <footer className='d-flex' style={{justifyContent:"space-around",position:"relative",top:"20vh"}} >

            <input type="datetime-local"  value={date}  style={inputStyle} onChange={handleDateTime}  />

            <input type="text" value={name} style={inputStyle}  onChange={handleChangeName}  />

        </footer>




    </div>
  )
}

export default ESignature