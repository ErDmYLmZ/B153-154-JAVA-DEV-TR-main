import React from 'react'

const InternalStyle = () => {

    const navList={
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue',
        padding: '10px',
        listStyleType:"none",
        fontSize: '20px',
        

    }
    


  return (
    <div>
        <h2>Internal Style</h2>
        <nav >
            <ul style={navList}>
                <li><a href="#" style={{textDecoration:"none"}}>Hakkimizda</a></li>
                <li><a href="#" style={{textDecoration:"none"}}  >Iletisim</a></li>
                <li><a href="#" style={{textDecoration:"none"}}  >Urunler</a></li>
            </ul>
        </nav>

        <ul style={{...navList,backgroundColor:"crimson",fontSize:"30px"}}>
            <li><a href="#">Elma</a></li>
            <li><a href="#">Armut</a></li>
            <li><a href="#">Balik</a></li>
        </ul>


    </div>
  )
}

export default InternalStyle