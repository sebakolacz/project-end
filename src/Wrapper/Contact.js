import React from 'react';
import arrow from '../Assets/arrow.svg';
import { db } from "../firebase";
 
const Contact = () => {

  const email = getElementByClass("email");

  db.collection("newsletter").set({email: email.value})
  
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

  return (
    <div className="contact">

        <div className="contact__information">
            <h1>Kasprowy</h1>
            <h2>RESORT & SPA</h2>
            <h3>Legionowska 24d, 34-400 Zakopane, Polska</h3>
            <h4>tel.: +48 38 58 38 400</h4>
        </div>

        <div className="contact__newsletter">
            <h1>Newsletter:</h1> 
            <input className="email" type="text" placeholder="Podaj adres e-mail" />
            <button><img src={arrow} /></button>
        </div>

    </div>
  );
}

export default Contact;