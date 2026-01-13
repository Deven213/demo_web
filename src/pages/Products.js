import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Droplet, TestTube, Box, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Industrial Solvents",
    description: "High-purity organic solvents for pharmaceutical and textile industries.",
    icon: <Droplet style={{ color: 'var(--primary)' }} size={32} />,
    specs: ["99.9% Purity", "ISO Certified", "Global Standard Bulk Packaging"]
  },
  {
    id: 2,
    name: "Specialty Polymers",
    description: "Advanced polymer solutions for automotive and aerospace manufacturing.",
    icon: <Box style={{ color: 'var(--secondary)' }} size={32} />,
    specs: ["Thermal Stability", "Custom Formulation", "REACH Compliant"]
  },
  {
    id: 3,
    name: "Laboratory Reagents",
    description: "Analytical grade chemicals for research and diagnostic labs.",
    icon: <TestTube style={{ color: 'var(--accent)' }} size={32} />,
    specs: ["Batch Certified", "Micro-Filtered", "Secure International Shipping"]
  },
  {
    id: 4,
    name: "Catalysts & Additives",
    description: "Process-specific catalysts to optimize industrial chemical reactions.",
    icon: <Beaker style={{ color: 'var(--primary)' }} size={32} />,
    specs: ["High Efficiency", "Reduced waste", "Technical Support Included"]
  }
];

const Products = () => {
  return (
    <div className="products-page">
      {/* Premium Products Header */}
      <section className="products-header">
        <div className="container header-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="header-visual"
          >
            <div className="visual-circle"></div>
            <Beaker size={120} className="header-icon-main" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="header-content"
          >
            <span className="badge">World-Class Solutions</span>
            <h1 className="header-title-premium">Precision Chemicals for <span className="text-primary">Global Industries</span></h1>
            <p className="header-desc">
              From high-purity solvents to specialized laboratory reagents, our product portfolio is engineered for excellence and exported globally.
            </p>
            <div className="header-meta">
              <div className="meta-item">
                <span className="meta-val">500+</span>
                <span className="meta-lab">Formulations</span>
              </div>
              <div className="meta-sep"></div>
              <div className="meta-item">
                <span className="meta-val">99.9%</span>
                <span className="meta-lab">Avg. Purity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="products-showcase container">
        <div className="section-intro">
          <h2 className="section-title">Industrial Portfolio</h2>
          <div className="section-line"></div>
        </div>

        <div className="products-grid-premium">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="product-card-premium glass-card"
            >
              <div className="card-top">
                <div className="product-icon-wrapper">{product.icon}</div>
                <div className="product-tag">Certified</div>
              </div>
              
              <div className="card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                
                <div className="spec-list">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="spec-tag">{spec}</div>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <button className="btn btn-primary btn-full">
                  Technical Data Sheet <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compliance & Export Section */}
      <section className="compliance-section">
        <div className="container">
          <div className="compliance-grid glass-card">
            <div className="compliance-text">
              <h2>Global Export Standards</h2>
              <p>Our products undergo rigorous multi-level testing to meet the stringent requirements of international regulatory bodies.</p>
              <div className="compliance-icons">
                <div className="c-icon"><span>ISO</span> 9001</div>
                <div className="c-icon">REACH</div>
                <div className="c-icon">FDA</div>
                <div className="c-icon">GMP</div>
              </div>
            </div>
            <div className="compliance-cta">
              <h3>Bulk Export Inquiry?</h3>
              <p>Custom packaging and logistics available for international orders.</p>
              <Link to="/contact" className="btn btn-outline">Consult Our Export Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
