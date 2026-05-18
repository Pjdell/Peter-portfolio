import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e => {
    e.preventDefault();

    emailjs.sendForm(
      'service_b7kj16e',
      'service_b7kj16e',
      form.current,
      'duP-4GNcA-mEUOQOh'
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch(() => {
      alert('Failed to send message. Please try again later.');
    });

    e.target.reset();

  });
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} ckassName="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Me a Message</button>
      </form>
     

    </section>
  );
}

export default Contact;