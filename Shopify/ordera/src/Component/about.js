import React from 'react';

export default function About() {
  return (
    <div className="about-section" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>About Ordera</h2>
      <div className="about-details" style={{ marginTop: '20px', fontSize: '1.1rem' }}>
        <p>Ordera is a specialized platform designed for inventory tracking.</p>
        <p><strong>Our Services:</strong></p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✓ 3PL Inventory Management</li>
          <li>✓ Real-time Order Tracking</li>
          <li>✓ Vendor Management Solutions</li>
        </ul>
      </div>
    </div>
  );
}