import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Tentang() {
    let angkaVar = 0
    const [angkaState, setangkaState] = useState(0);
    const [nama, setnama] = useState("")

    const bilangHalo = () => {
        alert("Halo")
    }

    const bilangHaloParam = (nama) => {
        alert(`Halo ${nama}`)
    }

    function tambah() {
        angkaVar = angkaVar + 1;
        let angkaBaru = angkaState +1;
        setangkaState(angkaBaru);
    }

    const kurang = () => {
        angkaVar = angkaVar - 1;
        let angkaBaru = angkaState - 1;
        setangkaState(angkaBaru);
    };

    const ubahNama = (event) => {
        setnama(event.target.value);
    };



  return (
    <>
    <Navbar />
    <br></br>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => bilangHaloParam("Budi")}>
        Klik ini
    </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={bilangHalo}>
        Klik itu
    </button>

    <hr />

    Angka Var: {angkaVar} <br/>
    Angka State: {angkaState} <br />
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={tambah}>+</button>
    <button className="ml-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={kurang}>-</button>
    
    <br/>
    <input type='text' placeholder='Masukkan nama' onChange={ubahNama}/>
    <br/>
    Nama : {nama}

    </>
  )
}
