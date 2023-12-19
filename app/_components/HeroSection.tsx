import React from 'react';
import Image from 'next/image';
import backgroundImage from '@/public/hero/main-pic.jpg';

const HeroSection: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', height: '40vh', overflow: 'hidden' }}>
    <Image
      src={backgroundImage}
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
    />
    <div style={{
      position: 'absolute',
      backgroundColor:"#ececec",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(255, 255, 255, 1)',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      minWidth: '550px', // Adjust as needed
      minHeight: '300px', // Adjust as needed
    }}>
      <h1 style={{
        fontFamily: "Inter",
        fontSize: "50px",
        fontWeight: "extrabold",
        lineHeight: "normal",
        letterSpacing: "wider",
        marginBottom: '20px',
      }}>
        Explore new
      </h1>
      <h1 style={{
        fontFamily: "Inter",
        fontSize: "30px",
        fontWeight: "extrabold",
        lineHeight: "normal",
        letterSpacing: "wider",
      }}>
        Step into the vibrant world of new food and embark on a culinary adventure like no other. We're 
        your passport to a universe of fresh, exciting flavors and mouthwatering sensations. With a diverse 
        array of recipes, each carefully curated to tantalize your taste buds, our platform is your gateway 
        to culinary exploration.
      </h1>
    </div>
    <button
      className="mb-10 text-base xl:text-lg xl:px-8"
      style={{ backgroundColor: 'orange' }}
    >
      Discover
    </button>
  </div>
);

export default HeroSection;
