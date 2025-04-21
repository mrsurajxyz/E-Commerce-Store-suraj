import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About StyleHub</h1>
      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At StyleHub, we believe that fashion should be accessible, sustainable, and expressive. 
            We curate contemporary clothing that helps you tell your unique story while maintaining 
            our commitment to quality and environmental responsibility.
          </p>
        </section>

        <section className="story">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, StyleHub emerged from a simple vision: to create a shopping 
            experience that combines style, sustainability, and convenience. We carefully 
            select each piece in our collection to ensure it meets our standards for both 
            quality and conscious manufacturing.
          </p>
        </section>

        <section className="values">
          <h2>What Sets Us Apart</h2>
          <ul>
            <li>Curated Collections: Thoughtfully selected pieces for every style</li>
            <li>Sustainable Practices: Eco-friendly packaging and responsible sourcing</li>
            <li>Quality Assurance: Rigorous quality checks on all our products</li>
            <li>Customer First: Dedicated support and hassle-free shopping experience</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;