import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our export team will contact you shortly.');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-header"
          >
            <h1 className="hero-title">Global <span className="text-primary">Inquiry Center</span></h1>
            <p className="hero-description">Connecting our premium chemical solutions with your international projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-block">
              <Mail className="info-icon" />
              <div>
                <h4>Email Us</h4>
                <p>export@alchemixglobal.com</p>
                <p>support@alchemixglobal.com</p>
              </div>
            </div>
            <div className="info-block">
              <Phone className="info-icon" />
              <div>
                <h4>Call Support</h4>
                <p>+91 (123) 456-7890</p>
                <p>Mon - Fri, 9am - 6pm IST</p>
              </div>
            </div>
            <div className="info-block">
              <MapPin className="info-icon" />
              <div>
                <h4>Headquarters</h4>
                <p>123 Chemical Plaza, Industrial District</p>
                <p>Mumbai, MH 400001, India</p>
              </div>
            </div>
            <div className="info-block">
              <Globe className="info-icon" />
              <div>
                <h4>Global Offices</h4>
                <p>Singapore | Rotterdam | Dubai | New Jersey</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="contact-form-container glass-card"
          >
            <h3>Send Export Inquiry</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
                <select 
                  required 
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                >
                  <option value="" disabled>Select Country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <input 
                type="text" 
                placeholder="Target Product" 
                value={formData.product}
                onChange={(e) => setFormData({...formData, product: e.target.value})}
              />
              <textarea 
                placeholder="Inquiry Details / Specification Requirements" 
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
