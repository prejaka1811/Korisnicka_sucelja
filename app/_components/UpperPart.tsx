import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/hero/main-pic.jpg';

const HeroSection: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', height: '40vh', overflow: 'visible' }}>
    <Image
      src={backgroundImage}
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
      style={{ zIndex: -2 }}
    />
    <div style={{
      backgroundColor: "rgba(236, 236, 236, 0.45)",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      position: 'relative',
      zIndex: -1,
      padding: '20px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '75%', // Set max width to 60%
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: "2rem",
          fontWeight: "bold",
        }}>
          Explore new
        </h1>
        <p style={{
          fontSize: "1rem",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}>
          Step into the vibrant world of new food and embark on a culinary adventure like no other. We're 
          your passport to a universe of fresh, exciting flavors and mouthwatering sensations. With a diverse 
          array of recipes, each carefully curated to tantalize your taste buds, our platform is your gateway 
          to culinary exploration.
        </p>
      </div>
    </div>    
  </div>
);

export default HeroSection;
