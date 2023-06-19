import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Skontaktuj się</h2>
      <form>
        <input type="text" placeholder="Imię" />
        <input type="email" placeholder="Nazwisko" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Wyślij!</button>
      </form>
    </section>
  );
}

export default Contact;