import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, ArrowRight, BarChart, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <span className="badge">Leading Chemical Exporters</span>
            <h1 className="hero-title">Precision Chemicals for <span className="text-primary">Global Progress</span></h1>
            <p className="hero-description">
              Expertly manufacturing and exporting high-purity industrial chemicals. We bridge the gap between innovation and global distribution.
            </p>
            <div className="hero-btns">
              <Link to="/products" className="btn btn-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Sales
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-image"
          >
            <div className="chemical-blob"></div>
            <FlaskConical size={300} className="floating-icon" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>50+</h3>
            <p>Countries Exported</p>
          </div>
          <div className="stat-card">
            <h3>1.2k+</h3>
            <p>Global Clients</p>
          </div>
          <div className="stat-card">
            <h3>25+</h3>
            <p>Years Excellence</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>ISO Certified</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="section-header">
          <h2 className="section-title">International Business Excellence</h2>
          <p>Why clients across 5 continents trust Alchemix Global for their chemical needs.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <Globe className="feature-icon" size={40} />
            <h3>Global Logistics</h3>
            <p>Seamless export operations with door-to-door delivery across Europe, Asia, and the Americas.</p>
          </div>
          <div className="feature-card glass-card">
            <ShieldCheck className="feature-icon" size={40} />
            <h3>Quality Assurance</h3>
            <p>Every batch undergoes rigorous 5-step laboratory testing to ensure international standards.</p>
          </div>
          <div className="feature-card glass-card">
            <Zap className="feature-icon" size={40} />
            <h3>Rapid Export</h3>
            <p>Optimized supply chain management ensuring faster turnaround times for international orders.</p>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="about-cta container">
        <div className="glass-card cta-content">
          <div className="cta-text">
            <h2>Ready to Export?</h2>
            <p>Partner with India's leading chemical manufacturer for your international projects.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
