import React from 'react'



const Jsx1 = () => {
    const user={
        name:"Ahmet",
        surname:"Yilmaz",
        age:20,
        address:{
            city:"istanbul",
            country:"Turkey"
        },
        salary:34000,
        gender:"Erkek",
        message:"iyi geceler!"

    }


  return (
    <div>
        <h2>Isim: {user.name}</h2>
        <h2>Soyisim: {user.surname} </h2>
        <h2>Cinsiyet: {user.gender} </h2>
        <h2>Yas: {user.age} </h2>
        <h2>Adres: {user.address.city} / {user.address.country}  </h2>
        <h2>Maas: {user.salary} $ </h2>
        <h5>Mesaj: {user.message}</h5>


    </div>
  )
}

export default Jsx1