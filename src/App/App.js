import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import arrow from '../Assets/arrow.svg';
import { db } from "../firebase";


function App() {
  
  const [value, onChange] = useState(new Date(2020, 10, 19));
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const numberValue = (e) => {
    setNumber(e);
  };
  const nameValue = (e) => {
    setName(e);
  };
  const surnameValue = (e) => {
    setSurname(e);
  };
  const addressValue = (e) => {
    setAddress(e);
  };
  const phoneValue = (e) => {
    setPhone(e);
  };
  const emailValue = (e) => {
    setEmail(e);
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("dane").add({ date: value, number: number, name: name, surname: surname, address: address, phone: phone, email: email });
  };


  const d1 = value[0];
  const d2 = value[1];
  const diff = Math.floor((d2-d1)/864e5 + 1);
  const price = 50;
  const numberOfGuests = number;
  const total = price * diff * numberOfGuests || 0;
  const text = "Suma do zapłaty: "+ total + '$';

  return (
    <div className="app">
      <div className="app__calendar">
        <Calendar
          onChange={onChange}
          defaultValue={value}
          selectRange
        />
      </div>
      <div className="app__form">
        <form onSubmit={handleSubmit}>
          <input id="numberOfGuests" placeholder="numberOfGuests" type="number" value={number} onChange={(e) => numberValue(e.target.value)} />
          <input id="name" placeholder="Name" type="text" value={name} onChange={(e) => nameValue(e.target.value)} />
          <input id="surname" placeholder="Surname" type="text" value={surname} onChange={(e) => surnameValue(e.target.value)} />
          <input id="address" placeholder="Address" type="text" value={address} onChange={(e) => addressValue(e.target.value)} />
          <input id="phone" placeholder="Phone" type="number" value={phone} onChange={(e) => phoneValue(e.target.value)} />
          <input id="email" placeholder="E-mail" type="text" value={email} onChange={(e) => emailValue(e.target.value)} />
          <button><img src={arrow} type="submit" value="Wyślij" /></button>
          <div className="app__calculator" >{text}</div>
        </form>
      </div>
      
    </div>
  );
}

export default App;