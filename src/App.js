import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="navbar">
        <div className="logo-combo">
  <img src="Boni_main_logo.png" alt="Boni Logo" className="logo-img" />
  <h1 className="logo-text">Boni-One</h1>
</div>

        <a href="https://wa.me/919999999999" className="nav-cta" target="_blank" rel="noreferrer">
          Chat Now
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Explore Local Services on WhatsApp with Boni!</h2>
          <p>Meet Boni - your teammate who never asks for chai breaks. ERP, automation, AI – all on WhatsApp.</p>
          <a href="https://wa.me/919999999999" className="cta-button" target="_blank" rel="noreferrer">
            Start Chatting
          </a>
        </div>
      </section>

      <marquee className="marquee" scrollamount="6">
        From ERP to AI-powered WhatsApp automation, we deliver a single, scalable platform built to streamline operations, elevate customer engagement, and drive digital transformation — trusted by modern enterprises 💬
      </marquee>

     <section className="section colored">
  <h2 className="heading">What is Boni.one?</h2>
  <p className="paragraph">
    Boni.one is an all-in-one business platform that helps companies manage their entire workflow – from inventory and finances to customer support – all through ERP software, WhatsApp automation, and AI tools.
  </p>
</section>

<section className="section">
  <div className="cards">
    <div className="card">
      <p className="card-title">📦 All-in-One Management</p>
      <p className="card-desc">No more switching apps — ERP, CRM, and automation in one place.</p>
    </div>
    <div className="card">
      <p className="card-title">💬 WhatsApp Automation</p>
      <p className="card-desc">AI-powered chats and customer handling, all inside WhatsApp. Fast, simple, and human-like.</p>
    </div>
    <div className="card">
      <p className="card-title">🧠 Smart Search with Bino</p>
      <p className="card-desc">Need a hotel in Goa? Just ask. Bino finds and books — all via chat.</p>
    </div>
    <div className="card">
      <p className="card-title">🔐 Enterprise-Level Security</p>
      <p className="card-desc">End-to-end encryption with multi-factor protection. Peace of mind for your data.</p>
    </div>
    <div className="card">
      <p className="card-title">📈 Real-Time Insights</p>
      <p className="card-desc">Make smarter decisions with custom dashboards and live analytics.</p>
    </div>
  </div>
</section>

<section className="section colored">
  <h2 className="heading">Top Use Cases</h2>
  <ul className="use-cases">
    <li>🛒 Order from nearby kirana stores</li>
    <li>💈 Book salon, mechanic, or cleaner</li>
    <li>📦 Track orders via WhatsApp</li>
  </ul>
</section>

<section className="section">
  <h2 className="heading">Testimonials 💬</h2>
  <div className="testimonials">
    <div className="quote-card">"Groceries in 10 minutes!" – Amit, Delhi</div>
    <div className="quote-card">"Booked a cleaner on WhatsApp!" – Neha, Pune</div>
    <div className="quote-card">"Works in my own language!" – Ravi, Bangalore</div>
  </div>
</section>

<section className="section awareness-quote">
  <h3 className="awareness-text">“Bino is not just a chatbot - it's your local buddy on WhatsApp helping India go digital.” </h3>
</section>

<footer className="footer">
  <p className="footer-text">Made with ❤️ to spread awareness about Bino.</p>
  <p>purvathnere@gmail.com</p>
</footer>

    </div>
  );
};

export default App;
