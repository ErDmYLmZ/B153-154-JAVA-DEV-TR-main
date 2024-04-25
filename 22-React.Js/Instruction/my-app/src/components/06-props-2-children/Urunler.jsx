import React from 'react'
import Uruncards from './Uruncards'
import "./cards.scss"


const Urunler = ({children}) => {
  return (
    <div>
        <Uruncards>
            <h2>Sony Tv</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores mollitia consectetur facilis dignissimos molestiae error laboriosam, quibusdam nisi repellat eos ea aliquid, sapiente sequi porro rem! Aspernatur, doloremque a.</p>
            <button>Urun Ekle</button>
        </Uruncards>

        <Uruncards>
            <h2>Philps</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores mollitia consectetur facilis dignissimos molestiae error laboriosam, quibusdam nisi repellat eos ea aliquid, sapiente sequi porro rem! Aspernatur, doloremque a.</p>
            <button className='btn'>Urun Ekle</button>
        </Uruncards>

        <Uruncards>
            <h3>Samsung Radio-Player</h3>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores mollitia consectetur facilis dignissimos molestiae error laboriosam, quibusdam nisi repellat eos ea aliquid, sapiente sequi porro rem! Aspernatur, doloremque a.</div>
            <button className='btn'>Urun Ekle</button>
        </Uruncards>

        <div>

          {children}
        
        </div>



    </div>
  )
}

export default Urunler