import React from 'react'
import resim1 from "../../assets/img/image8.jpg"
import resim2 from "../../assets/img/image1.jpg"
import resim3 from "../../assets/img/image4.jpg"

const ResimEkle = () => {
  return (
    <div>
        <h2>Static Yontem</h2>
        <img src="./assets/img/image1.jpg" alt="" />

        <h2>External yontemi ile</h2>
        <img src="https://images.pexels.com/photos/13940670/pexels-photo-13940670.jpeg" width="640" height="426"  alt="" />

        <h2>Import Yontemiyle</h2>
        <img src={resim1} alt="" />
        <br />
        <img src={resim2} alt="" />
        <img src={resim3} alt="" />

        <h2>Require Yontemi</h2>
        <img src={require("../../assets/img/image7.jpg")} alt="" />

    </div>
  )
}

export default ResimEkle