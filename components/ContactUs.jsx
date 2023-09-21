import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Import the CSS Module

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission here

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Subject:', subject);
    console.log('Message:', message);
  };

  const newLocal = 'John Doe';
  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.label}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          placeholder={newLocal}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className={styles.inlineFields}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="Exmaple@some.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className={styles.label} htmlFor="phone">
            Phone:
          </label>
          <input
            className={styles.input}
            type="tel"
            id="phone"
            placeholder="123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <label className={styles.label} htmlFor="subject">
          Subject:
        </label>
        <input
          className={styles.input}
          type="text"
          id="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.input}
          id="message"
          placeholder="Type your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
